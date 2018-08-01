import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtJobsComponent } from './visual-art-jobs.component';

describe('VisualArtJobsComponent', () => {
  let component: VisualArtJobsComponent;
  let fixture: ComponentFixture<VisualArtJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualArtJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualArtJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
