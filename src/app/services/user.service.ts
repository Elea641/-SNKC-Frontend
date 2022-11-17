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
// =======
// import { environment } from './../../environments/environment';
// import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user';
// import { Role } from '../interfaces/role';
//
// @Injectable({
// 	providedIn: 'root',
// })
// export class UserService {
// 	constructor(private http: HttpClient) {}
//
// 	getUserById(id: string): Observable<User> {
// 		return this.http.get<User>(environment.urlApi + id);
// 	}
//
// 	getConnectedUser(): Observable<User> {
// 		return this.http.get<User>(environment.urlApi + 'users/me').pipe(
// 			map((user: User) => {
// 				user.isAdmin = user.roles?.some((role: Role) => role.id === 1);
// 				return user;
// 			})
// 		);
// 	}
// }
// >>>>>>> 3647b3b39859ca0d8fbce685f4ac3f616b047416
