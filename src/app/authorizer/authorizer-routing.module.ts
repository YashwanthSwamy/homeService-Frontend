import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "../Login/log-in/log-in.component";
import { RegisterComponent } from "../Login/register/register.component";
import { AuthorizerComponent } from "./authorizer.component";

const routes: Routes = [
  {
    path: "",
    component: AuthorizerComponent,
    children: [
      {
        path: "login",
        component: LogInComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizerRoutingModule { }
