import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestManagementRoutingModule } from './request-management-routing.module';
import { RequestManagementComponent } from './request-management.component';


@NgModule({
  declarations: [RequestManagementComponent],
  imports: [
    CommonModule,
    RequestManagementRoutingModule
  ]
})
export class RequestManagementModule { }
