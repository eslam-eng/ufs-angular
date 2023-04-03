import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Autoloader } from 'src/app/admin/helpers/autoloader';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-courier-awb-status',
  templateUrl: './courier-awb-status.component.html',
  styleUrls: ['./courier-awb-status.component.scss']
})
export class CourierAwbStatusComponent  implements OnInit {

  baseApiUrl: any = "report/one-courier-awb-status";
  title: any = "one_courier_awb_status_report";
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
  total: any = 0;

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
    this.total = 0;
    this.service.get(this.baseApiUrl, this.filter).subscribe((res:any) => {
      this.response = res;
      res.forEach(element => {
        this.total += element.awb_count;
      });
      this.initChart(this.toChartData(res));
    });
  }

  getSelectedCourier() {
    let courier: any = {};
    this.couriers.forEach(element => {
        if (element.id == this.filter.courier_id) {
          courier = element;
        }
    });

    return courier;
  }

  loadCouriers() {
    this.service.get('couriers', {paging: '0'}).subscribe((res:any) => {
      this.couriers = res;
    });
  }


  initChart(data) {
    this.chartData = {
      columnNames: ['status', 'awb count'],
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


  print() {
    Helper.print();
  }

  excel() {
    this.doc.exportExcel();
  }

}
