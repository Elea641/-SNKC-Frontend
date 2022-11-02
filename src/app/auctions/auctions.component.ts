import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  usersRooms: Room[] = [];
  currentPage: number = 1;
  roomsPerPage: number = 4;

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const userId = <string>params.get("id");
      this.roomService.getAllRoomsByUserId(userId).subscribe((response: Room[]) =>
        this.usersRooms = response);
    })
  }
}
