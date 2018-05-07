import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAStudentComponent } from './report-a-student.component';

describe('ReportAStudentComponent', () => {
  let component: ReportAStudentComponent;
  let fixture: ComponentFixture<ReportAStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
