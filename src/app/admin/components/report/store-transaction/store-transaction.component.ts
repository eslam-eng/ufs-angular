import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store-transaction',
  templateUrl: './store-transaction.component.html',
  styleUrls: ['./store-transaction.component.scss']
})
export class StoreTransactionComponent  implements OnInit {

  baseApiUrl: any = "report/store-transactions";
  title: any = "store transactions";
  status: any = [];
  breadcrumbList: any = [];
  stores: any = [];
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
    if (!this.filter.store_id)
      return;
    this.service.loadHtml(this.baseApiUrl, this.filter).subscribe((res)=> {
      this.html = res;
    });
  }

  loadCompanies() {
    this.service.get('stores', {paging: '0'}).subscribe((res:any) => {
      this.stores = res;
    });
  }

  ngOnInit() {
    this.loadCompanies();
    this.initBreadCrumb();
  }


  print() {
    let url = environment.apiUrl + "/" + this.baseApiUrl + "?api_token=" + Auth.getApiToken() + "&" + this.$.param(this.filter);
    Helper.openWindow(url);
  }

}
