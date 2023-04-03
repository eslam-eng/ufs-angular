import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public $: any = $;
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Constent-Type' : 'application/json',
      'api_token' : Auth.getApiToken(),
      'Authorization' : "Bearer " + Auth.getApiToken(),
    });
  }


  /**
   * get services from api
   *
   */
  public get(url, data={}) {
    let requestParams = {};

    Object.keys(data).forEach(key => {
      if (data[key]) {
        requestParams[key] = data[key]
      }
    });

    let headerOptions: any = {
      headers : this.header,
      params: requestParams
    };

    return this.http.get(url, headerOptions);
  }

  /**
   * get services from api
   *
   */
  loadHtml(url, data={})   {
    //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const headers = new HttpHeaders({
      'Constent-Type' : 'text/plain; charset=utf-8',
      'api_token' : Auth.getApiToken(),
      'Authorization' : "Bearer " + Auth.getApiToken(),
    });
    return this.http.get<string>(url, { headers: headers, params: data, responseType: 'text' as 'json' });
  }

  /**
   * get services from api
   *
   */
  loadHtmlPost(url, data={})   {
    //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const headers = new HttpHeaders({
      'Constent-Type' : 'text/plain; charset=utf-8',
      'api_token' : Auth.getApiToken(),
      'Authorization' : "Bearer " + Auth.getApiToken(),
    });
    return this.http.post<string>(url, data, { headers: headers, responseType: 'text' as 'json' });
  }

  /**
   * store new service
   */
  public store(url, data: any, option: any={}) {
    let headerOptions: any = {
      headers : this.header
    };
    return this.http.post(url, data, headerOptions);
  }

  /**
   * update service
   */
  public update(url, data: any) {
    let headerOptions: any = {
      headers : this.header
    };
    return this.http.post(url, data, headerOptions);
  }

  /**
   * remove service
   */
  public destroy(url, id) {
    let headerOptions: any = {
      headers : this.header
    };
    return this.http.post(url + '/' + id, null, headerOptions);
  }
}
