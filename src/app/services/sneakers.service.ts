import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class SneakersService {
	constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

	getSneakersById(id: string): Observable<Sneakers> {
		return this.http.get<Sneakers>(`${environment.urlApi}sneakers/${id}`).pipe(
			map((sneakers: Sneakers) => {
				sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
					'data:image/jpg;base64,' + sneakers.picture
				);
				return sneakers;
			})
		);
	}

	getAllSneakersByUserId(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers`).pipe(
			map((sneakersArray: Sneakers[]) => {
				sneakersArray = sneakersArray.map((sneakers: Sneakers) => {
					sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
						'data:image/jpg;base64,' + sneakers.picture
					);
					return sneakers;
				});
				return sneakersArray;
			})
		);
	}

	getSneakersForCurrentUser(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers/all`).pipe(
			map((sneakersArray: Sneakers[]) => {
				sneakersArray = sneakersArray.map((sneakers: Sneakers) => {
					sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
						'data:image/jpg;base64,' + sneakers.picture
					);
					return sneakers;
				});
				return sneakersArray;
			})
		);
	}


	getSneakersAll(): Observable<Sneakers[]> {
		return this.http.get<Sneakers[]>(`${environment.urlApi}sneakers/all`).pipe(
			map((sneakersArray: Sneakers[]) => {
				sneakersArray = sneakersArray.map((sneakers: Sneakers) => {
					sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
						'data:image/jpg;base64,' + sneakers.picture
					);
					return sneakers;
				});
				return sneakersArray;
			})
		);
	}

	postSneakersForCurrentUser(sneakers: Sneakers): Observable<Sneakers> {
		return this.http.post<Sneakers>(environment.urlApi, sneakers).pipe(
			map((sneakers: Sneakers) => {
				sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
					'data:' + sneakers.picture
				);
				return sneakers;
			})
		);
	}

	updateSneakers(sneakers: Sneakers, id: string): Observable<Sneakers> {
		return this.http
			.put<Sneakers>(`${environment.urlApi}sneakers/${id}`, sneakers)
			.pipe(
				map((sneakers: Sneakers) => {
					sneakers.pictureSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
						'data:' + sneakers.picture
					);
					return sneakers;
				})
			);
	}

	deleteSneakersById(id: string): Observable<Sneakers> {
		return this.http.delete<Sneakers>(`${environment.urlApi}sneakers/${id}`);
	}
}
