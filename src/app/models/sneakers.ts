import { StateOfWear } from './enum/stateofwear';
import { Colors } from './enum/colors';

export class Sneakers {
	constructor(
		public id: number,
		public brand: string,
		public model: string,
		public size: number,
		public stateOfWear: StateOfWear,
		public createdDate: Date,
		public updateDate: Date,
		public user: number,
		public picture: Blob | string,
		public mainColor?: Colors,
		public userId?: number
	) {}
}
