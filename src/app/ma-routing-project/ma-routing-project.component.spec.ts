import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaRoutingProjectComponent } from './ma-routing-project.component';

describe('MaRoutingProjectComponent', () => {
  let component: MaRoutingProjectComponent;
  let fixture: ComponentFixture<MaRoutingProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaRoutingProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaRoutingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
