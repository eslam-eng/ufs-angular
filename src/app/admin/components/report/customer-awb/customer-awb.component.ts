import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-customer-awb',
  templateUrl: './customer-awb.component.html',
  styleUrls: ['./customer-awb.component.scss']
})
export class CustomerAwbComponent  implements OnInit {

  baseApiUrl: any = "report/awb-prices";
  title: any = "awb customer report";
  status: any = [];
  breadcrumbList: any = [];
  companies: any = [];
  filter: any = {};
  collectedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();
  $: any = $;
  response: any = {};

  showSaveBtn = false;
  html: any;
  chartData: any = {};
  doc: any = document;

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    this.initChart([]);
    this.loadChartData();
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
    });
  }

  toChartData(res) {
    let data = [];
    res.forEach(element => {
      data.push([element.name, element.awb_count]);
    });

    return data;
  }

  loadChartData() {
    this.service.get('report/companies-awb', this.filter).subscribe((res:any) => {
      this.response = res;

      this.initChart(this.toChartData(res));
    });
  }

  loadCompanies() {
    this.service.get('companies', {paging: '0'}).subscribe((res:any) => {
      this.companies = res;
    });
  }


  initChart(data) {
    this.chartData = {
      columnNames: ['company', 'awb count'],
      type: 'PieChart',
      data: data,
      options: {
        width: 600,
        height: 400,
        legend: { position: "top" },
      }
    };
  }

  ngOnInit() {
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
      this.loadCompanies();

    this.initBreadCrumb();
  }


  print() {
    Helper.print();
  }

  excel() {
    this.doc.exportExcel();
  }

}
