import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { Request } from 'src/app/shared/request';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Auth } from '../../../../shared/auth';
import { AwbStatusCode } from '../../../../settings/awb-status-code';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-awb-pod',
  templateUrl: './awb-pod.component.html',
  styleUrls: ['./awb-pod.component.scss']
})
export class AwbPodComponent extends Crud implements OnInit {

  baseApiUrl: any = "awbs";
  status: any = [];
  filter: any = {};
  deliveredStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();

  resource: any;
  reload: any;

  isSubmit: any = false;
  history: any = [];

  statusHashTable = new HashTable<any, any>();

  canChangeOk: boolean = true;
  canChangeAwbStatus: boolean = true;
  canRemoveTrack: boolean = false;

  steppers: any = ['in_company', 'processing', 'hold', 'delivered'];
  awbStatusCode: any = AwbStatusCode;

  stepperHashTable: HashTable<any, any> = new HashTable();
  currentStatus: any = {};

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    super(service);

    this.title = "awb POD";
    this.canChangeOk = Auth.can('awb_change_ok_status');
    this.canChangeAwbStatus = Auth.can('awb_change_status');
    this.canRemoveTrack = Auth.can('awb_track_remove');

    this.paging = true;
  }


  ngOnChanges() {
    this.history = this.resource.awb_history;
    this.currentStatus = this.resource.status? this.resource.status : {};
    this.loadStepper();
    if (this.resource.status)
      this.resource.is_final = this.resource.status.is_final;
  }

  loadStepper() {
    this.stepperHashTable = new HashTable<any, any>();
    if (this.history)
    this.history.forEach(element => {
      if (element.status.steper)
        this.stepperHashTable.put(element.status.steper, element.status.steper);
    });
  }

  sendAwbInfo() {
    if (!this.resource.receiver_name || !this.resource.receiver_title) {
      return Message.error('enter receiver name and title');
    }

    /*this.service.store("awbs/update/"+this.resource.id, this.resource).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      } else {
        Message.error(res.message);
      }
    });*/

    this.send();
  }

  send() {
    if (this.statusHashTable.get(this.resource.status_id).code == this.awbStatusCode.DELIVERED) {
      if (!this.resource.receiver_name || !this.resource.receiver_title) {
        return Message.error('enter receiver name and title');
      }
    }

    this.isSubmit = true;
    let data  = {
      status_id: this.resource.status_id,
      receiver_name: this.resource.receiver_name,
      receiver_title: this.resource.receiver_title
    };
    this.service.store('awbs/status/'+this.resource.id, data).subscribe((res: any) =>{
      if (res.status == 1) {
        Message.success(res.message);
        this.resource.status = this.statusHashTable.get(this.resource.status_id);
        this.ngOnChanges();
        //

        this.history = res.data;
        this.loadStepper();

      } else {
        Message.error(res.message);
      }

      this.isSubmit = false;
    });
  }

  removeRow(item: any, index) {
    let self = this;
    Message.confirm(Helper.trans('are you sure'), () => {
      self.service.destroy('awbs-history/destroy', item.id).subscribe((res: any) => {
        if (res.status == 1) {
          Message.success(res.message);
          this.ngOnChanges();
          this.history = res.data;
          this.loadStepper();
        }
      });
    });
  }

  showSaveBtn = false;
  //availableCodes = ['1', '2', '3', '4'];

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'awbs', url: '/awb'},
      {name: this.title, url: '#', active: true},
    ];
  }

  getAction(res: any) {
    if (res.data.length <= 0) {
      return;//Message.error(Helper.trans('enter valid awb code'));
    }
    this.resource = res.data[0];
    res.data.forEach(element => {
      this.selectedAwb.put(element.awb_id, element.awb);
    });

    // load changes
    this.ngOnChanges();
    //this.resource.status_id = this.deliveredStatus.id;

    // animate to table
    this.$('html, body').animate({scrollTop: 330}, 1000);
  }

  statusCallback(res) {
    this.status = res;
    this.status.forEach(element => {
      this.statusHashTable.put(element.id, element);
    });
    res.forEach(element => {
      if (element.code == AwbStatusCode.DELIVERED)
        this.deliveredStatus = element;
    });

    //this.resource.status_id = this.deliveredStatus.id;
  }

  loadStatus() {
    if (Autoloader.status())
      this.statusCallback(Autoloader.status());
    else
    this.service.get('status').subscribe((res:any) => {
      this.statusCallback(res);
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
    this.statusHashTable = new HashTable<any, any>();
    this.loadStatus();
  }

  filterAwb(awb) {
    return awb.status.code == '2'? true : false;
  }

  collect(awb) {
    if (!this.deliveredStatus.id)
      Helper.refreshComponent(this.route, window.location.pathname);

    console.log(this.deliveredStatus);
    awb.status_id = this.deliveredStatus.id;
    this.changeStatus();
  }

  finish() {
    this.get(true);
    Helper.loader(false);
    Message.success(Helper.trans('done'));
    this.isSubmit = false;
    this.filter.code = "";
  }

  validate() {
    let valid = this.resource.id? true : false;

    if (!this.resource.id) {
      Message.error(Helper.trans('enter valid awb code'));
      return false;
    }

    if (
      this.resource.status_id == this.deliveredStatus.id &&
      !Helper.validator(this.resource, ['receiver_name', 'receiver_title'])
      ) {
      Message.error(Helper.trans('enter receiver name or title'));
      return false;
    }

    return true;
  }

  save() {
    if (!this.validate()) {
      return;
    }
    this.isSubmit = true;
    let counter = 1;
    Helper.loader(true);
    let data = {
      status_id: this.resource.status_id,
      receiver_name: this.resource.receiver_name,
      receiver_title: this.resource.receiver_title
    };
    this.service.store('awbs/status/'+this.resource.id, data).subscribe(() => {
      this.finish();
    });
  }

}

