import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';
import { Picture } from '../models/picture';


@Component({
	selector: 'app-sneakers',
	templateUrl: './sneakers.component.html',
	styleUrls: ['./sneakers.component.css'],
})

export class SneakersComponent implements OnInit {


	sneakersById: Sneakers | undefined;
	stateOfWear: number | undefined;
	mainColor: number | undefined;
	pictures: Picture[] | undefined;


	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private helperService: HelperService) {}

	ngOnInit(): void {

		this.route.paramMap.subscribe((params: ParamMap)  => {
			const sneakersId = <string>params.get('id');				this.sneakersService.getSneakersById(sneakersId).subscribe((reponse: Sneakers) => {
				this.sneakersById = reponse;
			});
		});
	}

	stateOfWearToString(stateOfWear: number): string {
		return HelperService.stateOfWearToString(stateOfWear);
	}

	colorsToString(color: number): string {
		return HelperService.colorsToString(color);
	}

	deleteSneakers(id: string) {
		if(confirm('Are you sure to delete')){
			this.sneakersService.deleteSneakersById(id);
		}
	}
}

