import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

sneakersById: Sneakers | undefined;
 

  constructor(private sneakersService: SneakersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap)  => {
      const sneakersId = <string>params.get("id");
      this.sneakersService.getSneakersById(sneakersId).subscribe((reponse: Sneakers) => {
        this.sneakersById = reponse;
        console.log(this.sneakersById)
      })
    })

  
  }
}
