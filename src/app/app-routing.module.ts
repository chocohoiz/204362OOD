import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { HeaderTeacherComponent } from './header-teacher/header-teacher.component';
import { ManagePhaseComponent } from './manage-phase/manage-phase.component';
import { SendWorkComponent } from './send-work/send-work.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { HistoryWorkComponent } from './history-work/history-work.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { CheckWorkComponent } from './check-work/check-work.component';
import { CheckWorkSubPhaseComponent } from './check-work-sub-phase/check-work-sub-phase.component';
import { CheckWorkStudentComponent } from './check-work-student/check-work-student.component';
import { ReportComponent } from './report/report.component';
import { ReportAStudentComponent } from './report-a-student/report-a-student.component';
import { ReportAllPhaseComponent } from './report-all-phase/report-all-phase.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReportForStudentComponent } from './report-for-student/report-for-student.component';



const routes: Routes = [
  {path: 'ManageStudent', component: ManageStudentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header-teacher', component: HeaderTeacherComponent},
  {path: 'ManagePhase', component: ManagePhaseComponent},
  {path: 'sendWork', component: SendWorkComponent},
  {path: 'ManageTeacher', component: ManageTeacherComponent},
  {path: 'addProject', component: AddProjectComponent},
  {path: 'historyWork', component: HistoryWorkComponent},
  {path: 'formUpload', component: FormUploadComponent},
  {path: 'checkWork', component: CheckWorkComponent},
  {path: 'checkWorkSubPhase', component: CheckWorkSubPhaseComponent},
  {path: 'checkWorkStudent', component: CheckWorkStudentComponent},
  {path: 'report', component: ReportComponent},
  {path: 'report-student', component: ReportAStudentComponent},
  {path: 'report-all-phase', component: ReportAllPhaseComponent},
  {path: 'ManageAdmin', component: ManageAdminComponent},
  {path: 'Project-List', component: ProjectListComponent},
  {path: 'student-report', component: ReportForStudentComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
