import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
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
