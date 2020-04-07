import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaVendorServicesComponent } from './ma-vendor-services.component';

describe('MaVendorServicesComponent', () => {
  let component: MaVendorServicesComponent;
  let fixture: ComponentFixture<MaVendorServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaVendorServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaVendorServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
