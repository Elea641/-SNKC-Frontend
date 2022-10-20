import { Room } from "./room";
import { User } from "./user";

export class Auction {
    constructor(
        public id: number,
        public winner: User,
        public room: Room,
        public offer: number,
        public date: Date,
        
    ) {}
}