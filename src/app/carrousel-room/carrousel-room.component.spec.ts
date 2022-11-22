import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoomComponent } from './carrousel-room.component';

describe('CarrouselRoomComponent', () => {
  let component: CarrouselRoomComponent;
  let fixture: ComponentFixture<CarrouselRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
