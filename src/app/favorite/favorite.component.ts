import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteSneakers: Sneakers[] | undefined;

  constructor(private sneakersService: SneakersService, private UserService: UserService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const favorite = <string>params.get("id");
      this.sneakersService.get().subscribe((response: Sneakers []) => {
        this.favoriteSneakers = response;
        console.log(this.favoriteSneakers)
      });
    });
}
}
