import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSectionTabsComponent } from './ma-section-tabs.component';

describe('MaSectionTabsComponent', () => {
  let component: MaSectionTabsComponent;
  let fixture: ComponentFixture<MaSectionTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSectionTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSectionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
