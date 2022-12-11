import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouterWrapperComponent } from "../route-wrapper/route-wrapper.component";
import { FeatureComponent } from "./feature.component";


const routes: Routes = [
  {
    path: "",
    component: FeatureComponent,
    children: [
      {
        path: "homepage",
        component: RouterWrapperComponent,
        loadChildren: () =>
          import("../homepage/homepage.module").then(
            (m) => m.HomepageModule
          )
      },
      {
        path: "bookings",
        loadChildren: () =>
          import("../booking/bookings.module").then(
            (m) => m.BookingsModule
          )
      },
      {
        path: "info",
        loadChildren: () =>
          import("../customer-info/info.module").then(
            (m) => m.InfoModule
          )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
