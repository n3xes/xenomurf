import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtJobAnimatorComponent } from './visual-art-job-animator.component';

describe('VisualArtJobAnimatorComponent', () => {
  let component: VisualArtJobAnimatorComponent;
  let fixture: ComponentFixture<VisualArtJobAnimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualArtJobAnimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualArtJobAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
