import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardDescribedComponent } from './ma-image-card-described.component';

describe('MaImageCardDescribedComponent', () => {
  let component: MaImageCardDescribedComponent;
  let fixture: ComponentFixture<MaImageCardDescribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardDescribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardDescribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
