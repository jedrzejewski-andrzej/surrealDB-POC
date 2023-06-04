import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TransactionsContainerComponent
} from './_smart-components/transactions-container/transactions-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TransactionsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
