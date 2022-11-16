export class TokenContent {
    constructor(
		public id: number,
		public sub : string,
        public roles : string[],
        public iat : number,
        public exp : number
	) {}
}