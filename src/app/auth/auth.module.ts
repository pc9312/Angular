import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './component/auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /* Material Module Imports */

    MatInputModule,    
    MatToolbarModule,

    /* Custom Module Imports */

    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
