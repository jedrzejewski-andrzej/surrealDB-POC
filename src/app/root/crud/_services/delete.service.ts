import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class DeleteService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  deleteOnSurreal(): void {
    this._httpClient.delete('').subscribe(res => {
      this._surrealObj$.next(res)
    });
  }
  
  deleteOnSql(): void {
    this._httpClient.delete('').subscribe(res => {
      this._sqlObj$.next(res)
    });
  }
}
