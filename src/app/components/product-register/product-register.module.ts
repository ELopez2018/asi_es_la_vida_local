import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRegisterRoutingModule } from './product-register.routing';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    ProductRegisterRoutingModule,
    CarouselModule,
    SharedModule
  ],
  declarations: [ProductRegisterComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProductRegisterModule {}
