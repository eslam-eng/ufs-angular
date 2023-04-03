
import { Cache } from './cache';
import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { Injectable } from '@angular/core';


export class Auth {

  /**
   * return api token of user
   *
   */
  public static getApiToken() {
    return Cache.get(AuthService.API_TOKEN_PRFIX);
  }

  /**
   * return user
   *
   */
  public static user() {
    return Cache.get(AuthService.USER_PRFIX);
  }

  public static isAdmin() {
    return (Auth.user().company_id == 1);
  }

  /**
   * remove user object from cache
   */
  public static logout() {
    Cache.remove(AuthService.API_TOKEN_PRFIX);
    Cache.remove(AuthService.USER_PRFIX);

    return false;
  }

  public static canOr(permissions) {
    //return true;
    let valid = false;
    permissions.forEach(element => {
      if (Auth.can(element))
        valid = Auth.can(element);
    });
    return valid;
  }

  public static canAnd(permissions) {
    //return true;
    permissions.forEach(element => {
      if (!Auth.can(element))
        return false;
    });
  }

  public static can(permission) {
    //return true;
    if (!Auth.user())
      return false;
    let permissions = Auth.user().permissions;
    if (permissions[permission])
      return true;

    return false;
  }

  /**
   * create canActivate instance from condition
   * @param condition
   */
  public static gaurd(condition) {
    return new Gaurd(condition);
  }
}


@Injectable()
class Gaurd implements CanActivate {

  public condition: boolean = false;

  constructor(condition) {
    this.condition = condition;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.condition;
  }
}
