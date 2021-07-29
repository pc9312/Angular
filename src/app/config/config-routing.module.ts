import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigPageComponent } from './component/config-page/config-page.component';
import { ModelDetailsComponent } from './component/model-details/model-details.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigPageComponent
  },
  {
    path: 'details',
    component: ModelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
