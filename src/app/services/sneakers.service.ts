import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class SneakersService {
	constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

	getSneakersById(id: string): Observable<Sneakers> {
		return this.http.get<Sneakers>(`${environment.urlApi}sneakers/${id}`);
	}

	getAllSneakersByUserId(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers`);
	}

	getSneakersForCurrentUser(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers/all`);
	}


	getSneakersAll(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers/all`);
	}

	postSneakersForCurrentUser(sneakers: Sneakers): Observable<Sneakers> {
		return this.http.post<Sneakers>(environment.urlApi, sneakers);
	}

	updateSneakers(sneakers: Sneakers, id: string): Observable<Sneakers> {
		return this.http
			.put<Sneakers>(`${environment.urlApi}sneakers/${id}`, sneakers);
	}

	deleteSneakersById(id: string): Observable<Sneakers> {
		return this.http.delete<Sneakers>(`${environment.urlApi}sneakers/${id}`);
	}
}
