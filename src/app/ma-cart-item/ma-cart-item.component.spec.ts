import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCartItemComponent } from './ma-cart-item.component';

describe('MaCartItemComponent', () => {
  let component: MaCartItemComponent;
  let fixture: ComponentFixture<MaCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
