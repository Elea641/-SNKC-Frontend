import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedSneakersComponent } from './created-sneakers.component';

describe('CreatedSneakersComponent', () => {
  let component: CreatedSneakersComponent;
  let fixture: ComponentFixture<CreatedSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedSneakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
