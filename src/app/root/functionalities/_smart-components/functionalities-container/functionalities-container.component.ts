import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-functionalities-container',
  templateUrl: './functionalities-container.component.html',
  styleUrls: ['./functionalities-container.component.scss'],
})
export class FunctionalitiesContainerComponent implements OnDestroy{
  private _subscription: Subscription = new Subscription();
  tabs: {title: string, route: string}[] = [
    {
      title: 'Crud',
      route: 'crud'
    },
    {
      title: 'Auth',
      route: 'auth'
    },
    {
      title: 'Transactions',
      route: 'transactions'
    }
  ];
  
  activeLink = ''
  
  constructor(private _router: Router) {
    this._subscription.add(
      this._router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if(this._router.url.split('/').length === 3) {
          this.activeLink = this._router.url.split('/').reverse()[0]
        } else {
          this.activeLink = this._router.url.split('/').reverse()[1];
        }
      })
    );
  }
  
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
