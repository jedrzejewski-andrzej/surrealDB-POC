import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crud-container',
  templateUrl: './crud-container.component.html',
  styleUrls: ['./crud-container.component.scss'],
})
export class CrudContainerComponent {
  tabs: {title: string, route: string}[] = [
    {
      title: 'Create',
      route: 'create'
    },
    {
      title: 'Read',
      route: 'read'
    },
    {
      title: 'Update',
      route: 'update'
    },
    {
      title: 'Delete',
      route: 'delete'
    }
  ];
  
  activeLink = ''
  
  constructor(private _router: Router) {
    this.activeLink = this._router.url.split('/').reverse()[0];
  }
}
