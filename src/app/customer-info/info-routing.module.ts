import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterWrapperComponent } from '../route-wrapper/route-wrapper.component';
import { CustomerInfoComponent } from './customer-info.component';

const routes: Routes = [{
  path: "",
  component: RouterWrapperComponent,
  children: [
    {
      path: "",
      component: CustomerInfoComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
