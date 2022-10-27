import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  public sneakers: Sneakers[]=[];
  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getSneakersById(id: string): Observable<Sneakers> {
    return this.http.get<Sneakers>(`${this.baseUrl}sneakers/${id}`)
  }

  getAllSneakers(): Sneakers[]{
    return this.sneakers;
  }
}