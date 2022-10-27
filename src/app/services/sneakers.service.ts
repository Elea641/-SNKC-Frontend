import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  baseUrl: string = "http://localhost:3000/sneakers";

  constructor(private http: HttpClient) { }

  getSneakersById(id: string): Observable<Sneakers> {
    return this.http.get<Sneakers>(`${this.baseUrl}/${id}`)
  }

  getAllSneakersByUserId(id: string): Observable<Sneakers[]> {
    return this.http.get<Sneakers[]>(`${this.baseUrl}?user.id=${id}`)
  }
}