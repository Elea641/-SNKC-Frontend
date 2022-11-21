import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Auction } from '../models/auction';
import { Room } from '../models/room';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { RoomService } from '../services/room.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-auction',
	templateUrl: './auction.component.html',
	styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
	room: Room | undefined;
	auctions: Auction[] = [];
	user: User | undefined;
	sneakers: Sneakers | undefined;
	bit = 0;
	maxOffer = 0;
	offers: number[] = [];
	showMsg = false;

	constructor(
		private roomService: RoomService,
		private route: ActivatedRoute,
		private sneakerService: SneakersService,
	) {}

	public onSubmitAuction(): void {
		if (this.room?.initialPrice && this.offers.length === 0) {
			if (this.bit > this.room.initialPrice) {
				this.offers.unshift(this.bit);
				this.maxOffer = this.bit;
				this.showMsg= true;
				const auction: Auction = new Auction(this.room.id, this.bit);
				this.roomService
					.postAuction(auction)
					.subscribe((response: Auction) => this.auctions?.unshift(response));
			} else {
				throw new Error('L\'offre doit être supérieure au prix de départ');
			}
		} else if (this.maxOffer > 0) {
			if (this.bit > Math.max(...this.offers)) {
				this.offers.unshift(this.bit);
				this.maxOffer = this.bit;
				this.showMsg= true;
				const auction: Auction = new Auction(this.room?.id, this.bit);
				this.roomService
					.postAuction(auction)
					.subscribe((response: Auction) => this.auctions?.unshift(response));
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
				.subscribe((response: Room) => {
					this.room = response;
					this.sneakerService.getSneakersById(this.room.sneakersId.toString())
						.subscribe((res: Sneakers) => (this.sneakers = res));
				});
			this.roomService.getAuctionsbyRoomId(roomId).subscribe((res: Auction[]) => {
				this.auctions = res;
				this.offers = this.auctions.map((auction: Auction) => auction.offer);
				this.maxOffer = Math.max(...this.offers);
			});
		});
	}
}
