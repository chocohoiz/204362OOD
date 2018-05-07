import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { FirebaseService } from './service/firebase-service.service';
import { HeaderTeacherComponent } from './header-teacher/header-teacher.component';
import { ManagePhaseComponent } from './manage-phase/manage-phase.component';
import { SendWorkComponent } from './send-work/send-work.component';
import { HeaderStudentComponent } from './header-student/header-student.component';
import { LoginService } from './service/login-service.service';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { HistoryWorkComponent } from './history-work/history-work.component';
import { UploadComponent } from './upload/upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { UploadFileService } from './service/upload-file.service';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { CheckWorkComponent } from './check-work/check-work.component';
import { CheckWorkSubPhaseComponent } from './check-work-sub-phase/check-work-sub-phase.component';
import { CheckWorkStudentComponent } from './check-work-student/check-work-student.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReportComponent } from './report/report.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import Charts from 'chart.js';
import { ReportAllPhaseComponent } from './report-all-phase/report-all-phase.component';
import { ReportAStudentComponent } from './report-a-student/report-a-student.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                 //api
import {ChartModule} from 'primeng/chart';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReportForStudentComponent } from './report-for-student/report-for-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageStudentComponent,
    HeaderTeacherComponent,
    ManagePhaseComponent,
    SendWorkComponent,
    HeaderStudentComponent,
    ManageTeacherComponent,
    AddProjectComponent,
    HistoryWorkComponent,
    UploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    CheckWorkComponent,
    CheckWorkSubPhaseComponent,
    CheckWorkStudentComponent,
    ReportComponent,
    ReportAllPhaseComponent,
    ReportAStudentComponent,
    MenuManageComponent,
    ProfileStudentComponent,
    ManageAdminComponent,
    HeaderAdminComponent,
    ProjectListComponent,
    ReportForStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    PdfViewerModule,
    ChartsModule,
    ChartModule,
    AccordionModule
  ],
  providers: [FirebaseService,LoginService,UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
