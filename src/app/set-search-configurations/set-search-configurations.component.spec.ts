import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSearchConfigurationsComponent } from './set-search-configurations.component';

describe('SetSearchConfigurationsComponent', () => {
  let component: SetSearchConfigurationsComponent;
  let fixture: ComponentFixture<SetSearchConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSearchConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSearchConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
