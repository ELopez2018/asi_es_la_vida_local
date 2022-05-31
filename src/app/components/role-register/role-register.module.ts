import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRegisterRoutingModule } from './role-register-routing.module';
import { RoleRegisterComponent } from './role-register.component';


@NgModule({
  declarations: [RoleRegisterComponent],
  imports: [
    CommonModule,
    RoleRegisterRoutingModule
  ]
})
export class RoleRegisterModule { }
