import {Component, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
	public form: FormGroup;

	constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
		this.form = this.fb.group({
			username: new FormControl('',[Validators.required]),
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
			roles: new FormControl(['user']),
		});
	}

	onRegisterSubmit() {
		if (this.form.valid) {
			this.authService.register(this.form.getRawValue()).subscribe(
				_ => {
					this.router.navigate(['login']);
				},
				(error: Error) => {
					console.log(error);
				}
			);
		}
	}
}
