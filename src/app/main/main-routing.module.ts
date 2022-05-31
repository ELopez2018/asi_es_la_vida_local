import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { RequestsStatusComponent } from './requests-status/requests-status.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      // { path: '**',  component: DashboardComponent  },
      { path: 'inicio', component: DashboardComponent },
      { path: 'solicitudes', component: RequestsStatusComponent },
      { path: 'solicitudes/:id', component: RequestsStatusComponent },
      { path: 'registro-de-roles', loadChildren: () => import('../components/role-register/role-register.module').then(m => m.RoleRegisterModule) },
      { path: 'administracion-solicitudes', loadChildren: () => import('../components/request-management/request-management.module').then(m => m.RequestManagementModule) },
      { path: 'administracion-usuarios', loadChildren: () => import('../components/user-management/user-management.module').then(m => m.UserManagementModule) },
      { path: 'expedientes', loadChildren: () => import('../components/record/record.module').then(m => m.RecordModule) },
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
