import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorNotFoundComponent } from './app-error-not-found.component';

describe('AppErrorNotFoundComponent', () => {
  let component: AppErrorNotFoundComponent;
  let fixture: ComponentFixture<AppErrorNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppErrorNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppErrorNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
