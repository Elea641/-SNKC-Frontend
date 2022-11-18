import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-like',
	templateUrl: './like.component.html',
	styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
	public likeButtonLabel = '';
	public follows = 0;
	public sneaker!: Observable<Sneakers>;
	@Input()
	public sneakerId!: string;
	
	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute
		){}
		
		ngOnInit(): void {
			this.likeButtonLabel = 'Like';
			this.sneaker = this.sneakersService.getSneakersById(this.sneakerId);
		}
		
		// onLike(): void {
		// 	if (this.likeButtonLabel === 'Like') {
		// 		this.sneakersService.sneakersByIdLike(this.sneakerId, 'Like').pipe(
		// 			tap(() => {
		// 				this.sneaker = this.sneakersService.getSneakersById(this.sneakerId);
		// 				this.likeButtonLabel = 'Dislike';
		// 			})
		// 			);
		// 		} else {
		// 			this.sneakersService.sneakersByIdLike(this.sneakerId, 'DisLike').pipe(
		// 				tap(() => {
		// 					this.sneaker = this.sneakersService.getSneakersById(this.sneakerId);
		// 					this.likeButtonLabel = 'Like';
		// 				})
		// 				);
		// 			}
		// 		}
			}
