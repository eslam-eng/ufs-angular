import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-permission-group',
  templateUrl: './permission-group.component.html',
  styleUrls: ['./permission-group.component.scss']
})
export class PermissionGroupComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "permission groups";

  // permission password
  password: any = "yuri200525";
  enterPassword: any = "";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('permission_group_add');
    this.canEdit = Auth.can('permission_group_edit');
    this.canRemove = Auth.can('permission_group_remove');
    //
    this.baseApiUrl = "permission-groups";
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

  ngOnInit() {
    this.initBreadCrumb();
    this.get();
  }

}
