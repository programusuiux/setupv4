import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSelectReservationPopupComponent } from './ma-select-reservation-popup.component';

describe('MaSelectReservationPopupComponent', () => {
  let component: MaSelectReservationPopupComponent;
  let fixture: ComponentFixture<MaSelectReservationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSelectReservationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSelectReservationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
