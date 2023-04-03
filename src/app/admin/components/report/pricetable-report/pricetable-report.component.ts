import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-pricetable-report',
  templateUrl: './pricetable-report.component.html',
  styleUrls: ['./pricetable-report.component.scss']
})
export class PricetableReportComponent implements OnInit {

  baseApiUrl: any = "report/price-table";
  title: any = "price table report";
  status: any = [];
  breadcrumbList: any = [];
  companies: any = [];
  cities: any = [];
  filter: any = {};
  collectedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();
  $: any = $;

  showSaveBtn = false;
  html: any;

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {

  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  get() {
    if (!this.filter.company_id)
      return;
    this.service.loadHtml(this.baseApiUrl, this.filter).subscribe((res)=> {
      this.html = res;
    });
  }

  loadCompanies() {
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get('companies', {paging: '0'}).subscribe((res:any) => {
      this.companies = res;
    });
  }

  loadCities() {
    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
    this.service.get('cities', {paging: '0'}).subscribe((res:any) => {
      this.cities = res;
    });
  }

  ngOnInit() {
    this.loadCompanies();
    this.loadCities();
    this.initBreadCrumb();
  }


  print() {
    let url = environment.apiUrl + "/" + this.baseApiUrl + "?api_token=" + Auth.getApiToken() + "&" + this.$.param(this.filter);
    Helper.openWindow(url);
  }

}
