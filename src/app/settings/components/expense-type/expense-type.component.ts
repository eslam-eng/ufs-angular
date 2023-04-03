import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.scss']
})
export class ExpenseTypeComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "expenses types";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('expense_type_add');
    this.canEdit = Auth.can('expense_type_edit');
    this.canRemove = Auth.can('expense_type_remove');
    //
    this.baseApiUrl = "expense-types";
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
    if (Autoloader.expenses())
      this.data = Autoloader.expenses();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setExpenses(res);
  }

}
