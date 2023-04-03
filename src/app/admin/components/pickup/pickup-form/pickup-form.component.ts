import { Component, Input, OnInit } from '@angular/core';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-pickup-form',
  templateUrl: './pickup-form.component.html',
  styleUrls: ['./pickup-form.component.scss']
})
export class PickupFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "add pickup";
  companies: any = [];
  status: any = [];
  couriers: any = [];
  types: any = ['domestic', 'international'];
  transTypes: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "pickups";
    this.displayError = true;

    if (this.isUpdate)
      this.title = "update pickup";

    this.requiredFields = [
      'date', 'company_id', 'status_id'
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'pickups', url: '/pickup'},
      {name: this.title, url: '#', active: true},
    ];
  }


  loadSettings() {
    if (Autoloader.transTypes())
      this.transTypes = Autoloader.transTypes();
    else
    this.service.get('trans-types').subscribe((res) => {
      this.transTypes = res;
    });

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
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
  }

}
