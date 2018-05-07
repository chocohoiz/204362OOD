import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWorkSubPhaseComponent } from './check-work-sub-phase.component';

describe('CheckWorkSubPhaseComponent', () => {
  let component: CheckWorkSubPhaseComponent;
  let fixture: ComponentFixture<CheckWorkSubPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWorkSubPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWorkSubPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
