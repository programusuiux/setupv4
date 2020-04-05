import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCarouselComponent } from './ma-carousel.component';

describe('MaCarouselComponent', () => {
  let component: MaCarouselComponent;
  let fixture: ComponentFixture<MaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
