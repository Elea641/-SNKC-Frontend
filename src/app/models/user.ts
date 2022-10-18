export class User {
    constructor(
        public id: number, 
        public firstname: string, 
        public lastname: string, 
        public username: string,
        public email: string,
        public password: string,
        public shippingAddress: string,
        public shippingCity: String,
        public shippingZipCode: number,
        public shippingCountry: string, 
        public createDate: Date,
        public updateDate: Date,
        public avatar?: string,
        public billingAddress?: string,
        public billingCity?: string,
        public billingZipCode?: number,
        public billingCountry?: string, 
    ) {}
}
