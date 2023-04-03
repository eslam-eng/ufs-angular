import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-courier-commision',
  templateUrl: './courier-commision.component.html',
  styleUrls: ['./courier-commision.component.scss']
})
export class CourierCommisionComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  services: any = [];
  couriers: any = [];
  countries: any = [];
  title: any = "courier commisions";


  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('courier_commission_add');
    this.canEdit = Auth.can('courier_commission_edit');
    this.canRemove = Auth.can('courier_commission_remove');
    //
    this.baseApiUrl = "courier-commissions";
    this.displayCreate = true;
    this.displayImport = true;
    this.displayError = true;

  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  loadSettings() {
    this.service.get("couriers").subscribe((res) =>{
      this.couriers = res;
    });
    this.service.get("services").subscribe((res) =>{
      this.services = res;
    });
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadSettings();
    this.get(true);
  }

}
