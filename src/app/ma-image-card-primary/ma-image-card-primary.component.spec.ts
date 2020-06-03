import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardPrimaryComponent } from './ma-image-card-primary.component';

describe('MaImageCardPrimaryComponent', () => {
  let component: MaImageCardPrimaryComponent;
  let fixture: ComponentFixture<MaImageCardPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
