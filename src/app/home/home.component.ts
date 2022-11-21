import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';

// import simpleParallax from 'simple-parallax-js';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {

	constructor(private authService: AuthService,
		private router: Router){}

	public logout() {
		this.authService.logout();
		this.router.navigate(['']);
	}

}
