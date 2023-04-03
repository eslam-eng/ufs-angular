import { Component, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  countries: any = [];
  cities: any = [];
  areas: any = [];
  companies: any = [];
  title: any = "price tables";
  self: any = this;

  selectedCols: HashTable<any, any> = new HashTable();

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('price_table_add');
    this.canEdit = Auth.can('price_table_edit');
    this.canRemove = Auth.can('price_table_remove');
    //
    this.baseApiUrl = "price-tables";
    this.displayCreate = true;
    this.filter.model_id = 1;

  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  initFillable() {
    this.fillable = [
      {'name': 'id'},
      {'name': 'date_to'},
      {'name': 'city_from'},
      {'name': 'area_from'},
      {'name': 'city_to'},
      {'name': 'area_to'},
      {'name': 'price'},
      {'name': 'return_price'},
      {'name': 'basic_kg'},
      {'name': 'additional_kg_price'},
      {'name': 'remove'}
    ];
  }

  loadCountries() {
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get("companies", {paging: '0'}).subscribe((res) =>{
      this.companies = res;
    });

    if (Autoloader.countries())
      this.countries = Autoloader.countries();
    else
    this.service.get("countries").subscribe((res) =>{
      this.countries = res;
    });

    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
    this.service.get("cities").subscribe((res) =>{
      this.cities = res;
    });

    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
    this.service.get("areas").subscribe((res) =>{
      this.areas = res;
    });
  }

  offers() {
    this.filter.show_offer = 1;
    this.get(true);
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadCountries();
    this.get(true);
    this.initFillable();
  }

  send(item) {
    item.model_id = this.filter.model_id;
    super.send(item);
  }

  create({}) {
    let item = {
      area_from: null,
      area_to: null,
      basic_kg: 1
    };

    super.create(item);
  }
}
