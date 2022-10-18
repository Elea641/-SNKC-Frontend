import { Room } from "./room";
import { User } from "./user";

export class RoomAttendees {
    constructor(
        public id: number,
        public user: User,
        public room: Room 
        
    ) {}
}