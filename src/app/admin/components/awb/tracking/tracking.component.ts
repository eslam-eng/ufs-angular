import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Helper } from '../../../../shared/helper';
import { AwbStatusCode } from '../../../../settings/awb-status-code';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit, OnChanges {

  @Input() resource: any;
  @Input() reload: any;

  isSubmit: any = false;
  status: any = [];
  history: any = [];

  statusHashTable = new HashTable<any, any>();

  canChangeOk: boolean = true;
  canChangeAwbStatus: boolean = true;
  canRemoveTrack: boolean = false;

  steppers: any = ['in_company', 'processing', 'hold', 'delivered'];
  awbStatusCode: any = AwbStatusCode;

  stepperHashTable: HashTable<any, any> = new HashTable();
  currentStatus: any = {};

  constructor(private service: GlobalService) {
    this.canChangeOk = Auth.can('awb_change_ok_status');
    this.canChangeAwbStatus = Auth.can('awb_change_status');
    this.canRemoveTrack = Auth.can('awb_track_remove');
  }

  statusCallback(res) {
    this.status = res;
    this.status.forEach(element => {
      this.statusHashTable.put(element.id, element);
    });
  }

  ngOnInit() {
    this.statusHashTable = new HashTable<any, any>();

    if (Autoloader.status())
      this.statusCallback(Autoloader.status());
    else
      this.service.get("status").subscribe((res) =>{
        this.statusCallback(res);
      });
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

}
