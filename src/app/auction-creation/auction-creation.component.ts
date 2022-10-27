import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auction-creation',
  templateUrl: './auction-creation.component.html',
  styleUrls: ['./auction-creation.component.css']
})

export class AuctionCreationComponent implements OnInit {

  roomForm!: FormGroup;
  sneakersByUserId: Sneakers[] | undefined;
  selectedSneakers: Sneakers | undefined;

  constructor(
    private sneakersService: SneakersService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient
  ) { }

  selectChangeHandler(event: any) {
    const selectedSneakersId = event.target.value;
    this.sneakersService.getSneakersById(selectedSneakersId).subscribe((response: Sneakers) => {
      this.selectedSneakers = response;
    })
  }

  onSubmitForm() {
    const room = this.roomForm.getRawValue();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const userId = <string>params.get("id");
      this.userService.getUserById(userId).subscribe((response: User) => {
        room.owner = response;
        this.sneakersService.getSneakersById(room.sneakers).subscribe((response: Sneakers) => {
          room.sneakers = response;
          this.http.post('http://localhost:3000/room', room).subscribe(res => {
            console.log(res);
          })
        });
      });
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const userId = <string>params.get("id");
      this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
        this.sneakersByUserId = response;
      });
    });
    this.roomForm = this.formBuilder.group({
      sneakers: [null],
      initialPrice: [null],
      endDate: [null]
    });
  }
}
