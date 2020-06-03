import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaAppDownloadComponent } from './ma-app-download.component';

describe('MaAppDownloadComponent', () => {
  let component: MaAppDownloadComponent;
  let fixture: ComponentFixture<MaAppDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaAppDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaAppDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
