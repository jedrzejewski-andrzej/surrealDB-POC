import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service.class';

@Injectable()
export class UpdateService extends AbstractService {
  constructor(private _httpClient: HttpClient) {
    super();
  }

  updateOnSurreal(id: number): void {
    const user = {
      email: `updatedTest${id}@example.pl`,
      name: `SurrealDB-${id}`,
    }
    this._httpClient.patch(`http://localhost:8000/key/users/${id}`, JSON.stringify(user), {
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
  
  updateOnSql(): void {
    this._httpClient.patch('', {}).subscribe(res => {
      this._sqlObj$.next(res);
    });
  }
}
