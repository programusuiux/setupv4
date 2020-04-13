import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaMenuComponent } from './ma-menu.component';

describe('MaMenuComponent', () => {
  let component: MaMenuComponent;
  let fixture: ComponentFixture<MaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
