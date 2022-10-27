import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    baseUrl: string = "http://localhost:3000/users";

    constructor(private http: HttpClient) { }

    getUserById(id: string): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`)
        }

  }

