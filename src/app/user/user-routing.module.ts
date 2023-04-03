import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';
import { PermissionGroupComponent } from './components/permission-group/permission-group.component';
import { PermissionComponent } from './components/permission/permission.component';
import { RoleComponent } from './components/role/role.component';
import { UserComponent as UserComponentView } from './components/user/user.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: 'user',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('user_read')},
        component: UserComponentView
      },
      {
        path: 'role',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('role_read')},
        component: RoleComponent
      },
      {
        path: 'permission',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('permission_read')},
        component: PermissionComponent
      },
      {
        path: 'permission-group',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('permission_group_read')},
        component: PermissionGroupComponent
      },
    ]
  },

  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
