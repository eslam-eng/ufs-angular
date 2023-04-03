import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class InvoiceHeaderComponent  implements OnInit {

  baseApiUrl: any = "report/invoice-cover";
  title: any = "invoice cover";
  status: any = [];
  breadcrumbList: any = [];
  companies: any = [];
  services: any = [];
  filter: any = {};
  collectedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();
  $: any = $;

  showSaveBtn = false;
  html: any;

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    this.filter = {
      postal_fees: 0.10,
      vet_fax: 0.14
    };
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  get() {
    this.service.loadHtml(this.baseApiUrl, this.filter).subscribe((res)=> {
      this.html = res;
      //
      setTimeout(()=> {
        this.$('.invoice-no').attr('contenteditable', 'true');
      }, 500);
    });
  }

  statusCallback(res) {
    this.status = res;
    res.forEach(element => {
      if (element.code == '7')
        this.collectedStatus = element;
    });
    this.filter.status_id = this.collectedStatus.id;
  }

  loadStatus() {
    if (Autoloader.status())
      this.statusCallback(Autoloader.status());
    else
    this.service.get('status').subscribe((res:any) => {
      this.statusCallback(res);
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

  ngOnInit() {
    if (Autoloader.services())
      this.services = Autoloader.services();
    else
    this.service.get('services').subscribe((res:any) => {
      this.services = res;
    });

    this.loadCompanies();
    this.loadStatus();
    this.initBreadCrumb();
  }


  print() {
    let url = environment.apiUrl + "/" + this.baseApiUrl + "?api_token=" + Auth.getApiToken() + "&" + this.$.param(this.filter);
    Helper.openWindow(url);
  }

}
