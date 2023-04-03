import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { Message } from '../../../../shared/message';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  breadcrumbList: any = [];
  title: any = "about us";
  doc: any = document;
  isSubmit: any = false;
  $: any = $;
  html: any;

  constructor(private service: GlobalService, private sanitizer: DomSanitizer) {
    this.title = "about us";
    this.initBreadCrumb();
  }

  getHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.load();

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
      id: 1
    };
    this.service.loadHtml('website/get', data).subscribe((res) => {
      this.$('#editor1').html(res);
      this.html = res;
      setTimeout(() => {
        this.initEditor();
      }, 500);
    });
  }

  save() {

    let data = {
      id: 1,
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
