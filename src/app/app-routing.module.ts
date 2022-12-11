import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './Login/log-in/log-in.component';
import { RegisterComponent } from './Login/register/register.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "login", component: LogInComponent},
  {path: "register", component: RegisterComponent},
  {path: "homepage", component: HomepageComponent},
  {path: "bookings", component: BookingComponent},
  {path: "info", component: CustomerInfoComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: "legacy"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
