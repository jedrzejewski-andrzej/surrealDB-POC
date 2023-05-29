import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateService} from '../../_services/update.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.scss'],
})
export class UpdateContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  sqlObj$: Observable<any>;
  
  constructor(private updateService: UpdateService) {}
  
  ngOnInit() {
    this.surrealObj$ = this.updateService._surrealObj$
    this.sqlObj$ = this.updateService._sqlObj$;
    this.updateService.updateOnSurreal();
    this.updateService.updateOnSql();
  }
  
  ngOnDestroy() {
    this.updateService.clear();
  }
}
