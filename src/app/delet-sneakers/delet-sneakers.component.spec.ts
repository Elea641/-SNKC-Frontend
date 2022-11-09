import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletSneakersComponent } from './delet-sneakers.component';

describe('DeletSneakersComponent', () => {
	let component: DeletSneakersComponent;
	let fixture: ComponentFixture<DeletSneakersComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ DeletSneakersComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(DeletSneakersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
