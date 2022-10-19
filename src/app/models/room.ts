import { Sneakers } from "./sneakers";
import { User } from "./user";

export class Room {
    constructor(
        public id: number,
        public owner: User,
        public sneakers: Sneakers,
        public initialPrice: number,
        public startDate: Date,
        public endDate : Date,
        public attendees: User[],
        public winnerAuction?: User,
    ) {}
}
