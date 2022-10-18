import { Sneakers } from "./sneakers";
import { User } from "./user";

export class Follows {
    constructor(
        public id: number,
        public user: User,
        public sneakers: Sneakers,

    ) {}
}