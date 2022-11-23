import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent {
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

	constructor(private authService: AuthService, private router: Router) {}

	onClick(): void {
		this.isDisplayingSearchBar = !this.isDisplayingSearchBar;
	}
	public logout() {
		this.authService.logout();
		this.router.navigate(['']);
	}
}
