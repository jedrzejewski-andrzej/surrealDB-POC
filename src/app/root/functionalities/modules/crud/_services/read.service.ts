import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ReadService extends AbstractService {
  _surrealObjSingle$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  surrealObjSingle$: Observable<any> = this._surrealObjSingle$.asObservable();
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  readOnSurrealAll(): void {
    this._httpClient.get('http://localhost:8000/key/users', {
      headers: {
        NS: 'test',
        DB: 'test',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).subscribe(res => {
      this._surrealObj$.next(res);
    });
  }
  
  readOnSurrealSingle(id: number): void {
    this._httpClient.get(`http://localhost:8000/key/users/${id}`, {
      headers: {
        NS: 'test',
        DB: 'test',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).subscribe(res => {
      this._surrealObjSingle$.next(res);
    });
  }
  
  readOnSql(): void {
    this._httpClient.get('').subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
}
