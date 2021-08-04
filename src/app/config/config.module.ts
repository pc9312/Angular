import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigPageComponent } from './component/config-page/config-page.component';
import { ModelDetailsComponent } from './component/model-details/model-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConfigPageComponent,
    ModelDetailsComponent
  ],
  imports: [
    CommonModule,

    /* Material Modules */
    MatCardModule,
    MatPaginatorModule,

    ConfigRoutingModule,
    SharedModule
  ]
})
export class ConfigModule { }
