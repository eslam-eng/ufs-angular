import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.scss']
})
export class ReceiptFormComponent extends Crud implements OnInit, OnChanges {

  breadcrumbList: any = [];
  title: any = "add receipt";
  companies: any = [];
  stores: any = [];
  expenseTypes: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;
  @Input() type: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "receipts";
    this.displayError = true;

    if (this.isUpdate)
      this.title = "update receipt";
/*
      'date,','store_id','model_id','model_type',
	    'expense_type_id','notes','value', 'type'*/
    this.requiredFields = [
      'date', 'store_id', 'expense_type_id', 'value'
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'receipts', url: '/receipt'},
      {name: this.title, url: '#', active: true},
    ];
  }


  loadSettings() {
    if (Autoloader.companies())
      this.companies = Autoloader.companies();
    else
    this.service.get("companies").subscribe((res) =>{
      this.companies = res;
    });

    this.service.get("stores").subscribe((res) =>{
      this.stores = res;
    });

    if (Autoloader.expenses())
      this.expenseTypes = Autoloader.expenses();
    else
    this.service.get("expense-types").subscribe((res) =>{
      this.expenseTypes = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
  }

  ngOnChanges() {
    if (this.resource) {
      this.resource.type = this.type;
      this.baseApiUrl = this.type + "receipts";
    }
  }

}

