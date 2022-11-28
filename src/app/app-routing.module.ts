import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './Login/log-in/log-in.component';
import { RegisterComponent } from './Login/register/register.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "login", component: LogInComponent},
  {path: "register", component: RegisterComponent},
  {path: "homepage", component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
