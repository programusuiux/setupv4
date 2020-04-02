import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLandingPageComponent } from './ma-landing-page.component';

describe('MaLandingPageComponent', () => {
  let component: MaLandingPageComponent;
  let fixture: ComponentFixture<MaLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
