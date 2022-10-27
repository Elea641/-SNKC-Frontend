import { Component, Input, OnInit } from '@angular/core';
import { Sneakers } from '../models/sneakers';

@Component({
  selector: 'app-sneakers-card',
  templateUrl: './sneakers-card.component.html',
  styleUrls: ['./sneakers-card.component.css']
})
export class SneakersCardComponent implements OnInit {
  
  @Input() sneakers: Sneakers | undefined;
  
  constructor() {
  }
  
  ngOnInit(): void {
    
  }
}
