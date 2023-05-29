import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReadService} from '../../_services/read.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-read-container',
  templateUrl: './read-container.component.html',
  styleUrls: ['./read-container.component.scss'],
})
export class ReadContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  sqlObj$: Observable<any>;
  
  constructor(private _readService: ReadService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._readService.surrealObj$;
    this.sqlObj$ = this._readService.sqlObj$;
    this._readService.readOnSurreal();
    this._readService.readOnSql();
  }
  
  ngOnDestroy() {
    this._readService.clear();
  }
}
