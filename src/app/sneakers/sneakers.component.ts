import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';
import { Picture } from '../models/picture';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';


@Component({
	selector: 'app-sneakers',
	templateUrl: './sneakers.component.html',
	styleUrls: ['./sneakers.component.css'],
})

export class SneakersComponent implements OnInit {

	public sneakersById: Sneakers | undefined;
	public stateOfWear: number | undefined;
	public mainColor: number | undefined;
	public pictures: Picture[] | undefined;
	public id: string | undefined;


	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private helperService: HelperService,
		private authService: AuthService
		) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap)  => {
			this.id = <string>params.get('id');				
			this.sneakersService.getSneakersById(this.id).subscribe((reponse: Sneakers) => {
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

