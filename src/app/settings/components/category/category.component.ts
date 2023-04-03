import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "awb categories";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('awb_category_add');
    this.canEdit = Auth.can('awb_category_edit');
    this.canRemove = Auth.can('awb_category_remove');
    //
    this.baseApiUrl = "awb-categories";
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
    if (Autoloader.categories())
      this.data = Autoloader.categories();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setCategories(res);
  }

}
