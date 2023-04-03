import { OneCustomerCityAwbComponent } from './components/report/one-customer-city-awb/one-customer-city-awb.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { Auth } from '../shared/auth';
import { AuthGuestService } from '../shared/middlewares/auth-guest.service';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { CourierComponent } from './components/courier/courier.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { CourierSheetFormComponent } from './components/courier-sheet/courier-sheet-form/courier-sheet-form.component';
import { AwbFormComponent } from './components/awb/awb-form/awb-form.component';
import { AwbComponent } from './components/awb/awb.component';
import { CourierSheetComponent } from './components/courier-sheet/courier-sheet.component';
import { HomeComponent } from './components/home/home.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { OutReceiptComponent } from './components/receipt/out-receipt/out-receipt.component';
import { InReceiptComponent } from './components/receipt/in-receipt/in-receipt.component';
import { UpdateCourierSheetComponent } from './components/courier-sheet/update-courier-sheet/update-courier-sheet.component';
import { UpdateAccountingCourierSheetComponent } from './components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component';
import { AwbCustomerReviewComponent } from './components/accounting/awb-customer-review/awb-customer-review.component';
import { AwbPricesComponent } from './components/report/awb-prices/awb-prices.component';
import { StoreTransactionComponent } from './components/report/store-transaction/store-transaction.component';
import { AwbPodComponent } from './components/awb/awb-pod/awb-pod.component';
import { CustomerAwbComponent } from './components/report/customer-awb/customer-awb.component';
import { AboutUsComponent } from './components/website/about-us/about-us.component';
import { OurServicesComponent } from './components/website/our-services/our-services.component';
import { OneCustomerStatusAwbComponent } from './components/report/one-customer-status-awb/one-customer-status-awb.component';
import { MailboxComponent } from './components/mailbox/mailbox/mailbox.component';
import { CourierAwbStatusComponent } from './components/report/courier-awb-status/courier-awb-status.component';
import { CourierCommissionComponent } from './components/report/courier-commission/courier-commission.component';
import { AwbPrices2Component } from './components/report/awb-prices2/awb-prices2.component';
import { PricetableReportComponent } from './components/report/pricetable-report/pricetable-report.component';
import { PostalInvoiceComponent } from './components/report/postal-invoice/postal-invoice.component';
import { InvoiceHeaderComponent } from './components/report/invoice-header/invoice-header.component';

const routes: Routes = [
  {
    path: 'dashboard',
    //canActivate: [AuthGuestService],
    //data: {can: Auth.can('pickup_read')},
    component: HomeComponent
  },
  {
    path: 'report/payment-details',
    //canActivate: [AuthGuestService],
    data: {can: Auth.can('payment_detail_report')},
    component: null
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: '',
        //canActivate: [AuthGuestService],
        //data: {can: Auth.can('pickup_read')},
        component: HomeComponent
      },
      {
        path: 'pickup',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('pickup_read')},
        component: PickupComponent
      },
      {
        path: 'company',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('company_read')},
        component: CompanyComponent
      },
      {
        path: 'receiver',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('receiver_read')},
        component: ReceiverComponent
      },
      {
        path: 'courier',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_read')},
        component: CourierComponent
      },
      {
        path: 'courier-sheet',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_sheet_read')},
        component: CourierSheetComponent
      },
      {
        path: 'courier-sheet-create',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_sheet_add')},
        component: CourierSheetFormComponent
      },
      {
        path: 'update-courier-sheet',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('update_courier_sheet')},
        component: UpdateCourierSheetComponent
      },
      {
        path: 'update-account-courier-sheet',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('update_account_courier_sheet')},
        component: UpdateAccountingCourierSheetComponent
      },
      {
        path: 'awb-customer-review',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_customer_review')},
        component: AwbCustomerReviewComponent
      },
      {
        path: 'courier-sheet-edit/:id',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_sheet_edit')},
        component: CourierSheetFormComponent
      },
      {
        path: 'awb',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_read')},
        component: AwbComponent
      },
      {
        path: 'awb-create',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_add')},
        component: AwbFormComponent
      },
      {
        path: 'awb-pod',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_change_status')},
        component: AwbPodComponent
      },
      {
        path: 'awb-edit/:id',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('awb_add')},
        component: AwbFormComponent
      },
      {
        path: 'company-branch',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('company_branch_read')},
        component: BranchComponent
      },
      {
        path: 'price-table',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('price_table_read')},
        component: PriceTableComponent
      },
      {
        path: 'out-receipt',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('out_receipt_read')},
        component: OutReceiptComponent
      },
      {
        path: 'in-receipt',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('in_receipt_read')},
        component: InReceiptComponent
      },
      {
        path: 'report/awb-prices',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('report_awb_price')},
        component: AwbPricesComponent
      },
      {
        path: 'report/awb-prices2',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('report_awb_price')},
        component: AwbPrices2Component
      },
      {
        path: 'report/awb-prices3',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('report_awb_price')},
        component: PostalInvoiceComponent
      },
      {
        path: 'report/invoice-cover',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('report_awb_price')},
        component: InvoiceHeaderComponent
      },
      {
        path: 'report/store-transactions',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('report_store_transaction')},
        component: StoreTransactionComponent
      },
      {
        path: 'report/customer-awb',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('report_customer_awb')},
        component: CustomerAwbComponent
      },
      {
        path: 'report/one-customer-awb-status',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('report_one_customer_awb_status')},
        component: OneCustomerStatusAwbComponent
      },
      {
        path: 'report/one-customer-awb-city',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('report_one_customer_awb_city')},
        component: OneCustomerCityAwbComponent
      },
      {
        path: 'report/one-courier-awb-status',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('one_courier_awb_status_report')},
        component: CourierAwbStatusComponent
      },
      {
        path: 'report/courier-commission',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('courier_commission_report')},
        component: CourierCommissionComponent
      },
      {
        path: 'report/pricetable',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('pricetable_report')},
        component: PricetableReportComponent
      },
      {
        path: 'website/about',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('edit_website_about')},
        component: AboutUsComponent
      },
      {
        path: 'website/our-service',
        //canActivate: [AuthGuestService],
        data: {can: Auth.can('edit_website_service')},
        component: OurServicesComponent
      },
      {
        path: 'mailbox',
        canActivate: [AuthGuestService],
        data: {can: Auth.can('read_mailbox')},
        component: MailboxComponent
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
export class AdminRoutingModule {
}
