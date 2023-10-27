import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PatientsComponent } from './patients/patients.component';
import { PaymentsComponent } from './payments/payments.component';
import { ComponentsComponent } from './components/components.component';
import { IconsComponent } from './icons/icons.component';
import { ServicePagesComponent } from './service-pages/service-pages.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PricingComponent } from './pricing/pricing.component';
import { SessionComponent } from './session/session.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'appoinment',component:AppoinmentComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'patients',component:PatientsComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'components',component:ComponentsComponent},
  {path:'icons', component:IconsComponent},
  {path:'service-pages',component:ServicePagesComponent},
  {path:'invoices',component:InvoicesComponent},
  {path:'pricing',component:PricingComponent},
  {path:'session',component:SessionComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
