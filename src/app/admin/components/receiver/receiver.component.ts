import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "receivers";
  cities: any = [];
  areas: any = [];
  companies: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  action: any;


  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('receiver_add');
    this.canEdit = Auth.can('receiver_edit');
    this.canRemove = Auth.can('receiver_remove');
    //
    this.baseApiUrl = "receivers";
    this.displayImport = true;
    this.paging = true;
    this.filter.page_length = 20;
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'name'},
      {name: 'address'},
      {name: 'address2'},
      {name: 'phone'},
      {name: 'company_name'},
      {name: 'branch_name'},
      {name: 'referance'},
      {name: 'title'},
      {name: 'city', object: true, data: 'name'},
      {name: 'area', object: true, data: 'name'},
      {name: 'branch', object: true, data: 'name'},
      {name: 'company', object: true, data: 'name'},
      {name: 'edit', permission: this.canEdit, action: (item, index) => { this.edit(item)}, class: 'fa fa-edit w3-text-orange'},
      {name: 'remove', permission: this.canRemove, action: (item, index) => { this.destroy(item, index)}, class: 'fa fa-trash w3-text-red'},
    ];
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }


  loadSettings() {
    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
      this.service.get("areas").subscribe((res) =>{
        this.areas = res;
      });

    if(Autoloader.cities())
      this.cities = Autoloader.cities();
    else
      this.service.get("cities").subscribe((res) =>{
        this.cities = res;
      });

    if(Autoloader.companies())
      this.companies = Autoloader.companies();
    else
      this.service.get("companies").subscribe((res) =>{
        this.companies = res;
      });
  }


  ngOnInit() {
    this.initFillable();
    this.loadSettings();
    this.initBreadCrumb();
    this.get(true);
  }

  create() {
    this.isUpdate = false;
    this.resource = {active: 1};
    this.$('#receiverModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.$('#receiverModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }


}
