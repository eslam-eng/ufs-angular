import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "stores";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('store_add');
    this.canEdit = Auth.can('store_edit');
    this.canRemove = Auth.can('store_remove');
    //
    this.baseApiUrl = "stores";
    this.displayCreate = true;
    this.displayError = true;
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
