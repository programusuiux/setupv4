import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSearchResultPageComponent } from './ma-search-result-page.component';

describe('MaSearchResultPageComponent', () => {
  let component: MaSearchResultPageComponent;
  let fixture: ComponentFixture<MaSearchResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSearchResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSearchResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
