import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Role } from '../interfaces/role';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	baseUrl = 'http://localhost:3000/users';

	constructor(private http: HttpClient) {}

	getUserById(id: string): Observable<User> {
		return this.http.get<User>(`${this.baseUrl}/${id}`);
	}

	getConnectedUser(): Observable<User> {
		return this.http.get<User>(environment.urlApi + 'users/me').pipe(
			map((user: User) => {
				user.isAdmin = user.roles.some((role: Role) => role.id === 1);
				return user;
			})
		);
	}
}
