import { SharedModule } from '@root/shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { ProductInfoComponent } from './product-info/product-info.component';


@NgModule({
  declarations: [SaleComponent, ProductInfoComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es-CO' },
  ],
})
export class SaleModule { }
