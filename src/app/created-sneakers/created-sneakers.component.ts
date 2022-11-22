import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
	public createdPreview$!: Observable<Sneakers>;
	public onValidation = true;
	public urlRegex!: RegExp;
	public states: Map<string, string>[];
	public colors: Map<string, string>[];

	public sneakersByUserId: Sneakers[] | undefined;
	public picture: File | null | undefined;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private userService: UserService,
		private http: HttpClient,
		private router: Router,
		private sneakersService: SneakersService,
		private authService: AuthService
	) {
		this.states = StateOfWear as unknown as Map<string, string>[];
		this.colors = Colors as unknown as Map<string, string>[];
	}

	ngOnInit(): void {
		this.urlRegex =
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

		this.createdSneakersForm = this.formBuilder.group(
			{
				picture: [null, [Validators.required]],
				brand: [null, [Validators.required]],
				model: [null, [Validators.required]],
				size: [null, [Validators.required]],
				stateOfWear: [null, [Validators.required]],
				mainColor: [null],
			},
			{
				updateOn: 'blur',
			}
		);

		this.createdPreview$ = this.createdSneakersForm.valueChanges.pipe(
			map((formValue) => ({
				...formValue,
			}))
		);
	}

	public onSubmitForm(): void {
		const sneakers = <Sneakers>this.createdSneakersForm.getRawValue();
		this.userService.getConnectedUser().subscribe((reponse: User) => {
			sneakers.user = reponse.id;
			this.picture?.arrayBuffer().then((result: ArrayBuffer) => {
				const reader: FileReader | null = new FileReader();
				reader.readAsDataURL(
					new Blob([new Uint8Array(result)], { type: 'image/*' })
				);
				reader.onloadend = () => {
					sneakers.picture = <string> reader?.result?.toString();
					this.http
						.post<Sneakers>(environment.urlApi + 'sneakers', sneakers)
						.subscribe((res: Sneakers) => {
							this.router.navigate(['sneakers', res.id]);
						});
				};
			});
		});
	}

	public stateOfWearToString(stateOfWear: StateOfWear | undefined): string {
		if (stateOfWear) {
			return HelperService.stateOfWearToString(<StateOfWear>stateOfWear);
		}
		return '';
	}

	public colorsToString(color: Colors | undefined): string {
		if (color) {
			return HelperService.colorsToString(<Colors>color);
		}
		return '';
	}

	public onSubmitNewPicture(event: Event): void {
		this.picture = (event.target as HTMLInputElement).files?.item(0);
	}
}
