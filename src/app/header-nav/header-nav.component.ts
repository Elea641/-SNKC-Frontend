/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent {
	public createdSneakers: string = 'Ajouter une paire';
	public collection: string = 'Ma collection';
	public auctions: string = 'Salle d\'enchères';
	public favorite: string = 'Mes favoris';
	public imgLogo: string = 'imgLogo';
	public profile: string = 'Gérer mon profil';
	public disconnect: string = 'Déconnection';
	public search: string = 'Rechercher';
	public isDisplayingSearchBar: boolean = false;
	public id: string | undefined;

	constructor(private authService: AuthService){
}

	onClick(): void {
		this.isDisplayingSearchBar = !this.isDisplayingSearchBar;
	}
}
