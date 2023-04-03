import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  cities: any = [];
  countries: any = [];
  title: any = "areas";


  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('area_add');
    this.canEdit = Auth.can('area_edit');
    this.canRemove = Auth.can('area_remove');
    //
    this.baseApiUrl = "areas";
    this.displayCreate = true;
    this.displayImport = true;
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  loadSettings() {
    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
    this.service.get("cities").subscribe((res) =>{
      this.cities = res;

      Autoloader.setCities(res);
    });

    if (Autoloader.countries())
      this.countries = Autoloader.countries();
    else
      this.service.get("countries").subscribe((res) =>{
        this.countries = res;
        Autoloader.setCountries(res);
      });
  }

  customSearch(item) {
    var condition =
    this.search(item) &&
    (item.city_id == this.filter.city_id || !this.filter.city_id) &&
    (item.country_id == this.filter.country_id || !this.filter.country_id);

    return condition;
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadSettings();

    if (Autoloader.areas())
      this.data = Autoloader.areas();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setAreas(res);
  }

}
