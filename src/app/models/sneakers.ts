import { StateOfWear } from "./enum/stateofwear";
import { Colors } from "./enum/colors";
import { User } from "./user";

export class Sneakers {
    constructor(
        public id: number,
        public brand: string,
        public model: string, 
        public size: number,
        public stateOfWear: StateOfWear,
        public createdDate: Date,
        public updateDate: Date,
        public user: User,
        public dateOfPurchase?: Date,
        public mainColor?: Colors,
        public authentification?: boolean,
    ) {}
}
