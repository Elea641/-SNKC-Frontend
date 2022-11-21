import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuctionComponent } from './delete-auction.component';

describe('DeleteAuctionComponent', () => {
  let component: DeleteAuctionComponent;
  let fixture: ComponentFixture<DeleteAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAuctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
