import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsStatusComponent } from './requests-status.component';

const routes: Routes = [
  { path: '', component: RequestsStatusComponent },
  { path: ':/id', component: RequestsStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsStatusRoutingModule {}
