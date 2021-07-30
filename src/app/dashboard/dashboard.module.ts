import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './component/dashboard-page/dashboard-page.component';

import {MatListModule} from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,

    /* Material Modules Imports */
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

    /* Custom Module Imports */
    SharedModule,
    DashboardRoutingModule
  ]  
})
export class DashboardModule { }
