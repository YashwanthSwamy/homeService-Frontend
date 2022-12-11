import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterWrapperComponent } from '../route-wrapper/route-wrapper.component';
import { BookingComponent } from './booking.component';

const routes: Routes = [{
  path: "",
  component: RouterWrapperComponent,
  children: [
    {
      path: "",
      component: BookingComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
