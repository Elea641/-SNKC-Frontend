import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  sneakers!: Sneakers[];
  
  constructor(private sneakersService: SneakersService) { }

  ngOnInit(): void {
    this.sneakers = this.sneakersService.getAllSneakers();
  }

}
