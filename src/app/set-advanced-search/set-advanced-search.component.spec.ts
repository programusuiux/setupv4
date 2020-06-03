import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdvancedSearchComponent } from './set-advanced-search.component';

describe('SetAdvancedSearchComponent', () => {
  let component: SetAdvancedSearchComponent;
  let fixture: ComponentFixture<SetAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAdvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
