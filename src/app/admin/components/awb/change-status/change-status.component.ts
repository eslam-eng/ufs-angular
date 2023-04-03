import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { GlobalService } from '../../../../shared/services/global.service';
import { Helper } from '../../../../shared/helper';
import { Message } from 'src/app/shared/message';
import { Request } from 'src/app/shared/request';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit, OnChanges {

  @Input() selectedAwb: HashTable<any, any> = new HashTable();
  @Input() action: any;

  isSubmit: any = false;
  generalStatus: any;
  status: any = [];
  $: any = $;

  constructor(public service: GlobalService) {
    this.loadStatus();
  }

  loadStatus() {
    if (Autoloader.status())
      this.status = Autoloader.status();
    else
    this.service.get('status').subscribe((res:any) => {
      this.status = res;
    });
  }

  validate() {
    return this.generalStatus? true : false;
  }

  close() {
    this.$('#changeStatusModal').modal('hide');
  }

  finish() {
    Message.success(Helper.trans('done'));
    Helper.loader(false);
    this.isSubmit = false;
    this.close();

    if (this.action)
      this.action();
  }

  changeStatus() {
    if (!this.validate()) {
      return Message.error(Helper.trans('please select status'));
    }
    this.isSubmit = true;
    let counter = 1;
    Helper.loader(true);
    let self = this;
    this.selectedAwb.getAll().forEach(element => {
      let data = {
        status_id: this.generalStatus
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

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
