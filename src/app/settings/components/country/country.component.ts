import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "countries";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('country_add');
    this.canEdit = Auth.can('country_edit');
    this.canRemove = Auth.can('country_remove');
    //
    this.baseApiUrl = "countries";
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
    if (Autoloader.countries())
      this.data = Autoloader.countries();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setCountries(res);
  }

}
