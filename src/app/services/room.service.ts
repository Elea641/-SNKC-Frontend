import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl: string = "http://localhost:3000/room";

  constructor(private http: HttpClient) {}

  getRoomById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  getAllRoomsByUserId(id: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/?user.id=${id}`);
  }

  postRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}`, room);
  }
}
