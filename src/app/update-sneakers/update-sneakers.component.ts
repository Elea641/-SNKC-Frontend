import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Sneakers } from '../models/sneakers';
import { SneakersService } from '../services/sneakers.service';
import { HelperService } from '../services/helper.service';
import { Picture } from '../models/picture';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { StateOfWear } from '../models/enum/stateofwear';
import { Colors } from '../models/enum/colors';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-sneakers',
  templateUrl: './update-sneakers.component.html',
  styleUrls: ['./update-sneakers.component.css']
})

export class UpdateSneakersComponent implements OnInit {
  
  createdPreview$!: Observable <Sneakers>;
  sneakersById: Sneakers | undefined;
  stateOfWear: number | undefined;
  mainColor: number | undefined;
  pictures: Picture[] | undefined;
  updateSneakersForm!: FormGroup;
	stateOfWearType!: FormControl;
	onValidation: boolean = true;
	urlRegex!: RegExp;
	sneakersByUserId: Sneakers[] | undefined;
  states: number[];
	colors: number[];
	picturesForm: FormArray = new FormArray([
		new FormControl(
			null, [Validators.required, Validators.pattern(this.urlRegex)]
			)
		]
		);
  
  
  constructor(
    private sneakersService: SneakersService,
    private route: ActivatedRoute,
    private helperService: HelperService,
    private formBuilder: FormBuilder,
		private userService: UserService,
		private http: HttpClient,
		private router: Router
    ) {
      this.states = Object.keys(StateOfWear).filter(
        (stateOfWear: string) => parseInt(stateOfWear)).map(
          (key: string) => parseInt(key));
          
          this.colors = Object.keys(Colors).filter(
            (colors: string) => parseInt(colors)).map(
              (key: string) => parseInt(key));
    }
    
    ngOnInit(): void {
      
      this.route.paramMap.subscribe((params: ParamMap)  => {
        const sneakersId = <string>params.get("id");
        this.sneakersService.getSneakersById(sneakersId).subscribe((reponse: Sneakers) => {
          this.sneakersById = reponse;
          console.log(this.sneakersById)
        })
      })

      this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
								
      this.updateSneakersForm = this.formBuilder.group({
        
        brand: [null, [Validators.required]],
        model: [null, [Validators.required]],
        size: [null, [Validators.required]],
        stateOfWear: [null , [Validators.required, Validators.pattern(/[0-9]+/)]],
        dateOfPurchase: [null],
        mainColor: [null],
        pictures: this.pictures,
        createdDate: new Date(),
        id: this.sneakersByUserId,
        updateDate: new Date(),
        follows: 0, 
      },
      {
        updateOn: 'blur'
      }
      );

      this.createdPreview$ = this.updateSneakersForm.valueChanges;
    }
    
    stateOfWearToString(stateOfWear: number): string {
      return HelperService.stateOfWearToString(stateOfWear);
    }
    
    colorsToString(color: number): string {
      return HelperService.colorsToString(color);
    }

    onSubmitUpdateForm(): void {
      const sneakers = <Sneakers> this.updateSneakersForm.getRawValue();
      console.log(sneakers)
      this.route.paramMap.subscribe((params: ParamMap) => {
        const userId = <string>params.get("id");
        this.userService.getUserById(userId).subscribe((reponse: User) => {
          sneakers.user = reponse;
          this.http.post('http://localhost:3000/sneakers', sneakers).subscribe(res => {
          this.router.navigate(['/sneakers/:id']);
        });
      });
    });
  }
  }
