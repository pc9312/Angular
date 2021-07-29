import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/* Shared Modules Decalararion */
const modules = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class SharedModule { }
