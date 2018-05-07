import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportForStudentComponent } from './report-for-student.component';

describe('ReportForStudentComponent', () => {
  let component: ReportForStudentComponent;
  let fixture: ComponentFixture<ReportForStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportForStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportForStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
