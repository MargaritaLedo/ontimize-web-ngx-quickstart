import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { BranchesRoutingModule, BRANCHES_MODULE_DECLARATIONS } from './branches-routing.module';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OChartModule,
    BranchesRoutingModule,
    ODataTableModule
  ],
  declarations: BRANCHES_MODULE_DECLARATIONS,
  exports: BRANCHES_MODULE_DECLARATIONS
})
export class BranchesModule { }