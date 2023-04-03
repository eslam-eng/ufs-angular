import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../helpers/autoloader';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  companies: any = [];
  cities: any = [];
  areas: any = [];
  title: any = "branches";

  constructor(public service: GlobalService) {
    super(service);
    this.canAdd = Auth.can('company_branch_add');
    this.canEdit = Auth.can('company_branch_edit');
    this.canRemove = Auth.can('company_branch_remove');

    //
    this.baseApiUrl = "branches";
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

    if (Autoloader.cities())
      this.cities = Autoloader.cities();
    else
      this.service.get("cities").subscribe((res) =>{
        this.cities = res;
      });

    if (Autoloader.areas())
      this.areas = Autoloader.areas();
    else
      this.service.get("areas").subscribe((res) =>{
        this.areas = res;
      });
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.loadSettings();
    if (Autoloader.branches())
      this.data = Autoloader.branches();
    else
      this.get();
  }

  getAction(res) {
    Autoloader.setBranches(res);
  }

}
