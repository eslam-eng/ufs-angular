import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "users";
  companies: any = [];
  branches: any = [];
  departments: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  action: any;

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('user_add');
    this.canEdit = Auth.can('user_edit');
    this.canRemove = Auth.can('user_remove');
    //
    this.baseApiUrl = "users";
    this.requiredFields = [
      'name', 'username', 'address', 'phone', 'email', 'company_id', 'branch_id', 'department_id'
    ];

    this.initFillable();
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'photo_url', type: 'image'},
      {name: 'name'},
      {name: 'username'},
      {name: 'email'},
      {name: 'address'},
      {name: 'department', object: true, data: 'name'},
      {name: 'branch', object: true, data: 'name'},
      {name: 'company', object: true, data: 'name'},
      {name: 'role', object: true, data: 'name'},
      {name: 'active', type: 'checkbox'},
      {name: 'edit', permission: this.canEdit, action: (item, index) => { this.edit(item)}, class: 'fa fa-edit w3-text-orange'},
      {name: 'remove', permission: this.canRemove, action: (item, index) => { this.destroy(item, index)}, class: 'fa fa-trash w3-text-red'},
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
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
    this.filter = {};
  }

  create() {
    this.isUpdate = false;
    this.resource = {active: 1};
    this.$('#userModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.$('#userModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }

}
