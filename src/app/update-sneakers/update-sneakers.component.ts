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
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-update-sneakers',
  templateUrl: './update-sneakers.component.html',
  styleUrls: ['./update-sneakers.component.css']
})

export class UpdateSneakersComponent implements OnInit {
  
  public createdPreview$!: Observable <Sneakers>;
  public sneakersById: Sneakers | undefined;
  public stateOfWear: number | undefined;
  public mainColor: number | undefined;
  // pictures: Picture[] | undefined;
  public updateSneakersForm!: FormGroup;
  public stateOfWearType!: FormControl;
  public onValidation: boolean = true;
  public urlRegex!: RegExp;
  public sneakersByUserId: Sneakers[] | undefined;
  public states: Map<string, string>[];
  public colors: Map<string, string>[];
  // picturesForm: FormArray = new FormArray([
  // 	new FormControl(
  // 		null, [Validators.required, Validators.pattern(this.urlRegex)]
  // 		)
  // 	]
  // 	);
  
  
  constructor(
    private sneakersService: SneakersService,
    private route: ActivatedRoute,
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
    ) {
      this.states = StateOfWear as unknown as Map<string, string>[];
      this.colors = Colors as unknown as Map<string, string>[];
            
            }
            
            ngOnInit(): void {
              
              this.route.paramMap.subscribe((params: ParamMap)  => {
                const sneakersId = <string>params.get("id");
                this.sneakersService.getSneakersById(sneakersId).subscribe((reponse: Sneakers) => {
                  this.sneakersById = reponse;
                  
                  this.updateSneakersForm = this.formBuilder.group({
                    
                    brand: [this.sneakersById?.brand, [Validators.required]],
                    model: [this.sneakersById?.model, [Validators.required]],
                    size: [this.sneakersById?.size, [Validators.required]],
                    stateOfWear: [this.sneakersById?.stateOfWear, [Validators.required]],
                    mainColor: [this.sneakersById?.mainColor],
                    // pictures: this.pictures,
                    createdDate: new Date(),
                    id: this.sneakersByUserId,
                    updateDate: new Date(),
                    // follows: 0, 
                  },
                  {
                    updateOn: 'blur'
                  }
                  );
                  this.createdPreview$ = this.updateSneakersForm.valueChanges;
                })
              })
              
              this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
              
            }
            
            stateOfWearToString(stateOfWear: StateOfWear | undefined): string {
              return HelperService.stateOfWearToString(<StateOfWear> stateOfWear);
            }
            
            colorsToString(color: Colors): string {
              return HelperService.colorsToString(<Colors> color);
            }
            
            onSubmitUpdateForm(): void {
              const sneakers = <Sneakers>this.updateSneakersForm.getRawValue();

              this.route.paramMap.subscribe((params: ParamMap) => {
                this.userService.getConnectedUser().subscribe((reponse: User) => {
                  sneakers.user = reponse;
                  this.http.put<Sneakers>(`${environment.urlApi}sneakers/${this.sneakersById?.id}`, sneakers).subscribe((res: Sneakers) => {
                    this.router.navigate(['sneakers', res.id]);
                  });
                });
              });
            }
          }
