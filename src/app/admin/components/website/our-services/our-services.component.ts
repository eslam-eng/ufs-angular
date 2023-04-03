import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../shared/message';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  breadcrumbList: any = [];
  title: any = "out services";
  doc: any = document;
  isSubmit: any = false;
  $: any = $;
  html: any;
  id: any = 2;

  constructor(private service: GlobalService) {
    this.initBreadCrumb();
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.load();

    setTimeout(() => {
      this.initEditor();
    }, 500);
  }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: this.title, url: '#', active: true},
    ];
  }

  initEditor() {
    this.doc.CKEDITOR.replace( 'editor1' );
  }

  load() {
    let data = {
      id: this.id
    };
    this.service.loadHtml('website/get', data).subscribe((res) => {
      this.$('#editor').html(res);
      this.html = res;
    });
  }

  save() {
    this.$('.ck-widget__type-around').remove();
    let data = {
      id: this.id,
      value: this.doc.CKEDITOR.instances.editor1.getData()
    };
    this.isSubmit = true;
    this.service.store('website/update', data).subscribe((res:any) => {
      if (res.status == 1) {
        Message.success(res.message);
      } else {
        Message.error(res.message);
      }
      this.isSubmit = false;
    });
  }

}
