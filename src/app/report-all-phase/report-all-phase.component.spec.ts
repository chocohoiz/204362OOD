import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAllPhaseComponent } from './report-all-phase.component';

describe('ReportAllPhaseComponent', () => {
  let component: ReportAllPhaseComponent;
  let fixture: ComponentFixture<ReportAllPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAllPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAllPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
