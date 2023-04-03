import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Autoloader } from 'src/app/admin/helpers/autoloader';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-one-customer-city-awb',
  templateUrl: './one-customer-city-awb.component.html',
  styleUrls: ['./one-customer-city-awb.component.scss']
})
export class OneCustomerCityAwbComponent  implements OnInit {

  title: any = "one_customer_awb_city_report";
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

  toChartData(res) {
    let data = [];
    res.forEach(element => {
      data.push([element.name, element.awb_count]);
    });

    return data;
  }

  loadChartData() {
    this.service.get('report/one-company-awb-city', this.filter).subscribe((res:any) => {
      this.response = res;

      this.initChart(this.toChartData(res));
    });
  }

  getSelectedCompany() {
    let company: any = {};
    this.companies.forEach(element => {
        if (element.id == this.filter.company_id) {
          company = element;
        }
    });

    return company;
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
