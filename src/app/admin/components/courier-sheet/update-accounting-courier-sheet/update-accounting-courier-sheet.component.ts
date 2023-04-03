import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { Request } from 'src/app/shared/request';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-update-accounting-courier-sheet',
  templateUrl: './update-accounting-courier-sheet.component.html',
  styleUrls: ['./update-accounting-courier-sheet.component.scss']
})
export class UpdateAccountingCourierSheetComponent extends Crud implements OnInit {

  baseApiUrl: any = "courier-sheets";
  status: any = [];
  filter: any = {};
  collectedStatus: any = {};
  closedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();

  showSaveBtn = false;
  //availableCodes = ['1', '2', '3', '4'];

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    super(service);
    this.title = "collect courier sheet";
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'courier sheets', url: '/courier-sheet'},
      {name: this.title, url: '#', active: true},
    ];
  }

  getAction(res: any) {
    if (res.length <= 0) {
      return Message.error(Helper.trans('enter valid courier sheet'));
    }
    this.resource = res[0];
    res[0].sheet_details.forEach(element => {
      this.selectedAwb.put(element.awb_id, element.awb);
    });
  }

  loadStatus() {
    this.service.get('status').subscribe((res:any) => {
      this.status = res;
      res.forEach(element => {
        if (element.code == '7')
          this.collectedStatus = element;
        if (element.code == '5')
          this.closedStatus = element;
      });
    });
  }

  changeStatus() {
    this.showSaveBtn = true;
  }

  loadCourierSheet() {
    this.get(true);
  }

  ngOnInit() {
    this.loadStatus();
    this.initBreadCrumb();
  }

  filterAwb(awb) {
    return awb.status.code == '2' || awb.status.code == '3' || awb.status.code == '4'? true : false;
  }

  collect(awb) {
    if (!this.collectedStatus.id)
      Helper.refreshComponent(this.route, window.location.pathname);

    console.log(this.collectedStatus);
    awb.status_id = this.collectedStatus.id;
    this.changeStatus();
  }

  close(awb) {
    if (!this.closedStatus.id)
      Helper.refreshComponent(this.route, window.location.pathname);

    console.log(this.closedStatus);
    awb.status_id = this.closedStatus.id;
    this.changeStatus();
  }

  finish() {
    Helper.loader(false);
    Message.success(Helper.trans('done'));
    this.isSubmit = false;
    Helper.refreshComponent(this.route, '/courier-sheet');
  }

  validate() {
    return this.resource.id? true : false;
  }

  save() {
    console.log(this.resource);
    if (!this.validate()) {
      return Message.error(Helper.trans('enter valid courier sheet'));
    }
    this.isSubmit = true;
    let counter = 1;
    Helper.loader(true);
    let self = this;
    this.selectedAwb.getAll().forEach(element => {
      let data = {
        status_id: element.status_id
      };
      Request.addToQueue({
        observer: this.service.store('awbs/status/'+element.id, data),
        action: (res) => {  }
      });

      counter ++;
    });

    // fire requester
    Request.fire(() => {
      console.log('finished ...............');
      self.finish();
    });
  }

}

