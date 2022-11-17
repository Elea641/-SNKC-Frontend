import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { AuthService } from '../services/auth.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
	
	public sneakers: Sneakers[] = [];
	public currentPage = 1;
	public sneakersPerPage = 10;
	
	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private authService: AuthService){
		}

		ngOnInit(): void {		
				this.sneakersService.getSneakersForCurrentUser().subscribe((response: Sneakers[]) => {
					this.sneakers = response;
				});
			}
		}
	