import {BehaviorSubject, Observable} from 'rxjs';

export class AbstractService {
  _sqlObj$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sqlObj$: Observable<any> = this._sqlObj$.asObservable();
  
  _surrealObj$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  surrealObj$: Observable<any> = this._surrealObj$.asObservable();
  
  clear(): void {
    this._sqlObj$.next(null);
    this._surrealObj$.next(null);
  }
}