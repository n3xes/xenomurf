import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtJobArtistCharacterComponent } from './visual-art-job-artist-character.component';

describe('VisualArtJobArtistCharacterComponent', () => {
  let component: VisualArtJobArtistCharacterComponent;
  let fixture: ComponentFixture<VisualArtJobArtistCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualArtJobArtistCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualArtJobArtistCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
