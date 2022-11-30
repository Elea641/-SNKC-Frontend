import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	connected = false;

	ngOnInit(): void {

		if(sessionStorage.getItem('token') != null) {
			this.connected = true;
		}else{
			this.connected = false;
		}
	}
}
