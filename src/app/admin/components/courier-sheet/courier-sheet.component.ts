import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courier-sheet',
  templateUrl: './courier-sheet.component.html',
  styleUrls: ['./courier-sheet.component.scss']
})
export class CourierSheetComponent extends Crud implements OnInit {

  baseApiUrl = "courier-sheets";
  title = "courier-sheets"
  self: any = this;

  couriers: any = [];

  selectedResource: any = {};
  canTrack: any = true;

  constructor(public service: GlobalService, private router: Router) {
    super(service);
    this.canAdd = Auth.can('courier_sheet_add');
    this.canEdit = Auth.can('courier_sheet_edit');
    this.canRemove = Auth.can('courier_sheet_remove');
  }

  initFillable() {
    this.fillable = [
      {name: 'id'},
      {name: 'date'},
      {name: 'courier', object: true, data: 'name'},
      {name: 'user', object: true, data: 'name'},
      {name: 'awb_number'},
      //{name: 'awb_codes'},
      {name: 'edit', permission: this.canEdit, action: (item, i) => {this.edit(item)}, class: "fa fa-edit w3-text-orange"},
      {name: 'print', permission: true, action: (item, i) => {this.printOne(item)}, class: "fa fa-print w3-text-dark-gray"},
      {name: 'remove', permission: this.canRemove, action: (item, i) => {this.destroy(item, i)}, class: "fa fa-trash w3-text-red"},
    ];
  }

  loadSettings() {
    this.service.get('couriers').subscribe((res: any)=>{
      this.couriers = res;
    });
  }

  ngOnInit() {
    this.initFillable();
    this.initBreadCrumb();
    this.get(true);
    this.loadSettings();
  }

  create() {
    Helper.refreshComponent(this.router, "/courier-sheet-create");
  }

  edit(item) {
    Helper.refreshComponent(this.router, "/courier-sheet-edit/"+item.id);
  }

  printOne(item) {
    if (item.id) {
      let url = environment.apiUrl + "/courier-sheets/print/" + item.id + "?api_token=" + Auth.getApiToken();
      Helper.openWindow(url);
    }
  }



}

