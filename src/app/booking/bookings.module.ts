import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperModule } from '../route-wrapper/route-wrapper.module';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterWrapperModule,
    BookingRoutingModule
  ]
})
export class BookingsModule { }
