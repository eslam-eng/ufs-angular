import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Auth } from 'src/app/shared/auth';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Helper } from '../../../../shared/helper';
import { Autoloader } from '../../../helpers/autoloader';
import { AwbStatusCode } from '../../../../settings/awb-status-code';

@Component({
  selector: 'app-pickup-track',
  templateUrl: './pickup-track.component.html',
  styleUrls: ['./pickup-track.component.scss']
})
export class PickupTrackComponent implements OnInit, OnChanges {

  @Input() resource: any;
  @Input() reload: any;

  isSubmit: any = false;
  status: any = [];
  history: any = [];

  statusHashTable = new HashTable<any, any>();

  canChangeOk: boolean = true;
  canChangepickupstatus: boolean = true;
  canRemoveTrack: boolean = false;

  steppers: any = ['in_company', 'processing', 'hold', 'delivered'];

  stepperHashTable: HashTable<any, any> = new HashTable();
  statusCode: any = AwbStatusCode;
  delivered: any = {};

  constructor(private service: GlobalService) {
    this.canChangepickupstatus = Auth.can('pickup_change_status');
    this.canRemoveTrack = Auth.can('pickup_track_remove');
  }

  statusCallback(res) {
    this.status = res;
    this.status.forEach(element => {
      this.statusHashTable.put(element.id, element);
      if (element.code == AwbStatusCode.DELIVERED) {
        this.delivered = element;
      }
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
    this.history = this.resource.pickup_history;
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

  sendpickupInfo() {
    this.service.store("pickups/update/"+this.resource.id, this.resource).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      } else {
        Message.error(res.message);
      }
    });
  }

  send() {
    this.isSubmit = true;
    let data  = {
      status_id: this.resource.status_id,
      receiver_name: this.resource.receiver_name,
      receiver_title: this.resource.receiver_title
    };
    this.service.store('pickups/status/'+this.resource.id, data).subscribe((res: any) =>{
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
      self.service.destroy('pickups-history/destroy', item.id).subscribe((res: any) => {
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
