import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProfileService } from './user-profile.service'
import { Auth } from '../shared/auth';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { Message } from '../shared/message';
import { Helper } from '../shared/helper';
import { Cache } from '../shared/cache';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: any = {};
  login_historyies = [];
  user: any = {};
  passwords: any = {};

  changePasswordLoad = false;
  changeSettingLoad = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.login_historyies);
  displayedColumns: string[];


  constructor(private service:UserProfileService) {
    this.initDisplayColumns(); 
  }

  init() {
    this.initMatDatatable();
    this.user = Auth.user();
    this.loadProfile();
  }

  initDisplayColumns() {
    this.displayedColumns = [
      "created_at", "ip", "phone_details"
    ];
  }

  loadProfile() {
    this.service.getProfile().subscribe((res: any) => {
      this.profile = res;
      this.user = res.user;
      this.login_historyies = res.loginHistory;
      this.dataSource.data = res.loginHistory; 
    });
  }

  changePassword() {
    if (!this.passwords.old_password || !this.passwords.new_password)
      return Message.error(Helper.trans('fill all data'));
    
    if (this.passwords.new_password != this.passwords.confirm_password)
      return Message.error(Helper.trans('passwords not match'));

    this.changePasswordLoad  = true;
    this.service.updatePassword(this.passwords).subscribe((res: any) => {
      if (res.status == 1)
        Message.success(res.message); 
      else
        Message.error(res.message); 

      this.changePasswordLoad  = false;
    });
  }

  chanageProfile() { 
    this.changeSettingLoad  = true;
    this.service.updateProfile(this.user).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message); 
        Cache.set(AuthService.USER_PRFIX, res.data);
      }
      else
        Message.error(res.message); 

      this.changeSettingLoad  = false;

    });
  }

  chanageProfileImage() {  
    this.changeSettingLoad  = true;
    let data = new FormData();
    data.append('image', this.user.image);

    this.service.updateProfileImage(data).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message); 
        Cache.set(AuthService.USER_PRFIX, res.data);
      }
      else
        Message.error(res.message); 

      this.changeSettingLoad  = false; 
    });
  }

  initMatDatatable() { 
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setFile(event, key) { 
    this.user[key] = event.target.files[0];
  }

  viewPersonalImage(event) {
    this.setFile(event, 'image');  
    var reader = new FileReader(); 
    reader.readAsDataURL(this.user.image); 
    reader.onload = (_event) => { 
      this.user.image_url = reader.result; 
    } 
  }

  ngOnInit() { 
    this.init();
  }

}
