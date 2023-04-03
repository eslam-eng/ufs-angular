import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "departments";
  companies: any = [];

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('department_add');
    this.canEdit = Auth.can('department_edit');
    this.canRemove = Auth.can('department_remove');
    //
    this.baseApiUrl = "departments";
    this.displayCreate = true;
  }

  loadCompanies() {
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get("companies").subscribe((res) =>{
      this.companies = res;
    });
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadCompanies();
    if (Autoloader.departments())
      this.data = Autoloader.departments();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setDepartments(res);
  }

}
