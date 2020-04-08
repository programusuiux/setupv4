import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageCardVerticleComponent } from './ma-image-card-verticle.component';

describe('MaImageCardVerticleComponent', () => {
  let component: MaImageCardVerticleComponent;
  let fixture: ComponentFixture<MaImageCardVerticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageCardVerticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageCardVerticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
