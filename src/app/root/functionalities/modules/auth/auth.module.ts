import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { AUTH_SMART_COMPONENTS } from './_smart-components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TerminalItemModule } from '../../../ui-modules/terminal-item/terminal-item.module';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [...AUTH_SMART_COMPONENTS],
  imports: [CommonModule, AuthRoutingModule, RouterModule, ReactiveFormsModule, TerminalItemModule],
  providers: [AuthService]
})
export class AuthModule {}
