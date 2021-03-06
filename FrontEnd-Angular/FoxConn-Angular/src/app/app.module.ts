import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './employee/employee.module';
import { RuleModule } from './rule/rule.module';
import { ChartModule } from './chart/chart.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    ChartsModule,
    BrowserModule,
    RouterModule,
    
    Ng2SearchPipeModule,
    EmployeeModule,
    RuleModule,
    ChartModule,
    MatCardModule,
    MatMenuModule,
    MatTableExporterModule,
    
    ReactiveFormsModule,
    BrowserModule,
    MatDividerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
