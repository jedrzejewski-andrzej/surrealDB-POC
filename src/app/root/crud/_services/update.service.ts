import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class UpdateService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super();
  }

  updateOnSurreal(): void {
    this._httpClient.patch('', {}).subscribe(res => {
      this._surrealObj$.next(res);
    });
  }
  
  updateOnSql(): void {
    this._httpClient.patch('', {}).subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
}
