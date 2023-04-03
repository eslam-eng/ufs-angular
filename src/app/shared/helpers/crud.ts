import { HashTable } from "angular-hashtable";
import { environment } from "src/environments/environment";
import { Auth } from "../auth";
import { Helper } from "../helper";
import { Message } from "../message";
import { GlobalService } from "../services/global.service";
import { Remove } from "./remove";

export class Crud {

  /**
   * document
   */
  doc: any = document;

  /**
   * jquery
   */
  $: any = $;

  /**
   * filter params
   */
  filter: any = {};

  /**
   * response data of api if there is pagination
   */
  response: any = {};

  /**
   * resource
   */
  resource: any = {};

  /**
   * data of resources
   */
  data: any = [];

  /**
   * main base url of api
   *
   */
  title: any = "";

  /**
   * main base url of api
   *
   */
  baseApiUrl: any = "";

  /**
   * store api of insert
   *
   */
  storeApiUrl: any = "/store";

  /**
   * update api
   *
   */
  updateApiUrl: any =  "/update";

  /**
   * update api
   *
   */
  destroyApiUrl: any = "/destroy";

  /**
   * update api
   *
   */
  loadResourceApiUrl: any = "";

  /**
   * required fields message
   *
   */
  requiredMessage: any = 'fill all required data';

  /**
   * permission controllers
   *
   */
  canAdd: any = true;
  canEdit: any = true;
  canRemove: any = true;
  isCreate: any = false;

  /**
   * load item
   */
  paging: any = false;

  /**
   * load item
   */
  loading: any = false;

  /**
   * load item
   */
  displayLoading: any = false;

  /**
   * load item
   */
  displayError: any = false;

  /**
   * load item
   */
  displayCreate: any = false;

  /**
   * load item
   */
  isSubmit: any = false;

  /**
   * load item
   */
  requiredFields: any = [];

  /**
   * all fields
   */
  fillable: any = [];

  /**
   * all breadcrumbs
   */
  breadcrumbList: any = [];

  /**
   * load all item action
   */
  reload: any;

  /**
   * selecte records
   */
  selectedResources = new HashTable<any, any>();

  // remove instance
  removeInstance:  Remove;
  displayLoadTrash: any = false;
  loadingTrash: any = false;
  displayImport: any = false;
  displayExport: any = false;
  selectedAllToggle:any = false;
  displayValidateMessage: any = true;


  constructor(public service: GlobalService) {
    this.removeInstance = new Remove(service, this);
    this.reload = () => {
      this.get();
      this.selectedResources = new HashTable();
    };
    this.initBreadCrumb();
  }

  getExcelFileUrl() {
    return environment.apiUrl + "/"+this.baseApiUrl+"/excel/download?api_token="+Auth.getApiToken();
  }

  getExcelFileApi() {
    return this.baseApiUrl + "/import";
  }

  /**
   * init breadcrumb
   *
   */
  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  /**
   * add or remove item from selected hashtable
   *
   */
  validate(item) {
    if (this.requiredFields.length <= 0)
      return true;

    return Helper.validator(item, this.requiredFields);
  }

  /**
   * add or remove item from selected hashtable
   *
   */
  toggle(item) {
    if (this.selectedResources.has(item.id)) {
      item.selected = 0;
      this.selectedResources.remove(item.id);
    } else {
      item.selected = 1;
      this.selectedResources.put(item.id, item);
    }
  }

  /**
   * load all the data of table
   */
  get(loading=false) {
    //this.loading = true;
    this.isCreate = false;
    this.loadingTrash = false;
    this.loading = loading;
    this.service.get(this.baseApiUrl, this.filter).subscribe((res: any) =>{
      if (this.paging) {
        this.data = res.data;
        this.response = res;
        Helper.prepagination(this.response);
      }
      else {
        this.data = res;
        if (this.canAdd && this.displayCreate)
          this.create();
      }

      this.loading = false;
      this.getAction(res);
    });
  }

  /**
   * load all the one resource
   */
  load(id) {
    this.loading = true;
    this.service.get(this.baseApiUrl+this.loadResourceApiUrl+"/"+id, this.filter).subscribe((res: any) =>{
      this.resource = res;
      this.loading = false;
      this.getAction(res);
    });
  }

