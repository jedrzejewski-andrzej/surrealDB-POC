import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreateService} from '../../_services/create.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss'],
})
export class CreateContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  sqlObj$: Observable<any>;
  
  constructor(private _createService: CreateService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._createService.surrealObj$;
    this.sqlObj$ = this._createService.sqlObj$;
    this._createService.createOnSurreal();
    this._createService.createOnSql();
  }
  
  ngOnDestroy() {
    this._createService.clear();
  }
}
