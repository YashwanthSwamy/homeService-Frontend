import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperModule } from '../route-wrapper/route-wrapper.module';
import { InfoRoutingModule } from './info-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterWrapperModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
