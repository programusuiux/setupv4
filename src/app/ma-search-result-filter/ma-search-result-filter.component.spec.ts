import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSearchResultFilterComponent } from './ma-search-result-filter.component';

describe('MaSearchResultFilterComponent', () => {
  let component: MaSearchResultFilterComponent;
  let fixture: ComponentFixture<MaSearchResultFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSearchResultFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSearchResultFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
