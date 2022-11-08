import { Role } from "../interfaces/role";
import { Sneakers } from "./sneakers";

export class User {
    public isAdmin!: boolean;
    constructor(
        public id: number, 
        public firstname: string, 
        public lastname: string, 
        public username: string,
        public email: string,
        public password: string,
        public sneakers: Sneakers[],
        public sneakersFollowed: Sneakers[],
        public usersFollowed: User[],
        public shippingAddress: string,
        public shippingCity: string,
        public shippingZipCode: number,
        public shippingCountry: string, 
        public createDate: Date,
        public updateDate: Date,
        public roles: Role[],
        public avatar?: string,
        public billingAddress?: string,
        public billingCity?: string,
        public billingZipCode?: number,
        public billingCountry?: string,
    ) {}
}

