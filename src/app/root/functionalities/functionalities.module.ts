import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FunctionalitiesRoutingModule } from './functionalities.routing.module';
import { FUNCTIONALITIES_SMART_COMPONENTS } from './_smart-components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...FUNCTIONALITIES_SMART_COMPONENTS],
  imports: [CommonModule, FunctionalitiesRoutingModule, RouterModule],
})
export class FunctionalitiesModule {}
