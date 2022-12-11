import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './authorizer/auth/authGuardService';
import { FeatureGuardService } from './authorizer/auth/featureGuardService';


const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./feature/feature.module").then(m => m.FeatureModule),
    canActivate: [FeatureGuardService],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./authorizer/authorizer.module").then(m => m.AuthorizerModule),
    canActivate: [AuthGuardService]
  }
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
