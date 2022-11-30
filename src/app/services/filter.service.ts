import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room';

@Injectable({
	providedIn: 'root',
})
export class filterservice {
	constructor(private http: HttpClient) {}

	filterRooms(params: HttpParams): Observable<Room[]> {
		return this.http.get<Room[]>(`${environment.urlApi}rooms/filter`, {
			params: params,
		});
	}
}
