import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';
import { Auth } from '../../../../shared/auth';

@Component({
  selector: 'app-receiver-form',
  templateUrl: './receiver-form.component.html',
  styleUrls: ['./receiver-form.component.scss']
})
export class ReceiverFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "add receiver";
  cities: any = [];
  areas: any = [];
  companies: any = [];
  branches: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "receivers";
    this.displayError = true;

    if (this.isUpdate)
      this.title = "update receiver";

    this.requiredFields = [
      'name', 'address', 'city_id', 'area_id', 'company_id', 'branch_id'
    ];


    if (!this.resource.id) {
      this.reset({});
    }
  }

  reset(item) {
    this.resource = {
      company_id: Auth.user().company_id,
      branch_id: Auth.user().branch_id
    };
    item = {
      company_id: Auth.user().company_id,
      branch_id: Auth.user().branch_id
    };
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'receivers', url: '/receiver'},
      {name: this.title, url: '#', active: true},
    ];
  }


  loadSettings() {
    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
      this.service.get("areas").subscribe((res) =>{
        this.areas = res;
      });

    if(Autoloader.cities())
      this.cities = Autoloader.cities();
    else
      this.service.get("cities").subscribe((res) =>{
        this.cities = res;
      });

    if(Autoloader.companies())
      this.companies = Autoloader.companies();
    else
      this.service.get("companies").subscribe((res) =>{
        this.companies = res;
      });

    if(Autoloader.branches())
      this.branches = Autoloader.branches();
    else
      this.service.get("branches").subscribe((res) =>{
        this.branches = res;
      });
  }

  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
    this.reset({});
  }

}
