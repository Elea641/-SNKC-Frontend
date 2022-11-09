import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction';
import { Room } from '../models/room';

@Injectable({
	providedIn: 'root',
})
export class RoomService {
	baseUrl = 'http://localhost:3000/room';

	constructor(private http: HttpClient) {}

	getRoomById(id: string): Observable<Room> {
		return this.http.get<Room>(`${this.baseUrl}/${id}`);
	}

	getAllRoomsByUserId(id: string): Observable<Room[]> {
		return this.http.get<Room[]>(`${this.baseUrl}/?owner.id=${id}`);
	}

	postRoom(room: Room): Observable<Room> {
		return this.http.post<Room>(`${this.baseUrl}`, room);
	}

	getAuctionsbyRoomId(id: string): Observable<Auction[]> {
		return this.http.get<Auction[]>(`${this.baseUrl}/${id}/auction`);
	}
}
