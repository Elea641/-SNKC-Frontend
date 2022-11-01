import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';
import { Sneakers } from '../models/sneakers';
import { User } from '../models/user';
import { HelperService } from '../services/helper.service';
import { SneakersService } from '../services/sneakers.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-created-sneakers',
  templateUrl: './created-sneakers.component.html',
  styleUrls: ['./created-sneakers.component.css']
})

export class CreatedSneakersComponent implements OnInit {

  createdSneakersForm! : FormGroup;
  stateOfWearType! : FormControl;
  createdPreview$!: Observable <Sneakers>;
  onValidation: boolean = true;
  urlRegex!: RegExp;
  states: string[];
  colors: string[];
  sneakersByUserId: Sneakers[] | undefined;




constructor(private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private userService: UserService,
  private http: HttpClient,
  private router: Router,
  private sneakersService: SneakersService
  ) {
    this.states = Object.keys(StateOfWear).filter(
      (stateOfWear: string) => parseInt(stateOfWear)).map(
        (stateOfWear: string) => {
          return HelperService.stateOfWearToString(<StateOfWear> parseInt(stateOfWear));
        });

    this.colors = Object.keys(Colors).filter(
      (colors: string) => parseInt(colors)).map(
        (colors: string) => {
          return HelperService.colorsToString(<Colors> parseInt(colors));
            });
          }

      ngOnInit(): void {

        this.route.paramMap.subscribe((params: ParamMap) => {
          const userId = <string>params.get("id");
          this.sneakersService.getAllSneakersByUserId(userId).subscribe((response: Sneakers[]) => {
            this.sneakersByUserId = response;
          });
        });

      this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

      this.createdSneakersForm = this.formBuilder.group({
        pictures: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        brand: [null, [Validators.required]],
        model: [null, [Validators.required]],
        size: [null, [Validators.required]],
        stateOfWear: [null , [Validators.required]],
        dateOfPurchase: [null],
        authentification: [null],
        mainColor: [null],
      }, {
        updateOn: 'blur'
      }
      );

  this.createdPreview$ = this.createdSneakersForm.valueChanges.pipe(
    map(formValue => ({
      ...formValue,
     id: 0,
     updateDate: new Date(),
     follows: 0,
     createdDate: new Date(),
  }))
   );

   }
   onSubmitForm(): void {
    const sneakers = <Sneakers> this.createdSneakersForm.getRawValue();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const userId = <string>params.get("id");
      this.userService.getUserById(userId).subscribe((reponse: User) => {
        sneakers.user = reponse;
        this.http.post('http://localhost:3000/sneakers', sneakers).subscribe(res => {
        console.log(JSON.stringify(res));
      });
    });
  });
  this.router.navigate(['/sneakers/:id'])
}

  getStateOfWearValue(state: string): StateOfWear {
    return HelperService.stringToStateOfWear(state);
  }

  getStateOfWearValuePreview(stateOfWear: string): string {
    return HelperService.stateOfWearToString(parseInt(stateOfWear));
  }

  getColorsValue(color: string): Colors {
    return HelperService.stringToColors(color);
  }

  getColorsValuePreview(color: string): string {
    return HelperService.colorsToString(parseInt(color));
  }

}

