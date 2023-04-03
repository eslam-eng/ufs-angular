import { AwbPrices2Component } from './components/report/awb-prices2/awb-prices2.component';
import {NgModule} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerIntl, MatDatepickerModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatTab, MatTabsModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';
import { BranchComponent } from './components/branch/branch.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { ReceiverFormComponent } from './components/receiver/receiver-form/receiver-form.component';
import { CourierComponent } from './components/courier/courier.component';
import { CourierFormComponent } from './components/courier/courier-form/courier-form.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { PickupFormComponent } from './components/pickup/pickup-form/pickup-form.component';
import { AwbComponent } from './components/awb/awb.component';
import { AwbFormComponent } from './components/awb/awb-form/awb-form.component';
import { CourierSheetComponent } from './components/courier-sheet/courier-sheet.component';
import { CourierSheetFormComponent } from './components/courier-sheet/courier-sheet-form/courier-sheet-form.component';
import { TrackingComponent } from './components/awb/tracking/tracking.component';
import { HomeComponent } from './components/home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { OutReceiptComponent } from './components/receipt/out-receipt/out-receipt.component';
import { ReceiptFormComponent } from './components/receipt/receipt-form/receipt-form.component';
import { InReceiptComponent } from './components/receipt/in-receipt/in-receipt.component';
import { UpdateCourierSheetComponent } from './components/courier-sheet/update-courier-sheet/update-courier-sheet.component';
import { UpdateAccountingCourierSheetComponent } from './components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component';
import { AwbCustomerReviewComponent } from './components/accounting/awb-customer-review/awb-customer-review.component';
import { AwbPricesComponent } from './components/report/awb-prices/awb-prices.component';
import { StoreTransactionComponent } from './components/report/store-transaction/store-transaction.component';
import { ChangeStatusComponent } from './components/awb/change-status/change-status.component';
import { AwbPodComponent } from './components/awb/awb-pod/awb-pod.component';
import { GlobalService } from '../shared/services/global.service';
import { Autoloader } from './helpers/autoloader';
import { CustomerAwbComponent } from './components/report/customer-awb/customer-awb.component';
import { AboutUsComponent } from './components/website/about-us/about-us.component';
import { OurServicesComponent } from './components/website/our-services/our-services.component';
import { OneCustomerStatusAwbComponent } from './components/report/one-customer-status-awb/one-customer-status-awb.component';
import { OneCustomerCityAwbComponent } from './components/report/one-customer-city-awb/one-customer-city-awb.component';
import { PickupTrackComponent } from './components/pickup/pickup-track/pickup-track.component';
import { MailboxComponent } from './components/mailbox/mailbox/mailbox.component';
import { MailboxFormComponent } from './components/mailbox/mailbox-form/mailbox-form.component';
import { CourierCommissionComponent } from './components/report/courier-commission/courier-commission.component';
import { CourierAwbStatusComponent } from './components/report/courier-awb-status/courier-awb-status.component';
import { ReportHeaderComponent } from './components/report/report-header/report-header.component';
import { ReportOptionsComponent } from './components/report/report-options/report-options.component';
import { PricetableReportComponent } from './components/report/pricetable-report/pricetable-report.component';
import { PostalInvoiceComponent } from './components/report/postal-invoice/postal-invoice.component';
import { AwbPrintComponent } from './components/awb/awb-print/awb-print.component';
import { InvoiceHeaderComponent } from './components/report/invoice-header/invoice-header.component';
import { AwbEditDialogComponent } from './components/awb/awb-edit-dialog/awb-edit-dialog.component';

@NgModule({
  declarations: [
    AdminComponent,
    CompanyComponent,
    CompanyFormComponent,
    BranchComponent,
    ReceiverComponent,
    ReceiverFormComponent,
    CourierComponent,
    CourierFormComponent,
    PickupComponent,
    PickupFormComponent,
    AwbComponent,
    AwbFormComponent,
    CourierSheetComponent,
    CourierSheetFormComponent,
    TrackingComponent,
    HomeComponent,
    PriceTableComponent,
    OutReceiptComponent,
    ReceiptFormComponent,
    InReceiptComponent,
    UpdateCourierSheetComponent,
    UpdateAccountingCourierSheetComponent,
    AwbCustomerReviewComponent,
    AwbPricesComponent,
    StoreTransactionComponent,
    ChangeStatusComponent,
    AwbPodComponent,
    CustomerAwbComponent,
    AboutUsComponent,
    OurServicesComponent,
    OneCustomerStatusAwbComponent,
    OneCustomerCityAwbComponent,
    PickupTrackComponent,
    MailboxComponent,
    MailboxFormComponent,
    CourierCommissionComponent,
    CourierAwbStatusComponent,
    ReportHeaderComponent,
    ReportOptionsComponent,
    AwbPrices2Component,
    PricetableReportComponent,
    PostalInvoiceComponent,
    AwbPrintComponent,
    InvoiceHeaderComponent,
    AwbEditDialogComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    GoogleChartsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    AutocompleteLibModule,
    //MatFormFieldControl,
    MatTabsModule
  ],
  exports: [

  ],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    {provide: MatDatepickerIntl},
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class AdminModule {

  constructor(private service: GlobalService) {

    // load main data
    Autoloader.autoload(service);
  }
}
