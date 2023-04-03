import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resource: any = {};
  Chart: any;
  doc: any = document;
  loading: any = false;

  awbStatusChart: any = {};
  awbCollectionChart: any = {};
  counts: any = {};
  stepers = ['in_company','processing','hold','delivered'];
  helper: any = Helper;
  colors: any = {};
  canShow: any = false;
  user: any = Auth.user();

  constructor(private service: GlobalService) {
    this.initAwbCollectionChart([]);
    this.initAwbStatusChart([]);

    this.stepers.forEach(element => {
      this.colors[element] = Helper.randColor();
    });
    console.log("colors ", this.colors);
  }

  ngOnInit() {
    //
    if (this.user.company) {
      if (this.user.company.show_dashboard == 1)
        this.canShow = true;
    }
    this.loadDashboard();
  }

  objectToArray(object) {
    let array = [];
    object.forEach(element => {
      let row = [];
      Object.keys(element).forEach(key => {
        row.push(element[key]);
      });

      array.push(row);
    });

    return array;
  }

  initAwbStatusChart(data) {
    this.awbStatusChart = {
      columnNames: ['status', 'count'],
      type: 'PieChart',
      data: data,
      options: {
        width: 600,
        height: 350,
        legend: { position: "top" },
      }
    };
  }

  initAwbCollectionChart(data) {
    this.awbCollectionChart = {
      columnNames: ['awb code', 'collection'],
      type: 'ColumnChart',
      data: data,
      options: {
        width: 600,
        height: 350,
        legend: { position: "top" },
      }
    };
  }

  getCollectionData(res) {
    let data = [];
    res.forEach(element => {
      data.push([element.code, element.collection]);
    });

    return data;
  }

  loadDashboard() {
    // start loading
    this.loading = true;
    this.service.get("dashboard").subscribe((res: any) => {
      this.resource = res;
      this.counts = res.counts;
      // load all charts
      this.initAwbStatusChart(this.objectToArray(res.awb_status_chart));
      this.initAwbCollectionChart(this.getCollectionData(res.awb_collection_chart));

      // hidden loading
      this.loading = false;
    });
  }




}
