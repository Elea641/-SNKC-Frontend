import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})

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
}
