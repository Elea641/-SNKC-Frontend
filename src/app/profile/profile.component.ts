import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

	public name: string = 'SABATIER';
	public firstname: string = 'Camille';
	public pseudo: string = 'Pépito 👐';
	public displayForm = false;
	public user!: User;
	public updateProfileForm!: FormGroup;
	public img: string = "assets/profil-vide.png";
	public picture?: File;

	constructor(private formBuilder: FormBuilder,
				private authService: AuthService, 
				private userService: UserService,
				private http: HttpClient,
				private router: Router) {
		this.authService.currentUser.subscribe(
			(user: User | undefined) => {
				if (user) {
					this.user = <User> this.authService.currentUser.getValue();
					this.initForm(this.user);
				}
			}
		)
	}

	ngOnInit(): void {
	
    }

	onSubmit(): void {
		if (this.updateProfileForm?.valid) {
			this.userService.updateMe(this.user).subscribe((userEdited: User) => {
				this.initForm(userEdited);
			});
		}
	}

	private initForm(user: User): void {
		this.updateProfileForm = this.formBuilder.group({
			username: new FormControl(user.username),
			email: new FormControl(user.email, [Validators.required, Validators.email]),
			password: new FormControl(''),
			picture: new FormControl(user.picture),
		});
		this.displayForm = true;
	}

	public selectFile(event: any): void {
		if (event.target.files) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = (event: any) => {;
				this.img = event.target.result;
				this.user.picture = event.target.result;
			}
		}
	}
}

