import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Auction } from '../models/auction';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
	selector: 'app-auction',
	templateUrl: './auction.component.html',
	styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
	room: Room | undefined;
	auctions: Auction[] | undefined;
	bit = 0;
	maxOffer = 0;

	constructor(private roomService: RoomService, private route: ActivatedRoute) {}

	public onSubmitAuction(): void {

		if(this.room?.initialPrice && this.maxOffer == 0 ) {
			if(this.bit > this.room.initialPrice) {
				this.maxOffer = this.bit;
				//Créer auction
			} else {
				throw new Error('L\'offre doit être supérieure au prix de départ');

			}
		}
		if(this.maxOffer > 0) {
			if(this.bit > this.maxOffer) {
				this.maxOffer = this.bit;
				//Créer auction
			} else if(this.bit == this.maxOffer) {
				throw new Error('L\' offre doit être supérieure à l\' offre en cours');
			} else {
				throw new Error('L\' offre doit être supérieure à l\' offre en cours');
			}
		}
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			const roomId = <string>params.get('id');
			this.roomService
				.getRoomById(roomId)
				.subscribe((response: Room) => (this.room = response));
			this.roomService
				.getAuctionsbyRoomId(roomId)
				.subscribe((res: Auction[]) => (this.auctions = res));
		});
	}
}
