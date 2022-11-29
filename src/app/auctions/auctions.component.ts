import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
	selector: 'app-auctions',
	templateUrl: './auctions.component.html',
	styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
	openRooms: Room[] = [];
	closedRooms: Room[] = [];
	attendingOpenRooms: Room[] = [];
	currentPage = 1;
	roomsPerPage = 4;

	constructor(private roomService: RoomService) {}

	ngOnInit(): void {
		this.roomService
			.getOpenRoomsByUser()
			.subscribe((response: Room[]) => (this.openRooms = response));
		this.roomService
			.getClosedRoomsByUser()
			.subscribe((res: Room[]) => (this.closedRooms = res));
		this.roomService
			.getAttendingOpenRooms()
			.subscribe(
				(resAttendingOpenRooms: Room[]) =>
					(this.attendingOpenRooms = resAttendingOpenRooms)
			);
	}
}
