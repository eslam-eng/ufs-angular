import { Component, Input, OnInit } from '@angular/core';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-courier-form',
  templateUrl: './courier-form.component.html',
  styleUrls: ['./courier-form.component.scss']
})
export class CourierFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "add courier";
  companies: any = [];
  branches: any = [];
  departments: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "couriers";
    this.displayError = true;

    if (this.isUpdate)
      this.title = "update courier";


    this.requiredFields = [
      'name', 'address', 'phone', 'company_id', 'branch_id', 'department_id', 'national_id'
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: 'couriers', url: '/courier'},
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

    if (Autoloader.branches())
      this.branches = Autoloader.branches();
    else
    this.service.get("branches").subscribe((res) =>{
      this.branches = res;
    });

    if (Autoloader.departments())
      this.departments = Autoloader.departments();
    else
    this.service.get("departments").subscribe((res) =>{
      this.departments = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
    this.initBreadCrumb();
    this.get();
  }

}
