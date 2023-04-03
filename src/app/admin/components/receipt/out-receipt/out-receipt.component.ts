import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-out-receipt',
  templateUrl: './out-receipt.component.html',
  styleUrls: ['./out-receipt.component.scss']
})
export class OutReceiptComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "receipts";
  companies: any = [];
  stores: any = [];
  expenseTypes: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  action: any;

  constructor(public service: GlobalService) {
    super(service);

    this.canAdd = Auth.can('out_receipt_add');
    this.canEdit = Auth.can('out_receipt_edit');
    this.canRemove = Auth.can('out_receipt_remove');
    //
    this.baseApiUrl = "outreceipts";
    this.displayImport = true;
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'date'},
      {name: 'value'},
      {name: 'company', object: true, data: 'name'},
      {name: 'store', object: true, data: 'name'},
      {name: 'expense_type', object: true, data: 'name'},
      {name: 'notes'},
      {name: 'edit', permission: this.canEdit, action: (item, index) => { this.edit(item)}, class: 'fa fa-edit w3-text-orange'},
      {name: 'remove', permission: this.canRemove, action: (item, index) => { this.destroy(item, index)}, class: 'fa fa-trash w3-text-red'},
    ];
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
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
    this.initFillable();
    this.loadSettings();
    this.initBreadCrumb();
    this.get(true);
  }

  create() {
    this.isUpdate = false;
    this.resource = {active: 1, photo_url: "/assets/img/avatar.png"};
    this.$('#receiptModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.$('#receiptModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }


}
