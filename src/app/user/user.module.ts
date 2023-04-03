import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatPaginatorModule, MatSlideToggleModule, MatSortModule, MatTableModule } from '../../../node_modules/@angular/material';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { RoleIndexComponent } from './components/role/role-index/role-index.component';
import { RoleFormComponent } from './components/role/role-form/role-form.component';
import { PermissionsComponent } from './components/role/permission/permissions.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { PermissionComponent } from './components/permission/permission.component';
import { RoleComponent } from './components/role/role.component';
import { PermissionGroupComponent } from './components/permission-group/permission-group.component';
import { UserComponent as UserComponentView } from './components/user/user.component';
@NgModule({
  declarations: [
    UserComponent,
    UserComponentView,
    UserFormComponent,
    RoleIndexComponent,
    RoleFormComponent,
    PermissionComponent,
    PermissionsComponent,
    UserHistoryComponent,
    RoleComponent,
    PermissionGroupComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ]
})
export class UserModule {
  constructor() {
    }

}
