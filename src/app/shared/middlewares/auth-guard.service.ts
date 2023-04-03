import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth } from '../auth';
import { LoginComponent } from '../../auth/components/login/login.component';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!Auth.getApiToken()) {
      this.router.navigate(['/login'], {
        queryParams: {return: state.url}
      }).then().catch();
      return false;
    }

    return true;
  }

}

