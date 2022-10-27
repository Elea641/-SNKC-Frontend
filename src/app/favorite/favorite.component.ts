import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private sneakerService: SneakersService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const userId = <string>params.get("id");
    //   this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
    //     this.sneakersByUserId = response;
    //     console.log(this.sneakersByUserId)
    //   });
    // });
  }

}
