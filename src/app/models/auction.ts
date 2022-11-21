export class Auction {
	public id: number| undefined;
	public userId: number | undefined;
	public roomId: number | undefined;
	public offer: number;
	public date: Date | undefined;

	constructor(roomId: number | undefined, offer: number) {
		this.roomId = roomId;
		this.offer = offer;
	}
}
