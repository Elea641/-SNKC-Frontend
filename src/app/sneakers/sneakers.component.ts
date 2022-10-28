import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

sneakersById: Sneakers | undefined;
stateOfWear: string | undefined;
mainColor: string | undefined;

  constructor(private sneakersService: SneakersService,
    private route: ActivatedRoute,
    private helperService: HelperService) {}
    
    ngOnInit(): void {
      
      this.route.paramMap.subscribe((params: ParamMap)  => {
        const sneakersId = <string>params.get("id");
        this.sneakersService.getSneakersById(sneakersId).subscribe((reponse: Sneakers) => {
          this.sneakersById = reponse;
          // this.stateOfWear = HelperService.numberToStateOfWear(this.sneakersById.stateOfWear);
          // this.mainColor = HelperService.numberToColor(this.sneakersById.mainColor);
          console.log(this.sneakersById)
       console.log(this.sneakersById.mainColor)
        })
      })
    }
}
