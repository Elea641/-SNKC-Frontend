import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';
import { Picture } from '../models/picture';
import { AuthService } from '../services/auth.service';
import { StateOfWear } from '../models/enum/stateofwear';
import { Colors } from '../models/enum/colors';

@Component({
	selector: 'app-sneakers',
	templateUrl: './sneakers.component.html',
	styleUrls: ['./sneakers.component.css'],
})

export class SneakersComponent implements OnInit {
	
	public sneakersById: Sneakers | undefined;
	// public colors: Map<string, string>[];
	// public pictures: Picture[] | undefined;
	public id: string | undefined;
	public states: Map<string, string>[];
	public colors: Map<string, string>[];
	
	
	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private helperService: HelperService,
		private authService: AuthService,
		private router: Router
		) {
			this.states = StateOfWear as unknown as Map<string, string>[]; 
			this.colors = Colors as unknown as Map<string, string>[];
		}
		
		ngOnInit(): void {
			this.route.paramMap.subscribe((params: ParamMap)  => {
				this.id = <string>params.get('id');				
				this.sneakersService.getSneakersById(this.id).subscribe((reponse: Sneakers) => {
					this.sneakersById = reponse;
					console.log(this.sneakersById);
				});
			});
		}
		
		public stateOfWearToString(stateOfWear: string): string {
			return HelperService.stateOfWearToString(stateOfWear);
		}
		
		// colorsToString(color: number): string {
		// 	return HelperService.colorsToString(color);
		// }
		
		public deleteSneakers() {
			if(confirm('Are you sure to delete your sneakers?')){
					this.sneakersService.deleteSneakersById(<string> this.id).subscribe(
						_ => {
							this.router.navigate(['/delete']);
						}
					);
				}
				}
			}
		
		
