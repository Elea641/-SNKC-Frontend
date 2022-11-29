import { Router } from '@angular/router';
import { RegisterRequest } from './../interfaces/register-request';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { User } from '../models/user';
import { UserService } from './user.service';
import jwtDecode from 'jwt-decode';
import { TokenContent } from '../models/tokenContent';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public currentUser: BehaviorSubject<User | undefined>;

	constructor(
		private http: HttpClient,
		private userService: UserService,
		private router: Router
	) {
		const token = sessionStorage.getItem('token');
		this.currentUser = new BehaviorSubject<User | undefined>(undefined);
		if (token) {
			this.userService.getConnectedUser().subscribe((user: User) => {
				this.currentUser.next(user);
			});
		}
	}

	public register(register: RegisterRequest): Observable<object> {
		return this.http.post(environment.urlApi + 'auth/signup', register);
	}

	public setTokenToSession(token: string, refreshToken: string): void {
		sessionStorage.setItem('token', token);
		sessionStorage.setItem('refreshToken', refreshToken);
	}

	public signIn(login: {
		email: string;
		password: string;
	}): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(
			environment.urlApi + 'auth/login',
			login
		);
	}

	public refreshToken(): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(
			environment.urlApi + 'auth/refreshtoken',
			{ refreshToken: sessionStorage.getItem('refreshToken') }
		);
	}

	public logout(): void {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('refreshToken');
		this.currentUser.next(undefined);
		this.router.navigate(['']);
	}

	public getCurrentUserId(): number {
		const tokenContent: TokenContent = jwtDecode(
			<string>sessionStorage.getItem('token')
		);
		return tokenContent.id;
	}

	public getCurrentUser(): void {
		this.userService.getConnectedUser().subscribe((user: User) => {
			this.currentUser.next(user);
		});
	}
}
