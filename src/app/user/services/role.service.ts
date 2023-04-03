import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Auth } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {
  }

  /**
   * get services from api
   *
   */
  public permissions() {
    return this.http.get('permissions?api_token=' + Auth.getApiToken());
  }

  /**
   * get services from api
   *
   */
  public groups() {
    return this.http.get('permission-groups?api_token=' + Auth.getApiToken());
  }

  /**
   * update permission new service
   */
  public updatePermission(id, data: any) {
    return this.http.post('roles/permission/' + id + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * get services from api
   *
   */
  public get() {
    return this.http.get('roles?api_token=' + Auth.getApiToken());
  }

  /**
   * store new service
   */
  public store(data: any) {
    return this.http.post('roles/store' + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(id, data: any) {
    return this.http.post('roles/update/' + id + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(id) {
    return this.http.post('roles/delete/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
