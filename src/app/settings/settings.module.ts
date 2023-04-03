import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from "angular-datatables";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { TranslationComponent } from "./translation/translation.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';
import { PermissionComponent } from './components/permission/permission.component';
import { CityComponent } from './components/city/city.component';
import { CountryComponent } from './components/country/country.component';
import { GoogleChartsModule } from "angular-google-charts";
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

@NgModule({
  declarations: [
    SettingsComponent,
    TranslationComponent,
    PermissionComponent,
    CityComponent,
    CountryComponent,
    AreaComponent,
    ServiceComponent,
    PaymentTypeComponent,
    StatusComponent,
    DepartmentComponent,
    CategoryComponent,
    ExpenseTypeComponent,
    StoreComponent,
    CourierCommisionComponent,
    CourierDailyComponent,
    TransTypeComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    GoogleChartsModule,
    MatTabsModule
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
