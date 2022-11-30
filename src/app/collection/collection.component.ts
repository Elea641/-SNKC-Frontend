import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
	public sneakers: Sneakers[] = [];
	public currentPage = 1;
	public sneakersPerPage = 9;

	constructor(
		private sneakersService: SneakersService,
	) {}

	ngOnInit(): void {
		this.sneakersService
			.getAllSneakersByUserId()
			.subscribe((response: Sneakers[]) => {
				this.sneakers = response;
			});
	}
}
