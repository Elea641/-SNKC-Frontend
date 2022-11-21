import { Role } from '../interfaces/role';

export class User {
	public isAdmin!: boolean;
	constructor(
		public id: number,
		public firstname: string,
		public lastname: string,
		public username: string,
		public email: string,
		public password: string,
		public sneakers: number[],
		public createDate: Date,
		public updateDate: Date,
		public roles: Role[],
		public avatar?: string,
	) {}
}
