import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCarouselSecondaryComponent } from './ma-carousel-secondary.component';

describe('MaCarouselSecondaryComponent', () => {
  let component: MaCarouselSecondaryComponent;
  let fixture: ComponentFixture<MaCarouselSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCarouselSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCarouselSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
