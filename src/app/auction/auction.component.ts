import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Auction } from '../models/auction';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';
import { Room } from '../models/room';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { HelperService } from '../services/helper.service';
import { RoomService } from '../services/room.service';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-auction',
	templateUrl: './auction.component.html',
	styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
	room: Room | undefined;
	roomId: string | undefined;
	auctions: Auction[] = [];
	currentUser: User | undefined;
	sneakers: Sneakers | undefined;
	bit = 0;
	maxOffer = 0;
	offers: number[] = [];
	showMsg = false;
	winner: User | undefined;

	constructor(
		private roomService: RoomService,
		private route: ActivatedRoute,
		private sneakerService: SneakersService,
		private userService: UserService,
		private router: Router,
		private _location: Location
	) {}

	public onSubmitAuction(): void {
		if (this.room?.initialPrice && this.offers.length === 0) {
			if (this.bit > this.room.initialPrice) {
				this.offers.unshift(this.bit);
				this.maxOffer = this.bit;
				this.showMsg = true;
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
				this.showMsg = true;
				const auction: Auction = new Auction(this.room?.id, this.bit);
				this.roomService
					.postAuction(auction)
					.subscribe((response: Auction) => this.auctions?.unshift(response));
			} else {
				throw new Error('L\' offre doit être supérieure à l\' offre en cours');
			}
		}
	}

	deleteRoom() {
		if (confirm('Are you sure to delete this room ?')) {
			this.roomService.deleteRoom(<string>this.roomId).subscribe((_) => {
				this.router.navigate(['/auction', this.room?.id, 'delete']);
			});
		}
	}

	ngOnInit(): void {
		this.userService
			.getConnectedUser()
			.subscribe((response: User) => (this.currentUser = response));
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.roomId = <string>params.get('id');
			this.roomService.getRoomById(this.roomId).subscribe((response: Room) => {
				this.room = response;
				this.sneakerService
					.getSneakersById(this.room.sneakersId.toString())
					.subscribe((res: Sneakers) => (this.sneakers = res));

				const now = new Date().getTime();
				const endDate = new Date(this.room.endDate).getTime();
				const distance = <number>endDate - now;

				setTimeout(() => {
					this.onAuctionEnd();
				}, distance);
			});

			this.roomService
				.getAuctionsbyRoomId(this.roomId)
				.subscribe((res: Auction[]) => {
					this.auctions = res;
					this.offers = this.auctions.map((auction: Auction) => auction.offer);
					this.maxOffer = Math.max(...this.offers);
				});
		});
	}

	public onAuctionEnd(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			const id = <string>params.get('id');
			this.roomService.getRoomById(<string> id).subscribe((res) => {
				this.room = res;
				this.userService
					.getUserById(<string>this.room.winnerId?.toString())
					.subscribe((response: User) => {
						this.winner = response;
					});
			});
		});
	}

	public stateOfWearToString(stateOfWear: StateOfWear | undefined): string {
		if (stateOfWear) {
			return HelperService.stateOfWearToString(<StateOfWear>stateOfWear);
		}
		return '';
	}

	public colorsToString(color: Colors | undefined): string {
		if (color) {
			return HelperService.colorsToString(<Colors>color);
		}
		return '';
	}

	backClicked() {
		this._location.back();
	}
}
