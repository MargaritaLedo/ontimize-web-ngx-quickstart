import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { AccountsRoutingModule, ACCOUNTS_MODULE_DECLARATIONS } from './accounts-routing.module';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OChartModule,
    AccountsRoutingModule
  ],
  declarations: ACCOUNTS_MODULE_DECLARATIONS,
  exports: ACCOUNTS_MODULE_DECLARATIONS
})
export class AccountsModule { }

