import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSearchItemCardComponent } from './ma-search-item-card.component';

describe('MaSearchItemCardComponent', () => {
  let component: MaSearchItemCardComponent;
  let fixture: ComponentFixture<MaSearchItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaSearchItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaSearchItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
