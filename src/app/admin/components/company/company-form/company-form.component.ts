import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "add company";
  cities: any = [];
  areas: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "companies";

    if (this.isUpdate)
      this.title = "update company";

    this.requiredFields = [
      'name', 'address', 'phone', 'city_id', 'area_id'
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'companies', url: '/company'},
      {name: this.title, url: '#', active: true},
    ];
  }


  loadSettings() {
    this.service.get("areas").subscribe((res) =>{
      this.areas = res;
    });
    this.service.get("cities").subscribe((res) =>{
      this.cities = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
  }

}
