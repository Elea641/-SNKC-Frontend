<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
=======
import { Component } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
>>>>>>> e3e34c769021d1806d31fa4ad71290ce455f3c0b

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
<<<<<<< HEAD

export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService) { 
    this.form = this.fb.group({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'roles': new FormControl(['user']),
    });
  }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    if (this.form.valid){
      this.authService.register(this.form.getRawValue()).subscribe(
        
      )
    }
  }
=======
export class RegisterComponent {
	public form: FormGroup;

	constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
		this.form = this.fb.group({
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
>>>>>>> e3e34c769021d1806d31fa4ad71290ce455f3c0b
}
