import { Component, Inject, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { Auth } from '../shared/auth';
import { Router } from '../../../node_modules/@angular/router';
import { TranslationService } from '../shared/services/translation.service';
import { Translation } from '../shared/translation';
import { Cache } from '../shared/cache';
import { Request } from '../shared/request';
import { Application } from '../admin/helpers/application';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements  OnInit {

  constructor(
  private router: Router) {
    //
  }

  watchUser() {
    console.log(Auth.getApiToken());
    if (!Auth.getApiToken())
      this.router.navigate(['/auth/login'], {
      }).then().catch();
  }

  ngOnInit() {

    Application.start();
  }


  init() {
  }


}
