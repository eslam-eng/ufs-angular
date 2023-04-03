import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
})
export class CourierComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "couriers";
  companies: any = [];
  branches: any = [];
  departments: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  action: any;

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('courier_add');
    this.canEdit = Auth.can('courier_edit');
    this.canRemove = Auth.can('courier_remove');
    //
    this.baseApiUrl = "couriers";
    this.displayImport = true;
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'photo_url', type: 'image'},
      {name: 'name'},
      {name: 'address'},
      {name: 'phone'},
      {name: 'email'},
      {name: 'company', object: true, data: 'name'},
      {name: 'branch', object: true, data: 'name'},
      {name: 'department', object: true, data: 'name'},
      {name: 'active', type: 'checkbox'},
      {name: 'notes'},
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
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get("companies").subscribe((res) =>{
      this.companies = res;
    });

    if (Autoloader.branches())
      this.branches = Autoloader.branches();
    else
    this.service.get("branches").subscribe((res) =>{
      this.branches = res;
    });

    if (Autoloader.departments())
      this.departments = Autoloader.departments();
    else
    this.service.get("departments").subscribe((res) =>{
      this.departments = res;
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
    this.resource = {active: 1, photo_url: "/assets/img/avatar.png"};
    this.$('#courierModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.$('#courierModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }


}
