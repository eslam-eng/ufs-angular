import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper';
import { Request } from 'src/app/shared/request';
import { AwbStatusCode } from '../../../../settings/awb-status-code';

@Component({
  selector: 'app-update-courier-sheet',
  templateUrl: './update-courier-sheet.component.html',
  styleUrls: ['./update-courier-sheet.component.scss']
})
export class UpdateCourierSheetComponent extends Crud implements OnInit {

  baseApiUrl: any = "courier-sheets";
  status: any = [];
  filter: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();
  generalStatus: any;
  deliverdStatus: any = {};

  showSaveBtn = false;
  //availableCodes = ['1', '2', '3', '4'];

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    super(service);
    this.title = "update courier sheet";
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'courier sheets', url: '/courier-sheet'},
      {name: this.title, url: '#', active: true},
    ];
  }

  changeAllStatus() {
    this.selectedAwb.getAll().forEach(element => {
      element.status_id = this.generalStatus;
    });
    this.changeStatus();
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
      this.status = res.filter(element => {
        if (element.is_final == 1) return element;
      });

      res.forEach(element => {
        if (element.code == AwbStatusCode.DELIVERED) {
          this.deliverdStatus = element;
        }
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
    if (!awb.status)
      return false;
    return awb.status.code != '5' && awb.status.code != '8'? true : false;
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
        status_id: element.status_id,
        receiver_name: element.receiver_name,
        receiver_title: element.receiver_title,
        collection: element.collection
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
