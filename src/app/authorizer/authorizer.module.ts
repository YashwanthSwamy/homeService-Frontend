import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../Login/log-in/log-in.component';
import { RegisterComponent } from '../Login/register/register.component';
import { AuthorizerComponent } from './authorizer.component';
import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
    AuthorizerComponent,
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthorizerModule { }
