import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  signInResponse$: Observable<any>;
  signUpResponse$: Observable<any>;
  signInError$: Observable<any>;
  signUpError$: Observable<any>;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.signInResponse$ = this.authService.signInResponse$;
    this.signUpResponse$ = this.authService.signUpResponse$;
    this.signUpError$ = this.authService.signUpError$;
    this.signInError$ = this.authService.signInError$;
  }
  
  signIn() {
    this.authService.signIn();
  }
  
  signUp() {
    this.authService.signUp();
  }
}