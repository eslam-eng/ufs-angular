import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';
import { Cache } from '../../../shared/cache';
import { Message } from '../../../shared/message';
import { AppModule } from '../../../app.module';
import { Auth } from 'src/app/shared/auth';
import { GlobalService } from '../../../shared/services/global.service';
import { Autoloader } from '../../../admin/helpers/autoloader';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public userAuth: any = {};

  public doc: any = AppModule.doc;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private service: GlobalService,
    private router: Router
  ) {
    if (Auth.getApiToken())
      this.router.navigate(['/dashboard'], {
      }).then().catch();
  }

  public isSubmitted = false;

  ngOnInit() {
    this.doc.jquery('body').addClass('login-background');
    this.route.queryParams.subscribe((params) => {
      // noinspection TsLint
    });
  }

  login() {
    this.isSubmitted = true;

    this.authService.login(this.userAuth).subscribe((result) => {
        const data: any = result;

        if (data.status == 1) {
          // cache user
          Cache.set(AuthService.USER_PRFIX, data.data);

          // cache api token
          Cache.set(AuthService.API_TOKEN_PRFIX, data.data.api_token);

          // start autoloader
          window.location.href = "/dashboard";
          /*setTimeout(() => {
            Autoloader.autoload(this.service);
          }, 1000);*/

          //this.router.navigate(['/dashboard']).then().catch();
        } else {
          Message.error(data.message);
        }

        this.isSubmitted = false;
      },
      (e) => {
        Message.error(e);
        this.isSubmitted = false;
      }
    );
  }
}
