import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Crud } from 'src/app/shared/helpers/crud';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent extends Crud implements OnInit {

  title: any = "mailbox";

  constructor(public service: GlobalService) {
    super(service);
    //
    this.baseApiUrl = "mailboxs";
  }

  initFillable() {
    this.fillable = [
      {name: 'name'},
      {name: 'company'},
      {name: 'tel'},
      {name: 'website'},
      {name: 'email'},
      {name: 'monthly_order'},
      {name: 'industry'},
      {name: 'message'},
      {name: 'remove', permission: this.canRemove, action: (item, i) => {this.destroy(item, i)}, class: "fa fa-trash w3-text-red"}
    ];
  }


  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }


  ngOnInit() {
    this.initFillable();
    this.initBreadCrumb();

    this.filter.type = "inbox";
    this.get(true);
  }

  create() {
    this.resource = {
      company: Auth.user().company? Auth.user().company.name : '',
      website: 'http://ufs-backend.pixiagency.com/',
      phone: Auth.user().company? Auth.user().company.phone : '',
      email: Auth.user().company? Auth.user().company.email : '',
      name: Auth.user()? Auth.user().name : ''
    };
    this.$('#mailboxModal').modal('show');
  }

  inbox() {
    this.filter.type = "inbox";
    this.get(true);
  }

  sent() {
    this.filter.type = "sent";
    this.get(true);
  }

  trash() {
    this.filter.type = "trash";
    this.get(true);
  }



}
