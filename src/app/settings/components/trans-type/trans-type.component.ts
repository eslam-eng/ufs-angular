import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-trans-type',
  templateUrl: './trans-type.component.html',
  styleUrls: ['./trans-type.component.scss']
})
export class TransTypeComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "trans types";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('trans_type_add');
    this.canEdit = Auth.can('trans_type_edit');
    this.canRemove = Auth.can('trans_type_remove');
    //
    this.baseApiUrl = "trans-types";
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
    if (Autoloader.transTypes())
      this.data = Autoloader.transTypes();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setTransTypes(res);
  }

}
