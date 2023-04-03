import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  permissionGroups: any = [];
  title: any = "permissions";

  // permission password
  password: any = "yuri200525";
  enterPassword: any = "";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('permission_add');
    this.canEdit = Auth.can('permission_edit');
    this.canRemove = Auth.can('permission_remove');
    //
    this.baseApiUrl = "permissions";
    this.displayCreate = true;

    if (window.location.host.indexOf('localhost') >= 0) {
      this.enterPassword = this.password;
    }
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  loadGroups() {
    this.service.get("permission-groups").subscribe((res) =>{
      this.permissionGroups = res;
    });
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadGroups();
    this.get();
  }

}
