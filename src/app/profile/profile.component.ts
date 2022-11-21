import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

	public name: string = 'SABATIER';
	public firstname: string = 'Camille';
	public pseudo: string = 'Pépito 👐';


	public updateProfileForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService) {
		this.authService.currentUser.asObservable().subscribe(
			(user: User | undefined) => {
				this.initForm(<User>user);
			});

	}

	onSubmit(): void {
		console.log(this.updateProfileForm.valid);
		if (this.updateProfileForm.valid) {
			this.userService.updateMe(this.updateProfileForm.getRawValue()).subscribe(
				(user: User) => {
					this.initForm(user);
				}
			)
		}
	}

	private initForm(user: User): void {
		this.updateProfileForm = this.formBuilder.group({
			"email": new FormControl(user?.email, [Validators.required, Validators.email]),
			"password": new FormControl(''),
		})
	}
}

