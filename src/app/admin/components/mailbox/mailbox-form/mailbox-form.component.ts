import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Autoloader } from '../../../helpers/autoloader';

@Component({
  selector: 'app-mailbox-form',
  templateUrl: './mailbox-form.component.html',
  styleUrls: ['./mailbox-form.component.scss']
})
export class MailboxFormComponent extends Crud implements OnInit {

  breadcrumbList: any = [];
  title: any = "Send Mail";
  companies: any = [];
  stores: any = [];
  expenseTypes: any = [];

  @Input() isUpdate: any = false;
  @Input() resource: any = {};
  @Input() action: any;


  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "mailboxs";
    this.displayError = true;

    this.requiredFields = [
      'name', 'email', 'phone', 'company', 'message', 'website'
    ];
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.get();
  }


}

