import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestBoxInfoComponent } from '@root/main/request-box-info/request-box-info.component';
import { MaterialModule } from './material.module';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationComponent } from './translation/translation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '@root/components/product-register/product-card/product-card.component';
import { AddUserComponent } from './add-user/add-user.component';
const COMPONENTS = [
  BreadcrumbsComponent,
  HeaderComponent,
  SidebarComponent,
  LoadingComponent,
  UploadFilesComponent,
  TranslationComponent,
  ProductCardComponent,
  AddUserComponent
];

const MODULES = [
  RouterModule,
  CommonModule,
  MaterialModule,
  TranslateModule,
  ReactiveFormsModule,
  FormsModule,
  CarouselModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
