import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[]=[];
  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getUsersById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/${id}`)

  }
}
