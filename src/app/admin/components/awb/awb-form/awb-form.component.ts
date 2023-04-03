import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { Request } from 'src/app/shared/request';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-awb-form',
  templateUrl: './awb-form.component.html',
  styleUrls: ['./awb-form.component.scss']
})
export class AwbFormComponent extends Crud implements OnInit {

  baseApiUrl: any = "awbs";
  title: any = "add awb";

  couriers: any = [];
  companies: any = [];
  branches: any = [];
  departments: any = [];
  paymentTypes: any = [];
  cities: any = [];
  areas: any = [];
  services: any = [];
  categories: any = [];
  awbs: any = [];
  receivers: any = [];
  types: any = ['document', 'parcel'];
  selectedCompany: any = {area: {}, city: {}};
  selectedReceiver: any = {area: {}, city: {}};
  selectedBranch: any = {area: {}, city: {}};
  changeEnumType = {
    COMPANY: 'COMPANY',
    RECEIVER: 'RECEIVER',
  };
  receiversData: any = [];
  user: any = Auth;
  receiver: any = {};

  // hashtable
  awbsHashTable: HashTable<any, any> = new HashTable();
  companyTable: HashTable<any, any> = new HashTable();
  receiverTable: HashTable<any, any> = new HashTable();
  selectedAwb: HashTable<any, any> = new HashTable();
  categoryHashTable: HashTable<any, any> = new HashTable();
  branchHashTable: HashTable<any, any> = new HashTable();


  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    super(service);
    this.displayError = true;
    this.displayLoading = true;
    this.canEdit = Auth.can('awb_edit');

    this.initResource();

