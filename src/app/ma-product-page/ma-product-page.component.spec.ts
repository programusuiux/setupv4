import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductPageComponent } from './ma-product-page.component';

describe('MaProductPageComponent', () => {
  let component: MaProductPageComponent;
  let fixture: ComponentFixture<MaProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
