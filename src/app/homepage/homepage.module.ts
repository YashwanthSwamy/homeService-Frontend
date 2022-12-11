import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterWrapperModule } from '../route-wrapper/route-wrapper.module';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterWrapperModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
