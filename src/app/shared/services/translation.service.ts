import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../auth';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  $: any = $;

  constructor(private http: HttpClient, private service: GlobalService) { }

  /**
   * get services from api
   *
   */
  public getList(data) {
    return this.service.get('translation/get', data);
  }

  /**
   * get services from api
   *
   */
  public get() {
    return this.service.get('translation');
  }

  /**
   * store new service
   */
  public update(data) {
    return this.service.store('translation/update', data);
  }

}
