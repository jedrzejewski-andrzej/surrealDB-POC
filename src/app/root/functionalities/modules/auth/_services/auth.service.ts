import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AuthService {
  _signInResponse$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  signInResponse$: Observable<any> = this._signInResponse$.asObservable();
  
  _signUpResponse$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  signUpResponse$: Observable<any> = this._signUpResponse$.asObservable();
  
  _signInError$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  signInError$: Observable<any> = this._signInError$.asObservable();
  
  _signUpError$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  signUpError$: Observable<any> = this._signUpError$.asObservable();
  
  

  constructor(private _httpClient: HttpClient) {}
  
  signIn(): void {
    const data = {
      NS: "test",
      DB: "test",
      SC: "allusers",
      id: "test@aceeme.com",
      pass: "somepassword"
    };
    this._httpClient.post(`http://localhost:8000/signin`, JSON.stringify(data), {
      headers: {
        Accept: 'application/json',
      }
    }).subscribe({
      next: (res) => {
        this._signInResponse$.next(res)
      },
      error: (err) => {
        this._signInError$.next(err);
      }
    });
  }
  
  signUp(): void {
    const data = {
      NS: "test",
      DB: "test",
      SC: "allusers",
      id: "test@aceeme.com",
      pass: "somepassword"
    };
    this._httpClient.post(`http://localhost:8000/signup`, JSON.stringify(data), {
      headers: {
        Accept: 'application/json',
      }
    }).subscribe({
      next: (res) => {
        this._signUpResponse$.next(res)
      },
      error: (err) => {
        this._signUpError$.next(err);
      }
    });
  }
  
  clear(): void {
    this._signInResponse$.next(null);
    this._signUpResponse$.next(null);
    this._signInError$.next(null);
    this._signUpError$.next(null);
  }
}
