import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FunctionalitiesContainerComponent
} from './_smart-components/functionalities-container/functionalities-container.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionalitiesContainerComponent,
    children: [
      {
        path: 'crud',
        loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule),
      },
      {
        path: 'transactions',
        loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: '**',
        redirectTo: 'crud',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionalitiesRoutingModule {}
