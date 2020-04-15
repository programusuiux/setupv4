import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSignUpPageComponent } from './ma-sign-up-page.component';

describe('MaSignUpPageComponent', () => {
  let component: MaSignUpPageComponent;
  let fixture: ComponentFixture<MaSignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSignUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
