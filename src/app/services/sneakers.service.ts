import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SneakersService {
		
	constructor(private http: HttpClient) { }
	
	getSneakersById(id: string): Observable<Sneakers> {
		return this.http.get<Sneakers>(environment.urlApi + id);
	}
	
	getAllSneakersByUserId(id: string): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(environment.urlApi + id);
	}
	
	get(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(environment.urlApi);
	}
	
	deleteSneakersById(id: string): void{
		this.http.delete(environment.urlApi + id).subscribe();
	}
	
	sneakersByIdLike(id: string, followType: 'Like' | 'DisLike'): Observable<Sneakers> {
		return this.http.get<Sneakers>(environment.urlApi + id).pipe(
			map(sneakers =>({
				...sneakers,
				follows: sneakers.follows + (followType === 'Like' ? 1 : -1)
			})),
			switchMap(updateSneakers => this.http.put<Sneakers>(
				environment.urlApi + id, updateSneakers)
				));
			}
}
		
