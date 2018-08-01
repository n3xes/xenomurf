import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtJobArtistEnvironmentComponent } from './visual-art-job-artist-environment.component';

describe('VisualArtJobArtistEnvironmentComponent', () => {
  let component: VisualArtJobArtistEnvironmentComponent;
  let fixture: ComponentFixture<VisualArtJobArtistEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualArtJobArtistEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualArtJobArtistEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
