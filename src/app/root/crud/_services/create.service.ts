import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class CreateService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  createOnSurreal(): void {
    this._httpClient.post('', {}).subscribe(res => {
      this._surrealObj$.next(res);
    });
  }
  
  createOnSql(): void {
    this._httpClient.post('', {}).subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
}
