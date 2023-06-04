import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud.routing.module';
import { CRUD_SMART_COMPONENTS } from './_smart-components';
import { CRUD_SERVICES } from './_services';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TerminalItemModule } from '../../../ui-modules/terminal-item/terminal-item.module';

@NgModule({
  declarations: [...CRUD_SMART_COMPONENTS],
  imports: [CommonModule, CrudRoutingModule, RouterModule, ReactiveFormsModule, TerminalItemModule],
  providers: [...CRUD_SERVICES]
})
export class CrudModule {}
