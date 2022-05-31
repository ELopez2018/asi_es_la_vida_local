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

const COMPONENTS = [
  BreadcrumbsComponent,
  HeaderComponent,
  SidebarComponent,
  LoadingComponent,
  UploadFilesComponent,
  TranslationComponent,
];

const MODULES = [RouterModule, CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS,...MODULES ],
})
export class SharedModule {}
