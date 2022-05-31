// IMPORT ALL MATERIAL COMPONENTS
// #STEPS
// 1- Import this file as module in app.module.ts ==> import { MaterialModule } from './xyz/abc';
// 2- Initialize it in imports:[] array ==> imports:[MaterialModule]

import { NgModule } from '@angular/core';

// *************** NAVIGATION ***************
import { MatMenuModule } from '@angular/material/menu';

// *************** LAYOUT ***************
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// *************** BUTTONS & INDICATORS ***************
import { MatButtonModule } from '@angular/material/button';

// *************** GRID ***************
import {MatGridListModule} from '@angular/material/grid-list';

// *************** LIST ***************
import {MatListModule} from '@angular/material/list';

// *************** TOOLBAR ***************
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';

// *************** MODAL-DIALOG ***************
import {MatDialogModule} from '@angular/material/dialog';

import {MatDividerModule} from '@angular/material/divider';

// *************** MESSAGE SERVICE ***************
import { MatSnackBarModule } from '@angular/material/snack-bar';
// *************** loading***************
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {MatFormFieldModule} from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core';


const AllMaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule { }
