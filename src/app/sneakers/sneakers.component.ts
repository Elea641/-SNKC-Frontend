import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

  sneakers$!: Observable<Sneakers>;
  sneakersId!: Sneakers;

  constructor(private sneakersService: SneakersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const sneakersId = this.route.snapshot.params["id"];
    this.sneakers$ = this.sneakersService.getSneakersById(sneakersId);
    this.sneakers$.subscribe((value) => {console.log(value);})
  }
}
