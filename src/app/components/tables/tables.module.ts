import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [DataTableComponent, DefaultTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgxDatatableModule
  ]
})
export class TablesModule { }
