import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  $: any = $;

  constructor(private http: HttpClient) { }


  /**
   * store new service
   */
  public upload(url, data: FormData) {
    return this.http.post(url + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * store new service
   */
  public download(url, data: FormData) {
    return this.http.get(url + '?api_token=' + Auth.getApiToken() + "&"+this.$.param(data));
  }

}
