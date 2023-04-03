import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../../admin/helpers/autoloader';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "add user";
  companies: any = [];
  branches: any = [];
  departments: any = [];
  roles: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "users";

    if (this.isUpdate)
      this.title = "update user";

    this.requiredFields = [
      'name', 'password', 'username', 'address', 'phone', 'email', 'company_id', 'branch_id', 'department_id'
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'users', url: '/user'},
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
    this.service.get("roles").subscribe((res) =>{
      this.roles = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
  }


  updateAction(res) {
    this.$('#userModal').modal('hide');
  }
}
