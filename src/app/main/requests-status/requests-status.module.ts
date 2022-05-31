import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsStatusRoutingModule } from './requests-status-routing.module';
import { RequestsStatusComponent } from './requests-status.component';


@NgModule({
  declarations: [RequestsStatusComponent],
  imports: [
    CommonModule,
    RequestsStatusRoutingModule
  ]
})
export class RequestsStatusModule { }
