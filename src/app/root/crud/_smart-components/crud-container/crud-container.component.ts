import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-crud-container',
  templateUrl: './crud-container.component.html',
  styleUrls: ['./crud-container.component.scss'],
})
export class CrudContainerComponent implements OnDestroy{
  private _subscription: Subscription = new Subscription();
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
    this._subscription.add(
      this._router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.activeLink = this._router.url.split('/').reverse()[0];
      })
    );
  }
  
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
