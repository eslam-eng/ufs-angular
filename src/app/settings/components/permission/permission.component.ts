import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { SettingService } from '../../services/setting.service';
import { SettingTemplate } from '../../setting-template';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent extends SettingTemplate  implements OnInit {

  permissions = null;

  constructor(public settingService: SettingService,
    public permissionService: SettingService) {
    super(settingService);

    this.baseUrl = "permission_groups";

    this.settingService.baseUrl = "permission_groups";
    this.requiredFields = ['name'];
    this.get();

    // init level
    this.permissions = new SettingTemplate(this.permissionService);
    this.permissions.requiredFields = ['name', 'group_id'];
    this.permissions.baseUrl = "permissions";
    this.permissions.get(); 
  }


  ngOnInit() {
  }

}
