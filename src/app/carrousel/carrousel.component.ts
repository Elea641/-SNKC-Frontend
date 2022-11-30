import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { AuthService } from '../services/auth.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  public sneakers: Sneakers[] = [];

  constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private authService: AuthService){
		}

		ngOnInit(): void {
				this.sneakersService.getSneakersAll().subscribe((response: Sneakers[]) => {
					this.sneakers = response;
				});
			}
}
