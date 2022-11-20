import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from '../models/room';
import { Sneakers } from '../models/sneakers';
import { RoomService } from '../services/room.service';
import { SneakersService } from '../services/sneakers.service';

@Component({
	selector: 'app-auction-creation',
	templateUrl: './auction-creation.component.html',
	styleUrls: ['./auction-creation.component.css'],
})
export class AuctionCreationComponent implements OnInit {
	roomForm!: FormGroup;
	sneakersByUserId: Sneakers[] | undefined;
	selectedSneakersId: string | undefined;

	constructor(
		private sneakersService: SneakersService,
		private formBuilder: FormBuilder,
		private router: Router,
		private roomService: RoomService
	) {}

	selectChangeHandler(event: Event) {
		this.selectedSneakersId = <string>(event.target as HTMLInputElement).value;
	}

	onSubmitForm() {
		const room = this.roomForm.getRawValue();
		this.roomService.postRoom(room).subscribe((response: Room) => {
			this.router.navigate(['/auction', response.id]);
		});
	}

	ngOnInit(): void {
		this.sneakersService
			.getSneakersForCurrentUser()
			.subscribe((response: Sneakers[]) => {
				this.sneakersByUserId = response;
			});

		this.roomForm = this.formBuilder.group(
			{
				sneakersId: [null, [Validators.required]],
				initialPrice: [null, [Validators.required]]
			},
			{
				updatOn: 'blur',
			}
		);
	}
}
