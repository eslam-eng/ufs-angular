import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Message } from '../../../shared/message';
import { Helper } from '../../../shared/helper';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-courier-daily',
  templateUrl: './courier-daily.component.html',
  styleUrls: ['./courier-daily.component.scss']
})
export class CourierDailyComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  couriers: any = [];
  expenseTypes: any = [];
  title: any = "courier dailies";


  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('courier_daily_add');
    this.canEdit = Auth.can('courier_daily_edit');
    this.canRemove = Auth.can('courier_daily_remove');
    //
    this.baseApiUrl = "courier-dailies";
    this.displayCreate = true;
    this.displayImport = true;
    this.displayError = true;

  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  send(item) {
    if (!item.discount && !item.additional) {
      return Message.error(Helper.trans('please write additional or discount'));
    }

    super.send(item);
  }

  loadSettings() {
    this.service.get("couriers").subscribe((res) =>{
      this.couriers = res;
    });

    if (Autoloader.expenses()) {
      this.expenseTypes = Autoloader.expenses();
    } else {
      this.service.get("expense-types").subscribe((res) =>{
        this.expenseTypes = res;
      });
    }
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadSettings();
    this.get(true);
  }

  create(date={}) {
    let item: any = {};
    item.date = new Date().toISOString().substring(0, 10);
    super.create(item);
  }

}
