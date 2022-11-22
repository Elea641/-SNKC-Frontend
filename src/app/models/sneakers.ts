import { StateOfWear } from './enum/stateofwear';
import { Colors } from './enum/colors';
import { User } from './user';
import { SafeUrl } from '@angular/platform-browser';

export class Sneakers {
	public pictureSafeUrl!: SafeUrl;

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
		public mainColor?: Colors
	) {}
}
