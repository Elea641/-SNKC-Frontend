import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl: string = "http://localhost:3000/room";

  constructor(private http: HttpClient) { }
  getRoomById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`)
  }

  getAllRoomsByUserId(id: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/?owner.id=${id}`)
  }
}
