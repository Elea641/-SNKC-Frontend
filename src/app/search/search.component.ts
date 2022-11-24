import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colors } from '../models/enum/colors';
import { StateOfWear } from '../models/enum/stateofwear';
import { Room } from '../models/room';
import { filterservice } from '../services/filter.service';
import { HelperService } from '../services/helper.service';
import { RoomService } from '../services/room.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	
	public brands: string[] = ["Nike", "Adidas", "Puma", "Converse", "Lacoste", "New Balance", "Reebook", ];
	public models: string[] = ["Air Force", "Dunk", "Air Jordan", "Air Max", "Gazelle", "Stan Smith", "Superstar" ]
	public sizes: number[] = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
	public rooms: Room[] = [];
	public states: Map<string, string>[];
	public colors: Map<string, string>[];
	public selectBrand: string | undefined;
	public selectModel: string | undefined;
	public selectSize: number | undefined;
	public selectStateOfWear: string | undefined;
	public selectMainColor: string | undefined;
	public searchForm!: FormGroup;
	
	constructor(private roomService: RoomService,
		private filterservice: filterservice,
		private helperservice: HelperService,
		private formBuilder: FormBuilder) { 
			this.states = StateOfWear as unknown as Map<string, string>[]; 
			this.colors = Colors as unknown as Map<string, string>[];
		}
		
		
		ngOnInit(): void {
			this.roomService.getRoomsAll().subscribe((response: Room[]) => {
				this.rooms = response;
			});
			
			this.searchForm = this.formBuilder.group(
				{
					brand: [null],
					model: [null],
					size: [null],
					stateOfWear: [null],
					mainColor: [null],
				}
				);
			}
			
			selectChangeBrand(event: Event) {
				this.selectBrand = (event.target as HTMLInputElement).value;
			}
			selectChangeModel(event: Event){
				this.selectModel = (event.target as HTMLInputElement).value;
			}
			
			selectChangeSize(event: Event){
				this.selectSize = +(event.target as HTMLInputElement).value;
			}
			
			selectChangeStateOfWear(event: Event){
				this.selectStateOfWear = HelperService.stringToStateOfWear((event.target as HTMLInputElement).value);
			}
			
			selectChangeMainColor(event: Event){
				this.selectMainColor = HelperService.stringToColors((event.target as HTMLInputElement).value);
			}
			
			onSubmitSearch(){
				const params = JSON.parse(JSON.stringify(this.searchForm.getRawValue(), (_, value) => value ?? undefined));

				this.filterservice.filterRooms(params).subscribe((rooms: Room[]) => {
					this.rooms = rooms;
				})
			}
		}
