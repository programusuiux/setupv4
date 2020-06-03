import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCartBlockComponent } from './ma-cart-block.component';

describe('MaCartBlockComponent', () => {
  let component: MaCartBlockComponent;
  let fixture: ComponentFixture<MaCartBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCartBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCartBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
