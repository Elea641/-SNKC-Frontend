import { LoginResponse } from '../interfaces/login-response';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public form: FormGroup;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.form = this.fb.group({
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
			]),
		});
	}

	onLoginFormSubmit(): void {
		if (this.form.valid) {
			this.authService
				.signIn(this.form.getRawValue())
				.subscribe((response: LoginResponse) => {
					this.authService.setTokenToSession(
						response.accessToken,
						response.refreshToken
					);
					this.router.navigate(['dashboard']);
				});
		}
	}
}
