import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/room';
import { AuthService } from '../services/auth.service';
import { RoomService } from '../services/room.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-carrousel-room',
  templateUrl: './carrousel-room.component.html',
  styleUrls: ['./carrousel-room.component.css']
})
export class CarrouselRoomComponent implements OnInit {

	public rooms: Room[] = [];

  constructor(
		private roomService: RoomService,
		private route: ActivatedRoute,
		private authService: AuthService){
		}

		ngOnInit(): void {
				this.roomService.getRoomsAll().subscribe((response: Room[]) => {
					this.rooms = response;
				});
			}

}
