import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { HelperService } from '../services/helper.service';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-created-sneakers',
	templateUrl: './created-sneakers.component.html',
	styleUrls: ['./created-sneakers.component.css'],
})
export class CreatedSneakersComponent implements OnInit {

	public sneakers: Sneakers[] = [];
	public createdSneakersForm!: FormGroup;
	public stateOfWearType!: FormControl;
	public createdPreview$!: Observable <Sneakers>;
	public onValidation = true;
	public urlRegex!: RegExp;
	public states: number[];
	public colors: number[];
	public sneakersByUserId: Sneakers[] | undefined;
	public pictures: FormArray = new FormArray([
		new FormControl(
			null, [Validators.required, Validators.pattern(this.urlRegex)]
		)
	]
	);
	public id: string | undefined;

	constructor(
			private formBuilder: FormBuilder,
			private route: ActivatedRoute,
			private userService: UserService,
			private http: HttpClient,
			private router: Router,
			private sneakersService: SneakersService,
			private authService: AuthService
	) {
		this.states = Object.keys(StateOfWear).filter(
			(stateOfWear: string) => parseInt(stateOfWear)).map(
			(key: string) => parseInt(key));

		this.colors = Object.keys(Colors).filter(
			(colors: string) => parseInt(colors)).map(
			(key: string) => parseInt(key));
	}

	ngOnInit(): void {

		this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

		this.createdSneakersForm = this.formBuilder.group({

			brand: [null, [Validators.required]],
			model: [null, [Validators.required]],
			size: [null, [Validators.required]],
			stateOfWear: [null , [Validators.required, Validators.pattern(/[0-9]+/)]],
			dateOfPurchase: [null],
			authentification: [null],
			mainColor: [null],
			pictures: this.pictures,
			createdDate: new Date(),
			id: 0,
			updateDate: new Date(),
			follows: 0,
		},
		{
			updateOn: 'blur'
		}
		);


		this.createdPreview$ = this.createdSneakersForm.valueChanges.pipe(
			map((formValue) => ({
				...formValue,
				id: 0,
				updateDate: new Date(),
				follows: 0,
				createdDate: new Date(),
			}))
		);
	}

	onSubmitForm(): void {
		const sneakers = <Sneakers> this.createdSneakersForm.getRawValue();
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.userService.getConnectedUser().subscribe((reponse: User) => {
				sneakers.user = reponse;
				this.http.post(environment.urlApi, sneakers).subscribe(res => {
					this.router.navigate(['sneakers', 'id']);
				});
			});
		});
	}
	
	stateOfWearToString(stateOfWear: number): string {
		return HelperService.stateOfWearToString(stateOfWear);
	}

	colorsToString(color: number): string {
		return HelperService.colorsToString(color);
	}
}
