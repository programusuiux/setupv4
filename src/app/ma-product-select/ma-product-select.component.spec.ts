import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaProductSelectComponent } from './ma-product-select.component';

describe('MaProductSelectComponent', () => {
  let component: MaProductSelectComponent;
  let fixture: ComponentFixture<MaProductSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaProductSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaProductSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
