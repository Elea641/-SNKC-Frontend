import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auction } from '../models/auction';
import { Room } from '../models/room';

@Injectable({
	providedIn: 'root',
})
export class RoomService {
	constructor(private http: HttpClient) {}

	getRoomById(id: string): Observable<Room> {
		return this.http.get<Room>(`${environment.urlApi}room/${id}`);
	}

	getAllRoomsByUserId(): Observable<Room[]> {
		return this.http.get<Room[]>(`${environment.urlApi}rooms`);
	}

	postRoom(room: Room): Observable<Room> {
		return this.http.post<Room>(`${environment.urlApi}rooms`, room);
	}

	updateRoom(room: Room, id: string): Observable<Room> {
		return this.http.put<Room>(`${environment.urlApi}room/${id}`, room);
	}

	deleteRoom(id: string): Observable<Room> {
		return this.http.delete<Room>(`${environment.urlApi}room/${id}`);
	}

	getAuctionsbyRoomId(id: string): Observable<Auction[]> {
		return this.http.get<Auction[]>(`${environment.urlApi}room/${id}/auctions`);
	}

	postAuction(auction: Auction): Observable<Auction> {
		return this.http.post<Auction>(`${environment.urlApi}auctions`, auction);
	}
}