  /**
   * new new row
   * @param data
   */
  create(data={}) {
    if (this.isCreate)
      return Message.error(Helper.trans('fill all fields of the row'));

    this.isCreate = true;
    let arr = [];
    arr.push(data);
    this.data.forEach(element => {
      arr.push(element);
    });

    this.data = arr;
  }

  /**
   * store or update object
   * if id update
   * ifnot store new one
   * @param data
   */
  send(data: any, isFormData=false) {
    if (data.id) {
      this.update(data, isFormData);
    } else {
      this.store(data, isFormData);
    }
  }

  /**
   * store new object
   * @param data
   */
  store(data, isFormData=false) {
    if (!this.canAdd)
      return;

    if (!this.validate(data)) {
      if(this.displayValidateMessage)
        Message.error(Helper.trans(this.requiredMessage));
      return;
    }

    if (this.displayLoading)
      Helper.loader(true);

    this.isSubmit = true;
    if (isFormData)
      data = Helper.toFormData(data);

    this.service.store(this.baseApiUrl + this.storeApiUrl, data).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
        this.reset(data);
        this.isCreate = false;

        this.get();
        this.isSubmit = false;
      } else {
        Helper.loader(false);
        this.isSubmit = false;
        if (this.displayError)
          Message.error(res.message);
      }
      this.storeAction(res);
      this.action(res);
      this.isSubmit = false;

      //if (this.displayLoading)
      Helper.loader(false);
    });
  }

  /**
   * update data of object
   * @param data
   */
  update(data, isFormData=false) {
    let object = data;
    if (!this.canEdit)
      return;


      if (!this.validate(data)) {
        if(this.displayValidateMessage)
          Message.error(Helper.trans(this.requiredMessage));
        return;
      }

    if (this.displayLoading)
      Helper.loader(true);

    this.isSubmit = true;
    if (isFormData)
    object = Helper.toFormData(data);

    this.service.store(this.baseApiUrl + this.updateApiUrl+"/"+data.id, object).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
        this.get();
      } else {
        Message.error(res.message);
      }
      this.updateAction(res);
      this.action(res);
      this.isSubmit = false;
      if (this.displayLoading)
        Helper.loader(false);
    });
  }

  /**
   * remove data
   * @param data
   * @param index of item in array
   */
  destroy(data, index=0, action=null) {
    return this.removeInstance.destroy(data, index, action);
  }

  /**
   * remove selected items
   */
  removeSelected() {
    return this.removeInstance.destroySelected();
  }

  /**
   * action method after load all data
   * @param response
   */
  getAction(response) {
    // no some thing
  }

  /**
   * action method after store
   * @param response
   */
  storeAction(response) {
    // no some thing
  }

  /**
   * action method after update
   * @param response
   */
  updateAction(response) {
    // no some thing
  }

  /**
   * action method after remove
   * @param response
   */
  destroyAction(response) {
    // no some thing
  }

  /**
   * action method after store, update and remove
   * @param response
   */
  action(response) {
    // no some thing
  }

  /**
   * search in fields
   * @param item
   */
  search(item) {
    if (!this.filter.search)
      return true;

    var values = [];
    Object.keys(item).forEach(key => {
      values.push(item[key]);
    });

    if (values.toString().toLowerCase().includes(this.filter.search.toString().toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  selectAll() {
    if (this.selectedAllToggle) {
      this.data.forEach(element => {
        if (this.selectedResources.has(element.id))
          this.selectedResources.remove(element.id)
      });
      this.selectedAllToggle = false;
    } else {
      this.data.forEach(element => {
        this.selectedResources.put(element.id, element);
      });
      this.selectedAllToggle = true;
    }
  }

  reset(item) {
    this.resource = {photo_url: "/assets/img/avatar.png"};
    item = {};
  }

  loadTrash() {
    this.loadingTrash = true;
  }

  print() {
    Helper.print();
  }

  excel() {
    this.doc.exportExcel();
  }

  pdf() {
    this.doc.printPdf();
  }

  word() {
    this.doc.word();
  }

  import() {
    this.$('#importExcelModal').modal('show');
  }

  export() {
    this.$('#exportExcelModal').modal('show');
  }

  ngOnInit() {

  }


  /**
   * load file in model
   * @param evnt of the input
   * @param key attribute of object
   * @param model object
   */
  loadFile(evnt, key, model) {
    Helper.loadImage(evnt, key, model);
  }
}
