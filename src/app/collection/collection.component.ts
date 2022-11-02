import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  sneakersByUserId: Sneakers[] | undefined;
  userById: Sneakers[] | undefined;
  
  constructor(private sneakersService: SneakersService,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      
      this.route.paramMap.subscribe((params: ParamMap) => {
        const userId = <string>params.get("id");
        this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
          this.sneakersByUserId = response;
        });
      });
    }
    
  }
