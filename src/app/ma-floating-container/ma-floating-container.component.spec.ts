import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaFloatingContainerComponent } from './ma-floating-container.component';

describe('MaFloatingContainerComponent', () => {
  let component: MaFloatingContainerComponent;
  let fixture: ComponentFixture<MaFloatingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaFloatingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaFloatingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
