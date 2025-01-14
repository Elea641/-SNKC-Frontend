import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
	public createdSneakers = 'Ajouter une paire';
	public collection = 'Ma collection';
	public auctions = 'Salle d\'enchères';
	public favorite = 'Mes favoris';
	public imgLogo = 'imgLogo';
	public profile = 'Gérer mon profil';
	public disconnect = 'Déconnexion';
	public search = 'Rechercher';
	public isDisplayingSearchBar = false;
	public id: string | undefined;
	public displayOverlay = false;
	public currentUser: User | undefined;

	public connected = false;

	constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

	ngOnInit(): void {
		if (sessionStorage.getItem('token') != null) {
			this.connected = true;
		}

		this.userService.getConnectedUser().subscribe((response: User) => this.currentUser = response);


	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['']).then(() => {
			window.location.reload();
		});
	}

	onMenuChange(event: Event): void {
		this.displayOverlay = (event.target as HTMLInputElement).checked;
	}

	onClickOnOverlay(): void {
		document.getElementById('menu__toggle')?.click();
	}
}
