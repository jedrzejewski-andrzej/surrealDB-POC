import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReadService} from '../../_services/read.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-read-container',
  templateUrl: './read-container.component.html',
  styleUrls: ['./read-container.component.scss'],
})
export class ReadContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  surrealObjSingle$: Observable<any>;
  
  idControl = new FormControl(6);
  
  constructor(private _readService: ReadService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._readService.surrealObj$;
    this.surrealObjSingle$ = this._readService.surrealObjSingle$;
  }
  
  readOnSurrealAll(): void {
    this._readService.readOnSurrealAll();
  }
  
  readOnSurrealSingle(): void {
    this._readService.readOnSurrealSingle(this.idControl.value || 6);
  }
  
  ngOnDestroy() {
    this._readService.clear();
  }
}
