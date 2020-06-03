import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductDetailsComponent } from './ma-product-details.component';

describe('MaProductDetailsComponent', () => {
  let component: MaProductDetailsComponent;
  let fixture: ComponentFixture<MaProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
