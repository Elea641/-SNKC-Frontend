import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
	selector: 'app-auctions',
	templateUrl: './auctions.component.html',
	styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
	usersRooms: Room[] = [];
	currentPage = 1;
	roomsPerPage = 4;

	constructor(private roomService: RoomService) {}

	ngOnInit(): void {
		this.roomService
			.getAllRoomsByUserId()
			.subscribe((response: Room[]) => (this.usersRooms = response));
	}
}
