import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { UpdateComponent } from '../Login/update/update.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
    HomepageComponent,
    BookingComponent,
    CustomerInfoComponent,
    UpdateComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeatureRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModule { }
