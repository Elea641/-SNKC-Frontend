import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
	
	public sneakersByUserId: Sneakers[] = [];
	public currentPage = 1;
	public sneakersPerPage = 10;
	public id: string | undefined;
	
	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private authService: AuthService){
			this.authService.currentUser.subscribe((user: User | undefined) => {
				this.id = user?.id.toString();
			});}

		
		
		ngOnInit(): void {
			// this.route.paramMap.subscribe((params: ParamMap) => {
			// 	const userId = <string>params.get("id");
			// 	this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
			// 		this.sneakersByUserId = response;
			// 	});
			// });
			this.route.paramMap.subscribe((params: ParamMap) => {
				const userId = <string>params.get("id");
				this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
					this.sneakersByUserId = response;
				});
			});
		
		}
		
	}