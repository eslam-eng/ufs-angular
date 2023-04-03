import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})
export class PickupComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "pickups";
  companies: any = [];
  couriers: any = [];
  status: any = [];
  resource: any = {};
  $: any = $;
  isUpdate: any = false;
  canTrack: any = false;
  action: any;
  selectedResource: any = {};

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('pickup_add');
    this.canEdit = Auth.can('pickup_edit');
    this.canRemove = Auth.can('pickup_remove');
    this.canTrack = Auth.can('pickup_track');
    //
    this.baseApiUrl = "pickups";
    this.action = () => {
      this.get();
    };
  }

  initFillable() {
    this.fillable = [
      {name: 'code', text: 'pickup code'},
      {name: 'date'},
      {name: 'time_from'},
      {name: 'time_to', text: 'pickup time ready'},
      {name: 'company', object: true, data: 'name'},
      {name: 'status', object: true, data: 'name'},
      {name: 'courier', object: true, data: 'name'},
      {name: 'user', object: true, data: 'name'},
      {name: 'trans_type', object: true, data: 'name'},
      {name: 'shipment_number'},
      {name: 'shipment_type'},
      {name: 'notes'},
      {name: 'edit', permission: this.canEdit, action: (item, i) => {this.edit(item)}, class: "fa fa-edit w3-text-orange"},
      {name: 'tracking', permission: this.canTrack, action: (item, i) => {this.track(item)}, class: "fa fa-truck w3-text-indigo rotate-180"},
      {name: 'remove', permission: this.canRemove, action: (item, i) => {this.destroy(item, i)}, class: "fa fa-trash w3-text-red"}

    ];
  }


  track(item) {
    this.selectedResource = item;
    this.$('#trackingModal').modal('show');
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

    if (Autoloader.status())
      this.status = Autoloader.status();
    else
    this.service.get("status").subscribe((res) =>{
      this.status = res;
    });

    this.service.get("couriers").subscribe((res) =>{
      this.couriers = res;
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
    this.resource = {date: new Date().toISOString().substring(0, 10)};
    this.$('#pickupModal').modal('show');
  }

  edit(item) {
    this.isUpdate = true;
    this.resource = item;
    this.$('#pickupModal').modal('show');
  }

  show(item) {
    this.edit(item);
  }


}
