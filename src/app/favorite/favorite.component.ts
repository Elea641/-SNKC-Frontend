import { Component } from '@angular/core';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-favorite',
	templateUrl: './favorite.component.html',
	styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
	favoriteSneakers: Sneakers[] | undefined;

	constructor(
		private sneakersService: SneakersService,
		private UserService: UserService
	) {}

}
