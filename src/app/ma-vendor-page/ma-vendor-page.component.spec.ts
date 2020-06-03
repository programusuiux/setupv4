import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaVendorPageComponent } from './ma-vendor-page.component';

describe('MaVendorPageComponent', () => {
  let component: MaVendorPageComponent;
  let fixture: ComponentFixture<MaVendorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaVendorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaVendorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
