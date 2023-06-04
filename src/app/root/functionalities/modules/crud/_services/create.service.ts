import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class CreateService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super()
  }
  
  createOnSurreal(): void {
    const id = this.generateRandomInt(1000);
    const user = {
      email: `test${id}@example.pl`,
      name: `SurrealDB-${id}`
    }
    this._httpClient.post(`http://localhost:8000/key/users/${id}`, JSON.stringify(user), {
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
  
  createOnSql(): void {
    this._httpClient.post('', {}).subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
  
  private generateRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
