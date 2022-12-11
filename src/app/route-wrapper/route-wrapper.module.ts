import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterWrapperComponent } from './route-wrapper.component';

@NgModule({
  declarations: [RouterWrapperComponent],
  imports: [
    RouterModule
  ],
  exports: [RouterWrapperComponent]
})
export class RouterWrapperModule { }