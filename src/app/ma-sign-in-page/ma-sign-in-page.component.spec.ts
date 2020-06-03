import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSignInPageComponent } from './ma-sign-in-page.component';

describe('MaSignInPageComponent', () => {
  let component: MaSignInPageComponent;
  let fixture: ComponentFixture<MaSignInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSignInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
