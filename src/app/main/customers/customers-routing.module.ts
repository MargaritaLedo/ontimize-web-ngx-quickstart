import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersDetailComponent } from './detail/customers-detail.component';
import { CustomerDetailFormComponent } from './detail/form/customers-detail-form.component';
import { CustomersHomeComponent } from './home/customers-home.component';
import { CustomersNewComponent } from './new/customers-new.component';
import { AccountsModule } from '../accounts/accounts.module';

export function loadAccountsModule() {
  return AccountsModule;
}

export const CUSTOMERS_MODULE_DECLARATIONS = [
  CustomersDetailComponent,
  CustomerDetailFormComponent,
  CustomersHomeComponent,
  CustomersNewComponent
];

export const routes: Routes = [
  { path: '', component: CustomersHomeComponent },
  { path: 'new', component: CustomersNewComponent },
  { path: ':CUSTOMERID', component: CustomersDetailComponent },
  { path: ':CUSTOMERID/accounts', loadChildren: loadAccountsModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }