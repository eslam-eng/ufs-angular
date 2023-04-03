import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { Crud } from 'src/app/shared/helpers/crud';
import { Message } from 'src/app/shared/message';
import { Request } from 'src/app/shared/request';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-awb-customer-review',
  templateUrl: './awb-customer-review.component.html',
  styleUrls: ['./awb-customer-review.component.scss']
})
export class AwbCustomerReviewComponent extends Crud implements OnInit {

  baseApiUrl: any = "awbs";
  status: any = [];
  companies: any = [];
  filter: any = {};
  collectedStatus: any = {};
  selectedAwb: HashTable<any, any> = new HashTable();

  showSaveBtn = false;

  constructor(public service: GlobalService, private router: ActivatedRoute, private route: Router) {
    super(service);
    this.title = "awb customer review";
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  getAction(res: any) {
    res.data.forEach(element => {
      this.selectedAwb.put(element.id, element);
    });
  }

  loadStatus() {
    this.service.get('status').subscribe((res:any) => {
      this.status = res;
      res.forEach(element => {
        if (element.code == '8')
          this.collectedStatus = element;
      });
    });

    this.filter.status_id = this.collectedStatus.id;
  }

  loadCompanies() {
    this.service.get('companies', {paging: '0'}).subscribe((res:any) => {
      this.companies = res;
    });
  }

  changeStatus() {
    this.showSaveBtn = true;
  }


  ngOnInit() {
    this.loadCompanies();
    this.loadStatus();
    this.initBreadCrumb();
  }

  filterAwb(awb) {
    return (awb.status.code == '7' || awb.status.code == '3' || awb.payment_type_id == 1) ? true : false;
  }

  collect(awb, checkbox) {
    if (!checkbox.checked)
      return;

    if (!this.collectedStatus.id)
      Helper.refreshComponent(this.route, window.location.pathname);

    awb.status_id = this.collectedStatus.id;
    this.changeStatus();
  }

  finish() {
    Helper.loader(false);
    Message.success(Helper.trans('done'));
    this.isSubmit = false;
    Helper.refreshComponent(this.route, '/courier-sheet');
  }

  validate() {
    let valid = true;
/*
    this.selectedAwb.getAll().forEach(element => {
      if (element.status_id != this.collectedStatus.id && this.filterAwb(element))
        valid = false;
    });
*/
    return valid;
  }

  save() {
    console.log(this.resource);
    if (!this.validate()) {
      return Message.error(Helper.trans('change all awb status to paid to customer'));
    }
    this.isSubmit = true;
    let counter = 1;
    Helper.loader(true);
    let self = this;
    this.selectedAwb.getAll().forEach(element => {
      if (element.status_id == this.collectedStatus.id) {


        let data = {
          status_id: element.status_id
        };
        Request.addToQueue({
          observer: this.service.store('awbs/status/'+element.id, data),
          action: (res) => {  }
        });

        counter ++;
      }
    });

    // fire requester
    Request.fire(() => {
      console.log('finished ...............');
      self.finish();
    });
  }

}
