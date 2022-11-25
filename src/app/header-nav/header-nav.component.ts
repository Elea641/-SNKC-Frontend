import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

	public connected = false;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {}

	ngOnInit(): void {
		if (sessionStorage.getItem('token') != null) {
			this.connected = true;
		}
	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['']);
	}

	onMenuChange(event: Event): void {
		this.displayOverlay = (event.target as HTMLInputElement).checked;
		console.log(this.displayOverlay)
	}

	onClickOnOverlay(): void {
		document.getElementById('menu__toggle')?.click();
	}
}
