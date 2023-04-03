import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { TranslationComponent } from './translation/translation.component';
import { PermissionComponent } from './components/permission/permission.component';
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';
import { CityComponent } from './components/city/city.component';
import { CountryComponent } from './components/country/country.component';
import { AreaComponent } from './components/area/area.component';
import { ServiceComponent } from './components/service/service.component';
import { PaymentTypeComponent } from './components/payment-type/payment-type.component';
import { StatusComponent } from './components/status/status.component';
import { DepartmentComponent } from './components/department/department.component';
import { CategoryComponent } from './components/category/category.component';
import { ExpenseTypeComponent } from './components/expense-type/expense-type.component';
import { StoreComponent } from './components/store/store.component';
import { CourierCommisionComponent } from './components/courier-commision/courier-commision.component';
import { CourierDailyComponent } from './components/courier-daily/courier-daily.component';
import { TransTypeComponent } from './components/trans-type/trans-type.component';

const routes: Routes = [
  {
    // RegisterationMethodsModule
    path: "",
    component: SettingsComponent,
    children: [
      {
        path: "country",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('country_read')},
        component: CountryComponent
      },
      {
        path: "city",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('city_read')},
        component: CityComponent
      },
      {
        path: "area",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('area_read')},
        component: AreaComponent
      },
      {
        path: "service",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('service_read')},
        component: ServiceComponent
      },
      {
        path: "payment-type",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('payment_type_read')},
        component: PaymentTypeComponent
      },
      {
        path: "status",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('status_read')},
        component: StatusComponent
      },
      {
        path: "department",
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('department_read')},
        component: DepartmentComponent
      },
      {
        path: "translations",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('translation_read')},
        component: TranslationComponent
      },
      {
        path: "permissions",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('permission_read')},
        component: PermissionComponent
      },
      {
        path: "awb-category",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_category_read')},
        component: CategoryComponent
      },
      {
        path: "expense-type",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('expense_type_read')},
        component: ExpenseTypeComponent
      },
      {
        path: "store",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('store_read')},
        component: StoreComponent
      },
      {
        path: "courier-commission",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_commission_read')},
        component: CourierCommisionComponent
      },
      {
        path: "courier-daily",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_daily_read')},
        component: CourierDailyComponent
      },
      {
        path: "trans-type",
        canActivate: [AuthGuestService],
        data: {can: Auth.can('trans_type_read')},
        component: TransTypeComponent
      },



    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
