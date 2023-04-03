import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-courier-commission',
  templateUrl: './courier-commission.component.html',
  styleUrls: ['./courier-commission.component.scss']
})
export class CourierCommissionComponent  implements OnInit {

  baseApiUrl: any = "report/awb-prices";
  title: any = "awb customer report";
  status: any = [];
  breadcrumbList: any = [];
  couriers: any = [];
  filter: any = {};
  collectedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();
  $: any = $;
  response: any = {};

  showSaveBtn = false;
  html: any;
  chartData: any = {};
  doc: any = document;

  totals: any = {salary: 0, net: 0, discount: 0, additional: 0, com: 0};

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
      data.push([element.name, element.net_salary]);
    });

    return data;
  }

  loadChartData() {
    this.totals = {salary: 0, net: 0, discount: 0, additional: 0, com: 0};
    this.service.get('report/courier-commissions', this.filter).subscribe((res:any) => {
      this.response = res;

      res.forEach(element => {
        this.totals.salary += element.salary;
        this.totals.discount += element.discount;
        this.totals.additional += element.additional;
        this.totals.com += element.commission;
        this.totals.net += element.net_salary;
      });

      this.initChart(this.toChartData(res));
    });
  }

  loadCouriers() {
    this.service.get('couriers', {paging: '0'}).subscribe((res:any) => {
      this.couriers = res;
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
    this.loadCouriers();
    this.initBreadCrumb();
  }


}
