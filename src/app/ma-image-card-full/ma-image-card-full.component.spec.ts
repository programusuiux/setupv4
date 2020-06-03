import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardFullComponent } from './ma-image-card-full.component';

describe('MaImageCardFullComponent', () => {
  let component: MaImageCardFullComponent;
  let fixture: ComponentFixture<MaImageCardFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
