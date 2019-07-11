import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserHttp } from '../models/http-models/user-http.interface';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(this.usersUrl);
  }
}