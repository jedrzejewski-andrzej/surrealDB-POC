import {BehaviorSubject, Observable} from 'rxjs';

export class AbstractService {
  _surrealObj$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  surrealObj$: Observable<any> = this._surrealObj$.asObservable();
  
  clear(): void {
    this._surrealObj$.next(null);
  }
}