import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(environment.urlApi + id)
  }

  getConnectedUser(): Observable<User> {
    return this.http.get<User>(environment.urlApi + 'users/me');
  }

		updateMe(user: object): Observable<User> {
			return this.http.patch<User>(environment.urlApi + 'users/me', user);
		}

}
