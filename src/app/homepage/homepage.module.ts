import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperModule } from '../route-wrapper/route-wrapper.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterWrapperModule,
    HomepageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class HomepageModule { }
