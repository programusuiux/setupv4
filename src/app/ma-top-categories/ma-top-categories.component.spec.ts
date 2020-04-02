import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTopCategoriesComponent } from './ma-top-categories.component';

describe('MaTopCategoriesComponent', () => {
  let component: MaTopCategoriesComponent;
  let fixture: ComponentFixture<MaTopCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTopCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
