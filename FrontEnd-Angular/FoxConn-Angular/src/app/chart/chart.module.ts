import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule} from '@angular/material/divider';
import { MatTableExporterModule } from 'mat-table-exporter';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    IndexComponent    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    
    DxChartModule,
    ChartsModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    ChartRoutingModule,
    Ng2SearchPipeModule,
    CommonModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDividerModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableExporterModule,
    HttpClientModule
  ]
})
export class ChartModule { }
platformBrowserDynamic().bootstrapModule(ChartModule);
