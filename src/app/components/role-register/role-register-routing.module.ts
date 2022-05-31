import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleRegisterComponent } from './role-register.component';

const routes: Routes = [{ path: '', component: RoleRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRegisterRoutingModule { }
