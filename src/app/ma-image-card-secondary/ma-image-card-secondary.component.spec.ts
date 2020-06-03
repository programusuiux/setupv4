import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardSecondaryComponent } from './ma-image-card-secondary.component';

describe('MaImageCardSecondaryComponent', () => {
  let component: MaImageCardSecondaryComponent;
  let fixture: ComponentFixture<MaImageCardSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
