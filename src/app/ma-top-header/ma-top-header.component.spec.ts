import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTopHeaderComponent } from './ma-top-header.component';

describe('MaTopHeaderComponent', () => {
  let component: MaTopHeaderComponent;
  let fixture: ComponentFixture<MaTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
