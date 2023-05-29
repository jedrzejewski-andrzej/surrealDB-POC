import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContainerComponent } from './_smart-components/create-container/create-container.component';
import { ReadContainerComponent } from './_smart-components/read-container/read-container.component';
import { UpdateContainerComponent } from './_smart-components/update-container/update-container.component';
import { DeleteContainerComponent } from './_smart-components/delete-container/delete-container.component';
import {CrudContainerComponent} from './_smart-components/crud-container/crud-container.component';

const routes: Routes = [
  {
    path: '',
    component: CrudContainerComponent,
    children: [
      {
        path: 'create',
        component: CreateContainerComponent
      },
      {
        path: 'read',
        component: ReadContainerComponent
      },
      {
        path: 'update',
        component: UpdateContainerComponent
      },
      {
        path: 'delete',
        component: DeleteContainerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
