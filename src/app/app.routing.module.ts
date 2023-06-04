import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'functionalities',
  },
  {
    path: 'functionalities',
    loadChildren: () => import('./root/functionalities/functionalities.module').then(m => m.FunctionalitiesModule),
  },
  {
    path: '**',
    redirectTo: '/functionalities',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
