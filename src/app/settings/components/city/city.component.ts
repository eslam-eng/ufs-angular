import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  countries: any = [];
  title: any = "cities";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('city_add');
    this.canEdit = Auth.can('city_edit');
    this.canRemove = Auth.can('city_remove');
    //
    this.baseApiUrl = "cities";
    this.displayCreate = true;
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  loadCountries() {
    if (Autoloader.countries())
      this.countries = Autoloader.countries();
    else
    this.service.get("countries").subscribe((res) =>{
      this.countries = res;
      // set countries after loading
      Autoloader.setCountries(res);
    });
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadCountries();

    if (Autoloader.cities())
      this.data = Autoloader.cities();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setCities(res);
  }

}
