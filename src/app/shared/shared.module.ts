import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';

/* Shared Modules Decalararion */
const modules = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class SharedModule { }
