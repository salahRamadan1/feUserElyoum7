import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.setUser();
    }
  }
  baseUrl: string = ' http://localhost:3000/user/';
  registerForm(obj: any): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signUp', obj);
  }

  login(obj: any): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signIn', obj);
  }

  user = new BehaviorSubject(null);
  setUser() {
    let token = localStorage.getItem('userToken');
    let decode: any = jwt_decode(<string>token);
    this.user.next(decode);
  }
  logOutFromApp() {
    localStorage.removeItem('userToken');
    this.user.next(null);
    this._Router.navigate(['/main']);
  }
}
