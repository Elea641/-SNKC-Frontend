import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersCardComponent } from './sneakers-card.component';

describe('SneakersCardComponent', () => {
  let component: SneakersCardComponent;
  let fixture: ComponentFixture<SneakersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
