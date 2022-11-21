import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SneakersService {
	constructor(private http: HttpClient) {}

	getSneakersById(id: string): Observable<Sneakers> {
		return this.http.get<Sneakers>(`${environment.urlApi}sneakers/${id}`);
	}

	getAllSneakersByUserId(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers`);
	}

	getSneakersAll(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers/all`);
	}

	postSneakersForCurrentUser(sneakers: Sneakers): Observable<Sneakers> {
		return this.http.post<Sneakers>(environment.urlApi, sneakers);
	}

	updateSneakers(sneakers: Sneakers, id: string): Observable<Sneakers> {
		return this.http.put<Sneakers>(`${environment.urlApi}sneakers/${id}`, sneakers);
	}

	deleteSneakersById(id: string): Observable<Sneakers> {
		return this.http.delete<Sneakers>(`${environment.urlApi}sneakers/${id}`);
	}

	// sneakersByIdLike(
	// 	id: string,
	// 	followType: 'Like' | 'DisLike'
	// ): Observable<Sneakers> {
	// 	return this.http.get<Sneakers>(environment.urlApi + id).pipe(
	// 		map((sneakers) => ({
	// 			...sneakers,
	// 			follows: sneakers.follows + (followType === 'Like' ? 1 : -1),
	// 		})),
	// 		switchMap((updateSneakers) =>
	// 			this.http.put<Sneakers>(environment.urlApi + id, updateSneakers)
	// 		)
	// 	);
	// }
}
