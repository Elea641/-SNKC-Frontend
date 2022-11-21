export class Room {
	constructor(
		public id: number,
		public ownerId: number,
		public sneakersId: number,
		public initialPrice: number,
		public startDate: Date,
		public endDate: Date,
		public attendeesId: number[],
		public winnerAuctionId?: number
	) {}
}
