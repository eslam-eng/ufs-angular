import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "status";
  steper: any = ['in_company', 'processing', 'hold', 'delivered'];
  types: any = ['awb', 'pickup'];
  moreOptionShow = false;

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('status_add');
    this.canEdit = Auth.can('status_edit');
    this.canRemove = Auth.can('status_remove');
    //
    this.baseApiUrl = "status";
    this.displayCreate = true;
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  ngOnInit() {
    let self = this;
    this.initBreadCrumb();
    if (Autoloader.status())
      this.data = Autoloader.status();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setStatus(res);
  }


  toggleOption() {
    this.$('.more-option').toggle();
    //
    this.moreOptionShow = !this.moreOptionShow;
  }

}
