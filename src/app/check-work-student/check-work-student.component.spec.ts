import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWorkStudentComponent } from './check-work-student.component';

describe('CheckWorkStudentComponent', () => {
  let component: CheckWorkStudentComponent;
  let fixture: ComponentFixture<CheckWorkStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWorkStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWorkStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
