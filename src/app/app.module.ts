import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PatientsComponent } from './patients/patients.component';
import { PaymentsComponent } from './payments/payments.component';
import { ComponentsComponent } from './components/components.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { MapsComponent } from './maps/maps.component';
import { ServicePagesComponent } from './service-pages/service-pages.component';
import {MatSelectModule} from '@angular/material/select';
import { InvoicesComponent } from './invoices/invoices.component';
import { PricingComponent } from './pricing/pricing.component';
import { SessionComponent } from './session/session.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AppoinmentComponent,
    DoctorsComponent,
    DepartmentsComponent,
    PatientsComponent,
    PaymentsComponent,
    ComponentsComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
    FormsComponent,
    ChartsComponent,
    MapsComponent,
    ServicePagesComponent,
    InvoicesComponent,
    PricingComponent,
    SessionComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
