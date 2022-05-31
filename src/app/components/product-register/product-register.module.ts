import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRegisterRoutingModule } from './product-register.routing';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    ProductRegisterRoutingModule,
    SharedModule
  ],
  declarations: [ProductRegisterComponent],
})
export class ProductRegisterModule {}
