import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigPageComponent } from './component/config-page/config-page.component';
import { ModelDetailsComponent } from './component/model-details/model-details.component';


@NgModule({
  declarations: [
    ConfigPageComponent,
    ModelDetailsComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
