import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-sneakers-card',
  templateUrl: './sneakers-card.component.html',
  styleUrls: ['./sneakers-card.component.css']
})
export class SneakersCardComponent implements OnInit {

  sneakers: Sneakers | undefined;

  constructor(private sneakersService: SneakersService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {

     this.route.paramMap.subscribe((params: ParamMap) => {
      const sneakersId = <string> params.get("id");
      this.sneakersService.getSneakersById(sneakersId).subscribe((response: Sneakers) => {
        this.sneakers = response;
      });


    });
    

  

    
  }

}
