import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaStyleGuideComponent } from './ma-style-guide.component';

describe('MaStyleGuideComponent', () => {
  let component: MaStyleGuideComponent;
  let fixture: ComponentFixture<MaStyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaStyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
