import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Room } from '../models/room';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { RoomService } from '../services/room.service';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-auction-creation',
	templateUrl: './auction-creation.component.html',
	styleUrls: ['./auction-creation.component.css'],
})
export class AuctionCreationComponent implements OnInit {
	roomForm!: FormGroup;
	sneakersByUserId: Sneakers[] | undefined;
	selectedSneakers: Sneakers | undefined;

	constructor(
		private sneakersService: SneakersService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private userService: UserService,
		private router: Router,
		private roomService: RoomService
	) {}

	selectChangeHandler(event: Event ) {
		const selectedSneakersId = <string> (event.target as HTMLInputElement).value;
		this.sneakersService
			.getSneakersById(selectedSneakersId)
			.subscribe((response: Sneakers) => {
				this.selectedSneakers = response;
			});
	}

	onSubmitForm() {
		const room = this.roomForm.getRawValue();
		this.route.paramMap.subscribe((params: ParamMap) => {
			const userId = <string>params.get('id');
			this.userService.getUserById(userId).subscribe((response: User) => {
				room.owner = response;
				this.sneakersService
					.getSneakersById(room.sneakers)
					.subscribe((response: Sneakers) => {
						room.sneakers = response;
						this.roomService.postRoom(room).subscribe((res: Room) => {
							this.router.navigate(['/auction', res.id]);
						});
					});
			});
		});
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			const userId = <string>params.get('id');
			this.sneakersService
				.getAllSneakersByUserId(userId)
				.subscribe((response: Sneakers[]) => {
					this.sneakersByUserId = response;
				});
		});
		this.roomForm = this.formBuilder.group(
			{
				sneakers: [null, [Validators.required]],
				initialPrice: [null, [Validators.required]],
				endDate: [null, [Validators.required]],
			},
			{
				updatOn: 'blur',
			}
		);
	}
}
