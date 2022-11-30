import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-auction-card',
	templateUrl: './auction-card.component.html',
	styleUrls: ['./auction-card.component.css'],
})
export class AuctionCardComponent implements OnInit {
	@Input() room: Room | undefined;

	sneakers: Sneakers | undefined;
	roomClosed = false;

	constructor(private sneakersService: SneakersService) {}

	ngOnInit(): void {
		if (this.room) {
			this.sneakersService
				.getSneakersById(this.room.sneakersId.toString())
				.subscribe((response: Sneakers) => (this.sneakers = response));
			this.isClosed();
		}
	}

	public isClosed() {
		const now = new Date().getTime();
		const endDate = new Date(<Date>this.room?.endDate).getTime();
		if (now >= endDate) {
			this.roomClosed = true;
		}
		return this.roomClosed;
	}
}
