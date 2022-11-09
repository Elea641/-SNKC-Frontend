import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
	public form: FormGroup;

	constructor(private fb: FormBuilder,
	  private authService: AuthService) { 
	  this.form = this.fb.group({
		'email': new FormControl('', [Validators.required]),
		'password': new FormControl('', [Validators.required])
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
}
