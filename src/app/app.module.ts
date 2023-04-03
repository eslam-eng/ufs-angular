import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { AuthGuestService } from './shared/middlewares/auth-guest.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './shared/services/auth.service';
import { LayoutComponent } from './core/layout.component';
import { AppComponent } from './core/app.component';
import { AuthComponent } from './core/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TranslationService } from './shared/services/translation.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { DataTablesModule } from '../../node_modules/angular-datatables';
import { SystemLabelComponent } from './core/components/system-label/system-label.component';
import { UserService } from './user/services/user.service';
import { RoleService } from './user/services/role.service';
import { Router } from '@angular/router';
import { Auth } from './shared/auth';
import { Translation } from './shared/translation';
import { Request } from './shared/request';
import { Cache } from './shared/cache';
import { Helper } from './shared/helper';
import { Application } from './admin/helpers/application';
import { MessageIndexComponent } from './components/message/message-index/message-index.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AuthComponent,
    AppComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    SystemLabelComponent,
    MessageIndexComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
    AppRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [
    httpInterceptorProviders,
    TranslationService,
    AuthService,
    AuthGuestService,
    UserService,
    RoleService,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public static doc: any = document;

  constructor(private router: Router,
    private translationService: TranslationService) {

      Application.start();

    // check on ssl
    //this.activeSSL();

    if (!Auth.getApiToken())
      this.router.navigate(['/auth/login'], {
      }).then().catch();

    // load local translations
    Translation.TRANSLATION_DATA = Cache.has(Translation.TRANSLATION_CACHE_KEY)? Cache.get(Translation.TRANSLATION_CACHE_KEY) : {};


    // load online translations
    this.translationService.get().subscribe((r) => {
      Cache.remove(Translation.TRANSLATION_CACHE_KEY);
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
      Translation.TRANSLATION_DATA = r;
      //
      console.log('translation loaded');
      Helper.refreshComponent(this.router, window.location.pathname);
    });

    // prevent context menu
    this.preventClickJection();
  }


  // prevent context menu
  preventClickJection() {
    if (window.location.host.indexOf('localhost') >= 0)
      return;
    document.oncontextmenu = function(e){ e.preventDefault(); };
  }

  activeSSL() {
    let canActivateSSL = true;

    if (window.location.host.indexOf('localhost') >= 0)
      canActivateSSL = false;

    if (window.location.protocol.indexOf('https') >= 0)
      canActivateSSL = false;

    if (canActivateSSL)
      window.location.href = window.location.href.replace("http", "https");
  }

  reloadIfConsoleOpen() {
    if (this.isConsoleOpen()) {
        window.location.href = "https://www.youtube.com/watch?v=6YCq549gdT0";
    };
  }

  isConsoleOpen() {
    var startTime: any = new Date();
    debugger;
    var endTime: any = new Date();

    return endTime - startTime > 100;
  }



}
