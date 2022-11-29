import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

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
	public selectedFiles?: FileList;
	public picture?: File;
	public preview = '';
	public user: User | undefined


	public updateProfileForm!: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private authService: AuthService, 
				private userService: UserService) {

	}

	ngOnInit(): void {
		this.userService
		.getConnectedUser()
		.subscribe((response: User) => {
			this.user = response;
			this.initForm(<User>response)})
    }

	onSubmit(): void {
		if (this.updateProfileForm?.valid) {
			this.userService.updateMe(this.updateProfileForm.getRawValue()).subscribe(
				(user: User) => {
					this.initForm(user);
				}
			)
		}
	}

	private initForm(user: User): void {
		this.updateProfileForm = this.formBuilder.group({
			username: new FormControl(user?.username),
			email: new FormControl(user?.email, [Validators.required, Validators.email]),
			password: new FormControl(''),
		});
		this.displayForm = true;
	}

	public onSubmitNewPicture(event: any): void {
		this.preview = '';
		this.selectedFiles = event.target.files;

		if (this.selectedFiles) {
		  const file: File | null = this.selectedFiles.item(0);
	
		  if (file) {
			this.preview = '';
			this.picture = file;
	
			const reader = new FileReader();
	
			reader.onload = (e: any) => {
			  this.preview = e.target.result;
			};
			reader.readAsDataURL(this.picture);
		  }
		}
	}
}

