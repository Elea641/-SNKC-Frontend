import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SneakersService {
	baseUrl = 'http://localhost:3000/sneakers';

	constructor(private http: HttpClient) {}

	getSneakersById(id: string): Observable<Sneakers> {
		return this.http.get<Sneakers>(environment.urlApi + id);
	}

	getAllSneakersByUserId(id: string): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(environment.urlApi + id);
	}

	get(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(environment.urlApi);
	}

	public deleteSneakersById(id: string): void {
		this.http.delete(environment.urlApi + id).subscribe();
	}

	// 	postSneakersCreated(id: string): Observable<Sneakers> {
	// 		return 	this.http.post(environment.urlApi, sneakers).subscribe(res => {
	// 			this.router.navigate(['/sneakers/:id']);

	// 	}
}
