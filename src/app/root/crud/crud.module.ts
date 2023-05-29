import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud.routing.module';
import { CRUD_SMART_COMPONENTS } from './_smart-components';
import { CRUD_DUMB_COMPONENTS } from './_dumb-components';
import { CRUD_SERVICES } from './_services';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [...CRUD_SMART_COMPONENTS, ...CRUD_DUMB_COMPONENTS],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
  providers: [...CRUD_SERVICES]
})
export class CrudModule {}
