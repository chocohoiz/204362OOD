import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import { UploadFileService } from "../service/upload-file.service";
import { FileUpload } from "./fileupload";
// import * as fs from 'fs';
import swal from 'sweetalert2'

// import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: "app-check-work-student",
  templateUrl: "./check-work-student.component.html",
  styleUrls: ["./check-work-student.component.css"]
})
export class CheckWorkStudentComponent implements OnInit {
  pdfSrc: string = '';
  page: number = 1;

  wikiList: any;
  // allkey: FirebaseListObservable<any[]>;

  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  teacherList: any;
  projectList: any;

  statusArr = [];
  phaseArr = [];
  subphaseArr = [];
  studentArr = [];
  select_stuArr = [];
  projectArr = [];

  myPJ_name_th: any;
  myPJ_name_en: any;

  tmpArr = [];

  testtest: any;
  temp: any;

  clicked: false;
  isClass1Visible: false;
  isClass2Visible: false;

  selectedPhase = "";
  selectedSubPhase = "";
  selectedStudent = "";
  selectedAllPhase = "";

  comment_teacher = "-";
  result = 'yes';

  stu_name: any;
  sp_name: any;
  url_name: any;
  ment_teacher: any;
  ment_student: any;

  status_key: any;
  stu_key: any;

  student_pj_id: any;

  startDate: Date;
  startDate1: Date;

  fileUploads: FirebaseListObservable<FileUpload[]>;
  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {}

  ngOnInit() {
    const key1 = localStorage.getItem("key");
    const selectedPhase = localStorage.getItem("Phase");
    const selectedSubPhase = localStorage.getItem("SubPhase");
    this.selectedAllPhase = selectedPhase + selectedSubPhase;
    const selectedStudent = localStorage.getItem("Student");

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.teacherList = this.firebaseService.getData("/teacher");
    this.projectList = this.firebaseService.getData("/project");

    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {
        this.subphaseArr.push(element);
      });
    });

    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        if(element.key == selectedStudent){
          this.studentArr.push(element);
          this.stu_key = element.key;
          this.stu_name = element.student_name;
          this.student_pj_id = element.project_id;
          console.log("pjid"+this.student_pj_id);
        }
      });
    });

    this.projectList.forEach(element1 => {
      element1.forEach(element => {
        if (this.student_pj_id == element.key){
          this.myPJ_name_th = element.name_th;
          this.myPJ_name_en = element.name_en;
        }
      });
    });


    var keepGoing = true;
    this.statusList.forEach(element1 => {
        element1.forEach(element => {
          keepGoing = false;
          let Phase_id = element.key[4] + element.key[5]+element.key[6] + element.key[7];
          let SubPhase_id = element.key[6] + element.key[7];
          let my_pj_id = element.key[0] + element.key[1] + element.key[2];

          if (this.student_pj_id == my_pj_id) {
            this.subphaseArr.length == 1;
            for (var i = 0; i < this.subphaseArr.length; i++) {
                if(Phase_id == this.subphaseArr[i].key && my_pj_id == this.student_pj_id){
                this.sp_name = this.subphaseArr[i].sub_phase_name;
                // this.ment_teacher = element.comment_teacher;
                // this.ment_student = element.comment_student;
                const dataTmp = {
                  stu_name: this.stu_name,
                  subphase_name: this.sp_name,
                  key: element.key,
                  date_send: element.date_send,
                  status_send: element.status_send,
                  status_result: element.status_result,
                  // status_check: element.status_check,
                  comment_teacher: element.comment_teacher,
                  comment_student: element.comment_student,
                  file_name: element.file_name,
                  url: element.url,
                };
                this.statusArr.push(dataTmp);
              }
            }
          }
        });
    });

  }

  ////////////////////////////////////////////////

  // showme(n1) {
  //   if (this.temp != n1) {
  //     this.subphaseArr = [];
  //   }
  //   this.subphaseList.forEach(element1 => {
  //     element1.forEach(element => {
  //       if (element.phase_id == n1) {
  //         this.subphaseArr.push(element);
  //       }
  //     });
  //     this.temp = n1;
  //   });
  // }

  saveData(empForm: NgForm) {
    if (empForm.value.comment_teacher == null){
      empForm.value.comment_teacher = "-";
    }
    const data = {
      comment_teacher: empForm.value.comment_teacher,
      status_result: empForm.value.result
    };
    // console.log(data);
    this.firebaseService.editData(this.status_key, data, "/status");
    this.statusArr = [];
  }

  setData(data) {
    this.status_key = data.key;
    this.result = data.status_result;
    this.comment_teacher = data.comment_teacher;
    this.ment_student = data.comment_student;
    this.ment_teacher = data.comment_teacher;
    // this.url_name = data.url;
    this.pdfSrc = data.url;
  }


}
