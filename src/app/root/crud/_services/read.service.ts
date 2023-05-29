import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class ReadService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  readOnSurreal(): void {
    this._httpClient.get('').subscribe(res => {
      this._surrealObj$.next(res);
    });
  }
  
  readOnSql(): void {
    this._httpClient.get('').subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
}
