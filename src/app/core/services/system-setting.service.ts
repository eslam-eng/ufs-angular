import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Auth } from '../../shared/auth';
import { GlobalService } from '../../shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class SystemSettingService {

  constructor(private http: HttpClient, private service: GlobalService) {
  }

  getSystemSetting() {
    return this.service.get('system-setting');
  }

  getNotifications() {
    return this.service.get('notifications');
  }
}
