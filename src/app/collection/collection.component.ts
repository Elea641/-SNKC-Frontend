import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  sneakers!: Sneakers[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
