import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Auth } from '../../../../shared/auth';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-courier-sheet-form',
  templateUrl: './courier-sheet-form.component.html',
  styleUrls: ['./courier-sheet-form.component.scss']
})
export class CourierSheetFormComponent extends Crud implements OnInit {

  baseApiUrl: any = "courier-sheets";
  title: any = "add courier sheet";

  couriers: any = [];
  companies: any = [];
  branches: any = [];
  departments: any = [];
  cities: any = [];
  areas: any = [];
  awbs: any = [];
  awbsHashTable: HashTable<any, any> = new HashTable();
  selectedAwb: HashTable<any, any> = new HashTable();

  distinationSheet: any;
  isTransferSubmit: any = false;

  //
  canTransfer: any = false;
  selectedResources: HashTable<any, any> = new HashTable();

  constructor(public service: GlobalService, private router: ActivatedRoute) {
    super(service);
    this.requiredFields = [
      "courier_id", "date"
    ];

    this.displayError = true;

    this.router.paramMap.subscribe((params) => {
      if (params.has('id'))
         this.load(params.get('id'));
      else
        this.initResource();
    });

    this.canTransfer = Auth.can('courer_sheet_transfer_awb');
  }

  setAwb() {
    this.loadAwbs((res: any) => {
      if(res.data.length > 0) {
        // add first item in the table
        let firstItem = this.awbsHashTable.getAll()[0];
        this.selectedAwb.put(firstItem.id, firstItem);

        if (this.resource.id)
          this.send(this.resource);
      } else {
        Message.error(Helper.trans('this awb code not exists'));
      }
      // reset input
      this.resource.code = "";
    });
  }

  transfer() {
    if (!this.distinationSheet) {
      return Message.error(Helper.trans('enter courier sheet'));
    }

    let data = {
      awb_id: this.selectedResources.getKeys(),
      sheet_id: this.distinationSheet
    };
    this.isTransferSubmit = true;
    this.service.store('courier-sheets/transfer', data).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
        this.load(this.resource.id);
      } else {
        Message.error(res.message);
      }
      this.isTransferSubmit = false;
    });
  }

  toggleAwb(awb) {
    if (this.selectedResources.has(awb.id)) {
      this.selectedResources.remove(awb.id);
    } else {
      this.selectedResources.put(awb.id, awb);
    }
  }

  validate(item) {
    let valid = super.validate(item);

    if (!valid) {
      return valid;
    }

    if (this.resource.details.length <= 0) {
      this.requiredMessage = Helper.trans('please add at least one awb');
      valid = false;
    }

    return valid;
  }

  getAction(res: any) {
    this.selectedAwb = new HashTable<any, any>();
    if (res.sheet_details) {
      res.sheet_details.forEach(element => {
        this.selectedAwb.put(element.awb_id, element.awb);
      });
    }
    this.initBreadCrumb();
    this.selectedResources = new HashTable<any, any>();
    this.distinationSheet = null;
  }

  reset(data) {
    this.initResource();
  }

  initResource() {
    this.resource = {
      date: new Date().toISOString().substring(0, 10),
      details: [],
    };
    this.selectedAwb = new HashTable<any, any>();
  }

  loadAwbs(action=null) {
    let filter = {
      company_id: this.resource.company_id,
      branch_id: this.resource.branch_id,
      department_id: this.resource.department_id,
      city_id: this.resource.city_id,
      area_id: this.resource.area_id,
      search: this.resource.search,
      code: this.resource.code,
      courier_sheet: 'active'
    };
    this.awbsHashTable = new HashTable();
    this.service.get('awbs', filter).subscribe((res: any)=>{
      if (res.data) {
        res.data.forEach(element => {
          this.awbsHashTable.put(element.id, element);
        });
      }
      if(action)
        action(res);
      //console.log(this.awbsHashTable);
    });
  }

  initBreadCrumb() {
    if (this.resource.id)
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'courier sheets', url: '/courier-sheet'},
      {name: this.resource.id, url: '#', active: true},
    ];
    else {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'courier sheets', url: '/courier-sheet'},
      {name: this.title, url: '#', active: true},
    ];
    }
  }

  send(item) {
    let data: any = item;
    data.date = this.resource.date;
    data.courier_id = this.resource.courier_id;
    data.details = this.selectedAwb.getKeys();

    super.send(data);
  }

  addAwb() {
    let awb = this.awbsHashTable.get(this.resource.awb_id);
    if (!awb)
      return Message.error(Helper.trans('please select awb'));

    this.selectedAwb.put(this.resource.awb_id, awb);
    //this.resource.details.push(awb);
    //
    this.resource.awb_id = null;

    if (this.resource.id)
      this.send(this.resource);
  }

  remove(row, index) {
    let self = this;
    Message.confirm(Helper.trans('are you sure'), () => {
      self.selectedAwb.remove(row.id);
      self.send(self.resource);
    });
  }

  loadSettings() {
    this.service.get('couriers').subscribe((res: any)=>{
      this.couriers = res;
    });

    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get('companies').subscribe((res: any)=>{
      this.companies = res;
    });

    if (Autoloader.branches())
      this.branches = Autoloader.branches();
    else
    this.service.get('branches').subscribe((res: any)=>{
      this.branches = res;
    });

    if (Autoloader.departments())
      this.departments = Autoloader.departments();
    else
    this.service.get('departments').subscribe((res: any)=>{
      this.departments = res;
    });

    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
    this.service.get('cities').subscribe((res: any)=>{
      this.cities = res;
    });

    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
    this.service.get('areas').subscribe((res: any)=>{
      this.areas = res;
    });
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadSettings();
  }

  get(reload) {

  }

}
