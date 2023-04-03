import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public userSubject = new Rx.BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getMyInfo(): Observable<any> {
    return this.http.get('profile');
  }
}
