import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "companies";
  cities: any = [];
  areas: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  action: any;
  self: any = this;

  constructor(public service: GlobalService) {
    super(service);


    this.canAdd = Auth.can('company_add');
    this.canEdit = Auth.can('company_edit');
    this.canRemove = Auth.can('company_remove') && Auth.isAdmin();
    //
    this.baseApiUrl = "companies";
    this.initFillable();
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'logo_url', type: 'image'},
      {name: 'name'},
      {name: 'ceo'},
      {name: 'address'},
      {name: 'phone'},
      {name: 'email'},
      {name: 'commercial_photo_url', type: 'image'},
      {name: 'view', permission: this.canEdit, action: (item, index) => { this.edit(item)}, class: 'fa fa-desktop w3-text-green'},
      {name: 'edit', permission: this.canEdit, action: (item, index) => { this.edit(item)}, class: 'fa fa-edit w3-text-orange'},
      {name: 'remove', permission: this.canRemove, action: (item, index) => { this.destroy(item, index)}, class: 'fa fa-trash w3-text-red'},
    ];
  }

  loadSettings() {

    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
      this.service.get("areas").subscribe((res) =>{
        this.areas = res;
      });

    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
      this.service.get("cities").subscribe((res) =>{
        this.cities = res;
      });
  }


  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();

    if (Autoloader.companies())
      this.data = Autoloader.companies();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setCompanies(res);
  }

  create() {
    this.isUpdate = false;
    this.resource = {active: 1};
    this.$('#companyModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.resource.logo = null;
    this.$('#companyModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }


}
