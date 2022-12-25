import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  basUrl: string = 'http://localhost:3000/';
  token: any = localStorage.getItem('userToken');
  constructor(private _HttpClient: HttpClient) {}
  getNews(): Observable<any> {
    return this._HttpClient.get(this.basUrl + 'News');
  }
  getSpacialNews(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News/getNewsSpicily', obj);
  }

  getNewsNewsType(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News/getNewsNewsType', obj);
  }
  //  for user
  addNewsForUser(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'userNews', obj, {
      headers: { token: this.token },
    });
  }

  getNewsForUser(): Observable<any> {
    return this._HttpClient.get(this.basUrl + 'userNews', {
      headers: { token: this.token },
    });
  }
  // delete
  deleteNewsForUser(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'userNews/deleteNews', obj, {
      headers: { token: this.token },
    });
  }
  getNewsSpicilyUser(obj: any): Observable<any> {
    return this._HttpClient.post(
      this.basUrl + 'userNews/getNewsSpicilyUser',
      obj,
      { headers: { token: this.token } }
    );
  }

  // getUserNewsForAdmin
  getUserNewsForAdmin(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News/getUserNewsForAdmin', obj);
  }
}
