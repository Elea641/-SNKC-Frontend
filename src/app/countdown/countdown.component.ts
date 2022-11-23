import { Component, OnInit, Input } from '@angular/core';
@Component({
	selector: 'app-countdown',
	templateUrl: './countdown.component.html',
	styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
	@Input() endDate: Date | undefined;

	countDownDate: number | undefined;
	days = 0;
	hours = 0;
	minutes = 0;
	seconds = 0;
	message = '';

	ngOnInit(): void {
		this.countDownDate = new Date(<Date>this.endDate).getTime();
	}
	
	x = setInterval(() => {
		const now = new Date().getTime();
		const distance = <number>this.countDownDate - now;
		this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
		this. hours = Math.floor(
			(distance % (((1000 * 60) / 60) * 24)) / (1000 * 60 * 60)
		);
		this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if(distance < 0 ) {
			clearInterval(this.x);
			this.message = 'Le temps est écoulé';
		}
	});
}
