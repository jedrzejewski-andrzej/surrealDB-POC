import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class DeleteService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  deleteOnSurreal(id: number): void {
    this._httpClient.delete(`http://localhost:8000/key/users/${id}`, {
      headers: {
        NS: 'test',
        DB: 'test',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).subscribe(res => {
      this._surrealObj$.next(res)
    });
  }
}
