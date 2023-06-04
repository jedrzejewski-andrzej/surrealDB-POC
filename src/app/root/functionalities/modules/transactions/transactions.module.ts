import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionsRoutingModule } from './transactions.routing.module';
import { TRANSACTIONS_SMART_COMPONENTS } from './_smart-components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [...TRANSACTIONS_SMART_COMPONENTS],
  imports: [CommonModule, TransactionsRoutingModule, RouterModule, ReactiveFormsModule, ClipboardModule],
})
export class TransactionsModule {}
