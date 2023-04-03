import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "services";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('service_add');
    this.canEdit = Auth.can('service_edit');
    this.canRemove = Auth.can('service_remove');
    //
    this.baseApiUrl = "services";
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
    if (Autoloader.services())
      this.data = Autoloader.services();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setServices(res);
  }

}
