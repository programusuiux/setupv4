import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaAllPopupsComponent } from './ma-all-popups.component';

describe('MaAllPopupsComponent', () => {
  let component: MaAllPopupsComponent;
  let fixture: ComponentFixture<MaAllPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaAllPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaAllPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
