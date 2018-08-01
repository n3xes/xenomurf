import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSurvivingTheHolidaysComponent } from './game-surviving-the-holidays.component';

describe('GameSurvivingTheHolidaysComponent', () => {
  let component: GameSurvivingTheHolidaysComponent;
  let fixture: ComponentFixture<GameSurvivingTheHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSurvivingTheHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSurvivingTheHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
