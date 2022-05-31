import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { RequestBoxInfoComponent } from './request-box-info/request-box-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { LastCaseInfoComponent } from './last-case-info/last-case-info.component';
import { ActivityClientInfoComponent } from './activity-client-info/activity-client-info.component';
import { RequestsComponent } from './requests/requests.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    RequestBoxInfoComponent,
    BillingInfoComponent,
    LastCaseInfoComponent,
    ActivityClientInfoComponent,
    RequestsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, TranslateModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
