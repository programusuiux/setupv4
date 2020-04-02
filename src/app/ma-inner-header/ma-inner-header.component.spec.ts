import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaInnerHeaderComponent } from './ma-inner-header.component';

describe('MaInnerHeaderComponent', () => {
  let component: MaInnerHeaderComponent;
  let fixture: ComponentFixture<MaInnerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaInnerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaInnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
