import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterWrapperComponent } from '../route-wrapper/route-wrapper.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [{
  path: "",
  component: RouterWrapperComponent,
  children: [
    {
      path: "",
      component: HomepageComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
