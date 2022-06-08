import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'solicitudes',
    loadChildren: () =>
      import('./main/requests-status/requests-status.module').then(
        (m) => m.RequestsStatusModule
      ),
  },
  { path: 'sale', loadChildren: () => import('./components/sale/sale.module').then(m => m.SaleModule) },
  // { path: 'registro-de-roles', loadChildren: () => import('./components/role-register/role-register.module').then(m => m.RoleRegisterModule) },
  // { path: 'administracion-solicitudes', loadChildren: () => import('./components/request-management/request-management.module').then(m => m.RequestManagementModule) },
  // { path: 'administracion-usuarios', loadChildren: () => import('./components/user-management/user-management.module').then(m => m.UserManagementModule) },
  // { path: 'requestBoxInfo', loadChildren: () => import('./main/request-box-info/request-box-info.module').then(m => m.RequestBoxInfoModule) },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
