import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSneakersComponent } from './update-sneakers.component';

describe('UpdateSneakersComponent', () => {
  let component: UpdateSneakersComponent;
  let fixture: ComponentFixture<UpdateSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSneakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
