import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';
import { Picture } from '../models/picture';
import { AuthService } from '../services/auth.service';

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
		private authService: AuthService,
		private router: Router
		) {}
		
		ngOnInit(): void {
			this.route.paramMap.subscribe((params: ParamMap)  => {
				this.id = <string>params.get('id');				
				this.sneakersService.getSneakersById(this.id).subscribe((reponse: Sneakers) => {
					this.sneakersById = reponse;
					console.log(this.sneakersById);
				});
			});
		}
		
		// stateOfWearToString(stateOfWear: number): string {
		// 	return HelperService.stateOfWearToString(stateOfWear);
		// }
		
		// colorsToString(color: number): string {
		// 	return HelperService.colorsToString(color);
		// }
		
		deleteSneakers() {
			if(confirm('Are you sure to delete your sneakers?')){
					this.sneakersService.deleteSneakersById(<string> this.id).subscribe(
						_ => {
							this.router.navigate(['/delete']);
						}
					);
				}
				}
			}
		
		
