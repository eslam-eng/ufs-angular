import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "roles";
  updateMode: any = false;
  permissionItem: any = {};
  doc: any = document;
  loadResources: any;
  companies: any = [];

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('role_add');
    this.canEdit = Auth.can('role_edit');
    this.canRemove = Auth.can('role_remove');
    //
    this.baseApiUrl = "roles";
    this.loadResources = () => {
      this.get();
    };
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  ngOnInit() {
    this.service.get('companies').subscribe((res) => {
      this.companies = res;
    });
    this.initBreadCrumb();
    this.get();
  }

  permission(item) {
    this.breadcrumbList = [
      {name: 'home', url: '/'},
      {name: 'roles', url: '/users/role'},
      {name: item.name}
    ];
    this.updateMode = true;
    this.permissionItem = item;
    this.doc.jquery('#permissionModal').modal('show');
  }
}
