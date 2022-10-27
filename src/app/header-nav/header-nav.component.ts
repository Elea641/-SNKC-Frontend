import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public createdSneakers: string = "Ajouter une paire";
  public collection: string = "Ma collection";
  public auctions: string = "Salle d'enchères";
  public favorite: string = "Mes favoris";
  public imgLogo: string ="imgLogo";
  public profile: string = "Gérer mon profil";
  public disconnect: string = "Déconnection";
  public search:string = "Rechercher";
  public isDisplayingSearchBar: boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.isDisplayingSearchBar = !this.isDisplayingSearchBar;
  }
}
