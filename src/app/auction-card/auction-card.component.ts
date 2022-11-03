import { Component, Input } from '@angular/core';
import { Room } from '../models/room';

@Component({
	selector: 'app-auction-card',
	templateUrl: './auction-card.component.html',
	styleUrls: ['./auction-card.component.css'],
})
export class AuctionCardComponent  {
	@Input() room: Room | undefined;

}
