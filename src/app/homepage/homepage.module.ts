import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperModule } from '../route-wrapper/route-wrapper.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
 import {MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterWrapperModule,
    HomepageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }
