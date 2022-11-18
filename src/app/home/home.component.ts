import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	@ViewChild('paralax') paralaxRef!: ElementRef<HTMLDivElement>;
	public image = document.querySelector('#paralax') as HTMLDivElement | null;
	constructor() {
		if(this.image != null) {
			new simpleParallax(this.image, {
				overflow: true
			});
		}
	}
	ngOnInit() {
	};
}
