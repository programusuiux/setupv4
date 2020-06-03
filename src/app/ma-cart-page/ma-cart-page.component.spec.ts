import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCartPageComponent } from './ma-cart-page.component';

describe('MaCartPageComponent', () => {
  let component: MaCartPageComponent;
  let fixture: ComponentFixture<MaCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
