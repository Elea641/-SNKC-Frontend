import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteSneakersById: Sneakers | undefined;


  constructor(private sneakersService: SneakersService, private UserService: UserService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const userId = <string>params.get("id");
      this.sneakersService.getSneakersById(userId).subscribe((response: Sneakers) => {
        this.favoriteSneakersById = response;
        console.log(this.favoriteSneakersById)
      });
    });
  }
}
