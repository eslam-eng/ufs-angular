import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../helpers/autoloader';
import { HashTable } from 'angular-hashtable';

@Component({
  selector: 'app-awb',
  templateUrl: './awb.component.html',
  styleUrls: ['./awb.component.scss']
})
export class AwbComponent extends Crud implements OnInit {

  baseApiUrl = "awbs";
  title = "awbs"
  self: any = this;

  companies: any = [];
  branches: any = [];
  departments: any = [];
  paymentTypes: any = [];
  cities: any = [];
  areas: any = [];
  services: any = [];
  awbs: any = [];
  receivers: any = [];

  selectedResource: any = {};
  canTrack: any = true;
  canChangeAwbStatus: any = false;

  selectedAwbs: HashTable<any, any>;

  constructor(public service: GlobalService, private router: Router, private params: ActivatedRoute) {
    super(service);

    // paging data from server
    this.paging = true;
    this.displayImport = true;

    this.filter.page_length = 60;

    // init permissions
    this.canAdd = Auth.can('awb_add');
    this.canEdit = Auth.can('awb_edit');
    this.canRemove = Auth.can('awb_remove');
    this.canTrack = Auth.can('awb_track');
    this.displayLoadTrash = Auth.can('awb_view_trash');
    this.canChangeAwbStatus = Auth.can('awb_change_status');

    // check on query Params
    this.checkOnQueryParams();

  }

  printSelected() {
    this.selectedAwbs = this.selectedResources;
    if (this.selectedResources.size() > 0) {
      this.selectedAwbs = this.selectedResources;
      this.$('#printModal').modal('show');
    }
  }

  checkOnQueryParams() {
    this.params.queryParamMap.subscribe((params) =>{
      if(params.has('steper'))  {
        this.filter.steper = params.get('steper');
      }

      // load data
      this.get(true);
    });
  }

  changeStatus() {
    this.$('#changeStatusModal').modal('show');
  }

  initFillable() {
    this.fillable = [
      {name: 'code'},
      {name: 'date'},
      {name: 'company', object: true, data: 'name'},
      {name: 'department', object: true, data: 'name'},
      {name: 'branch', object: true, data: 'name'},
      {name: 'receiver', object: true, data: 'name'},
      {name: 'payment_type', object: true, data: 'name'},
      {name: 'service', object: true, data: 'name'},
      {name: 'status', object: true, data: 'name'},
      {name: 'city', object: true, data: 'name'},
      {name: 'area', object: true, data: 'name'},
      {name: 'pieces'},
      {name: 'receiver_city'},
      {name: 'receiver_area'},
      {name: 'weight'},
      {name: 'collection'},
      {name: 'is_return', type: 'checkbox'},
      {name: 'referance'},
      {name: 'branch_name'},
      {name: 'receiver_name'},
      {name: 'receiver_title'},
      {name: 'sheet_id'},
      {name: 'notes'},
      {name: 'user', object: true, data: 'name'}
    ];

    if (Auth.isAdmin()) {
      this.fillable.push({name: 'zprice'});
      this.fillable.push({name: 'shiping_price'});
      this.fillable.push({name: 'additional_kg_price'});
      this.fillable.push({name: 'additional_price'});
      this.fillable.push({name: 'net_price'});
    }

    this.fillable.push({name: this.loadingTrash? 'restore' : 'edit',
      permission: this.loadingTrash? this.displayLoadTrash : this.canEdit,
      action: (item, i) => { (this.loadingTrash)? this.restore(item) : this.edit(item); }, class: this.loadingTrash? "fa fa-reply w3-text-green" : "fa fa-edit w3-text-orange"});

    this.fillable.push({name: 'tracking', permission: this.canTrack, action: (item, i) => {this.track(item)}, class: "fa fa-truck w3-text-indigo rotate-180"});
    this.fillable.push({name: 'remove', permission: this.canRemove, action: (item, i) => {this.destroy(item, i)}, class: "fa fa-trash w3-text-red"});
  }

  loadTrash() {
    super.loadTrash();
    this.service.get("awbs-trash").subscribe((res) => {
      this.data = res;
      this.initFillable();
      this.response = {};
    });
  }

  restore(item) {
    var self = this;
    Message.confirm(Helper.trans('are you sure'), () => {
      self.service.store("awbs-restore/"+item.id, null).subscribe((res: any) => {
        if (res.status == 0) {
          Message.error(res.message);
        }else {
          Message.success(res.message);
        }
        self.get();
      });
    });
  }

  loadSettings() {
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


    if (Autoloader.paymentTypes())
      this.paymentTypes = Autoloader.paymentTypes();
    else
      this.service.get('payment-types').subscribe((res: any)=>{
        this.paymentTypes = res;
      });

    if (Autoloader.departments())
      this.departments = Autoloader.departments();
    else
      this.service.get('departments').subscribe((res: any)=>{
        this.departments = res;
      });

    if (Autoloader.services())
      this.services = Autoloader.services();
    else
      this.service.get('services').subscribe((res: any)=>{
        this.services = res;
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

    //
    this.service.get('receivers').subscribe((res: any)=>{
      this.receivers = res;
    });
  }

  ngOnInit() {
    this.initFillable();
    this.initBreadCrumb();
    this.loadSettings();
  }

  create() {
    Helper.refreshComponent(this.router, "/awb-create/");
  }

  edit(item) {
    Helper.refreshComponent(this.router, "/awb-edit/"+item.id);
  }

  track(item) {
    this.selectedResource = item;
    this.$('#trackingModal').modal('show');
  }


  getAction() {
    this.initFillable();
  }

}
