import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardDetailedComponent } from './ma-image-card-detailed.component';

describe('MaImageCardDetailedComponent', () => {
  let component: MaImageCardDetailedComponent;
  let fixture: ComponentFixture<MaImageCardDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