    console.log(Auth.user());
  }

  createReceiver() {
    this.$('#receiverModal').modal('show');
  }

  loadOneAwb() {
    this.router.paramMap.subscribe((params) => {
      if (params.has('id'))
         this.load(params.get('id'));
    });
  }

  getSelectedBranch() {
    return this.branchHashTable.has(this.resource.branch_id)? this.branchHashTable.get(this.resource.branch_id) : {};
  }

  loadBranchInfo() {
    this.selectedBranch = this.getSelectedBranch();

   // if (Auth.isAdmin()) {
    this.resource.city_id = this.selectedBranch.city_id;
    this.resource.area_id = this.selectedBranch.area_id;
   /* } else {
      this.setCityArea();
    }*/
  }

  get() {
    //
  }

  reset(data) {
    this.initResource();
    this.selectedReceiver = {area: {}, city: {}};
    //
    console.log('after reset');
  }

  getAction(res: any) {
    this.reloadReceivers(this.resource.receiver? this.resource.receiver.name : null);
    //this.selectItem(res.receiver, 'receiver_id');
    this.changeListner(this.changeEnumType.COMPANY);
    this.changeListner(this.changeEnumType.RECEIVER);
    // change breadcrumb
    this.initBreadCrumb();
    Helper.loader(false);
  }

  initResource() {
    this.resource = {
      company_id: Auth.user().company_id,
      branch_id: Auth.user().branch_id,
      department_id: Auth.user().department_id,
      category_id: 1,
      payment_type_id: 1,
      service_id: 1,
      pieces: 1,
      weight: 1,
      company: {
        city: {},
        area: {},
      },
      details: [],
      department: {}
    };
    this.loadBranchInfo();
    //var self = this;
    setTimeout(() => {
      $('.autocomplete-container .x').click();
    }, 500);
  }

  setCityArea() {
    console.log(Auth.user().branch);
    this.resource.city_id = Auth.user().branch? Auth.user().branch.city_id : null;
    this.resource.area_id = Auth.user().branch? Auth.user().branch.area_id : null;
  }

  calcAwbWeight() {
    AwbWeightCalculator.calc(this.resource);
  }

  changeListner(type) {
    // set company object
    if (type == this.changeEnumType.COMPANY) {
      this.selectedCompany = this.companyTable.get(this.resource.company_id);
      this.reloadReceivers(this.resource.receiver? this.resource.receiver.name : null);
      this.loadBranchInfo();
    }

    // set receiver object
    if (type == this.changeEnumType.RECEIVER) {
      //if (!this.resource.id)
      if (this.receiverTable.has(this.resource.receiver_id))
        this.selectedReceiver = this.receiverTable.get(this.resource.receiver_id);
      else {
        if (this.resource.receiver) {
          this.selectedReceiver = this.resource.receiver;
        } else {
          this.selectedReceiver = {area: {}, city: {}};
        }
      }
      //else
      //  this.selectedReceiver = this.resource.receiver;
      //
    }
  }

  getSelectedCategory() {
    return this.categoryHashTable.has(this.resource.category_id)?
            this.categoryHashTable.get(this.resource.category_id) : {};
  }

  generateDimensions() {
    let selectedCategory = this.getSelectedCategory();
    if (selectedCategory.has_many == 1) {
      this.resource.details = [];
      for(let index = 0; index < this.resource.pieces; index ++) {
        this.resource.details.push({});
      }
    } else {
      this.resource.details = [];
    }

    if (selectedCategory.fixed) {
      this.resource.weight = Math.ceil(this.resource.pieces * selectedCategory.fixed);
    }
  }

  convertCompanyToHashTable() {
    this.companyTable = new HashTable<any, any>();
    this.companies.forEach(element => {
      this.companyTable.put(element.id, element);
    });
    //
  }

  convertReceiverToHashTable() {
    this.receiverTable = new HashTable<any, any>();
    this.receivers.forEach(element => {
      this.receiverTable.put(element.id, element);
    });
  }

  reloadReceivers(search=null) {
    let data: any = {
      company_id: this.resource.company_id
    };
    if (search)
      data.search = search;

    this.service.get('receivers', data).subscribe((res: any) => {
      this.receivers = res.data;
      // filter receivers
      this.receiversData = res.data.filter(element => {
        return {id: element.id, name: element.name};
      });

      // receivers arr to hashtable
      this.convertReceiverToHashTable();
    });
  }

  // select item
  selectItem(item, key) {
    this.resource[key] = item.id;
    this.changeListner(this.changeEnumType.RECEIVER);
  }

  clearSelected(key) {
    this.resource[key] = null;
  }

  //*********** callback functions  */
  companyCallback(responese) {
    this.companies = responese;
    // companies arr to hashtable
    this.convertCompanyToHashTable();
    // load current company data
    this.changeListner(this.changeEnumType.COMPANY);

    this.loadOneAwb();
  }

  branchCallback(response) {
    this.branches = response;

    this.branchHashTable = new HashTable<any, any>();
    this.branches.forEach(element => {
      this.branchHashTable.put(element.id, element);
    });
    this.loadBranchInfo();
  }

  paymentCallback(res) {
    this.paymentTypes = res;
    if (!this.resource.id && res.length > 0)
    this.resource.payment_type_id = res[0].id;
  }

  categoryCallback(res) {
    this.categories = res;
    this.categoryHashTable = new HashTable<any, any>();
    this.categories.forEach(element => {
      this.categoryHashTable.put(element.id, element);
    });
  }

  serviceCallback(res) {
    this.services = res;
    if (!this.resource.id && res.length > 0)
      this.resource.service_id = res[0].id;
  }

  //******************end of callback functions  */

  loadSettings() {
    var self = this;
    self.reloadReceivers();

    if (Autoloader.companies()) {
      self.companyCallback(Autoloader.companies());
    } else {
      Request.addToQueue({observer: this.service.get('companies'), action(res) {
        self.companyCallback(res);
      }});
    }

    if (Autoloader.branches()) {
      self.branchCallback(Autoloader.branches());
    } else {
      Request.addToQueue({observer: this.service.get('branches'), action(res) {
        self.branchCallback(res);
      }});
    }

    if (Autoloader.paymentTypes()) {
      self.paymentCallback(Autoloader.paymentTypes());
    } else {
      Request.addToQueue({observer: this.service.get('payment-types'), action(res) {
        self.paymentCallback(res);
      }});
    }

    if (Autoloader.departments()) {
      this.departments = Autoloader.departments();
    } else {
      Request.addToQueue({observer: this.service.get('departments'), action(res) {
        self.departments = res;
      }});
    }

    if (Autoloader.categories()) {
      self.categoryCallback(Autoloader.categories());
    } else {
      Request.addToQueue({observer: this.service.get('awb-categories'), action(res) {
        self.categoryCallback(res);
      }});
    }

    if (Autoloader.services()) {
      self.serviceCallback(Autoloader.services());
    } else {
      Request.addToQueue({observer: this.service.get('services'), action(res) {
        self.serviceCallback(res);
      }});
    }

    if (Autoloader.cities()) {
      this.cities = Autoloader.cities();
    } else {
      Request.addToQueue({observer: this.service.get('cities'), action(res) {
        self.cities = res;
      }});
    }

    if (Autoloader.areas()) {
      this.areas = Autoloader.areas();
    } else {
      Request.addToQueue({observer: this.service.get('areas'), action(res) {
        self.areas = res;
      }});
    }

    Request.fire(null, true);
  }

  initBreadCrumb() {
    if (this.resource.id)
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'awbs', url: '/awb'},
      {name: this.resource.code, url: '#', active: true},
    ];
    else {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'awbs', url: '/awb'},
      {name: this.title, url: '#', active: true},
    ];
    }
  }

  ngOnInit() {
    this.requiredFields = [
      "company_id",
      "department_id",
      "branch_id",
      "receiver_id",
      "payment_type_id",
      "service_id",
      "city_id",
      "area_id",
      "pieces",
      "weight",
      "category_id"
    ];

    this.initBreadCrumb();
    this.loadSettings();
  }

  updateAction(res) {
    Helper.refreshComponent(this.route, "/awb");
    Helper.loader(false);
  }

  printAwb(id) {
    let url = environment.apiUrl + "/awbs/print/" + id + "?api_token=" + Auth.getApiToken();
    Helper.openWindow(url);
  }

  storeAction(res: any) {
    if (res.data.id) {
      this.printAwb(res.data.id);
    }
    Helper.loader(false);
  }


}

/**
 * awb weight calculator
 *
 *
 */
class AwbWeightCalculator {

  public static AWB_CONST = 5000;
  public static AWB_ROUND_CONST = 3;


  private static validate(element) {
    return (element.height && element.width && element.length);
  }
  public static calc(resource: any) {
    // init sum
    resource.weight = 0;

    // calculate total for each row
    resource.details.forEach(element => {
      // check first
      if (AwbWeightCalculator.validate(element)) {
        // total = (height * width * length) / 5000
        element.total = (element.height * element.width * element.length) / AwbWeightCalculator.AWB_CONST;
        resource.weight += element.total;
      }

    });
    resource.weight = Math.ceil(parseFloat(resource.weight));//.toFixed(AwbWeightCalculator.AWB_ROUND_CONST);
  }
}
