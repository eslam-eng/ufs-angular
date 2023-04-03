import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "payment types";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('payment_type_add');
    this.canEdit = Auth.can('payment_type_edit');
    this.canRemove = Auth.can('payment_type_remove');
    //
    this.baseApiUrl = "payment-types";
    this.displayCreate = true;
    this.displayError = true;
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  ngOnInit() {
    this.initBreadCrumb();
    if (Autoloader.paymentTypes())
      this.data = Autoloader.paymentTypes();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setPaymentTypes(res);
  }

}
