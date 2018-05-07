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
import * as moment from "moment";
import swal from 'sweetalert2'

@Component({
  selector: 'app-history-work',
  templateUrl: './history-work.component.html',
  styleUrls: ['./history-work.component.css']
})
export class HistoryWorkComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  wikiList: any;
  // allkey: FirebaseListObservable<any[]>;
  basePath = "/status";
  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  teacherList: any;

  statusArr = [];
  phaseArr = [];
  subphaseArr = [];
  studentArr = [];
  select_stuArr = [];

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

  comment_teacher: any;
  result = 'yes';

  stu_name: any;
  sp_name: any;
  url_name: any;
  ment_teacher: any;
  ment_student: any;

  status_key: any;

  student_pj_id: any;

  startDate: Date;
  startDate1: Date;

  isValid: any;

  a1: any;
  myDateNow: any;

  tmpGetLength: any;

  tmpToNum: any;
  myCount: any;
  Arrlength: any;

  mystatus_send: any;
  sp_key: any;
  subp_name: any;

  fileUploads: FirebaseListObservable<FileUpload[]>;
  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) { }

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

    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {
        this.subphaseArr.push(element);
      });
    });

    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        if(element.key == key1){
          this.studentArr.push(element);
          this.stu_name = element.student_name;
          this.student_pj_id = element.project_id;
        }
      });
    });

    this.statusArr = [];
    var keepGoing = true;
    this.statusList.forEach(element1 => {
    this.statusArr = [];

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
        // console.log(this.statusArr);
    });


  }


  setData(data) {
    this.subp_name = data.subphase_name;
    this.status_key = data.key;
    this.result = data.status_result;
    this.comment_teacher = data.comment_teacher;
    this.ment_student = data.comment_student;
    this.sp_key = data.key[4]+data.key[5]+data.key[6]+data.key[7];
  }

  setDataComment(data) {
    this.result = data.status_result;
    this.comment_teacher = data.comment_teacher;
  }

  isValidForm(s_send, s_result) {
    if(s_send != "No" &&  s_result != "Pass" &&  s_result != "Failed") {
      this.isValid = true;
      return this.isValid;
    }
  }

  isValidCommentTeacher(s_send) {
    if(s_send != "No") {
      this.isValid = true;
      return this.isValid;
    }
  }


  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match("application.*")) {
      this.selectedFiles = event.target.files;
    } else {
      // alert("invalid format!");
      swal({type: 'error',title: 'ชนิดของไฟล์งานไม่ถูกต้อง', text: 'กรุณาเปลี่ยนเป็นไฟล์ ".pdf"',})
    }
  }

  async upload() {
    this.statusArr = await [];
    console.log(this.statusArr);

    let allSelect = this.selectedPhase + this.selectedSubPhase;
    var keepGoing = true;

    await this.statusList.subscribe(async element1 => {
      if (keepGoing) {
        await element1.forEach(async element => {
          let tmpKey = element.key[0] + element.key[1] + element.key[2];
          let tmpPhase = element.key[4] + element.key[5] + element.key[6] + element.key[7];
          this.myCount = element.key[8] + element.key[9];
          if (this.status_key == element.key && this.sp_key == tmpPhase) {
            for (var t=0; t < this.subphaseArr.length; t++) {
              if (this.subphaseArr[t].key == this.sp_key) {
                if ( this.subphaseArr[t].date_send <  this.myDateNow) {
                  this.mystatus_send = "Late";
                } else {
                  this.mystatus_send = "Sent";
                }
              }
            }
          }
        });
        keepGoing = false;

        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;

        const data = {
          file_name: this.status_key+".pdf",
          date_send: this.myDateNow,
          comment_student: this.ment_student,
          status_send: this.mystatus_send
        };
        await this.firebaseService.editData(this.status_key, data, this.basePath);
        ////////////////////////////////////
        this.currentFileUpload = await new FileUpload(file);
        await this.uploadService.pushFileToStorage(this.currentFileUpload,this.progress,this.status_key);

        this.statusArr = [];
        swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200})


      }
    });
    this.myDateNow = moment(this.myDateNow).format('MM/DD/YY');
  }

  // randomcolor = this.getRandomColor();
  // getRandomColor() {
  //   console.log();

  //   let color = "red"
  //   return color;
  // }


  setColor(result) {
    console.log(result);
    return "red";
  }

}
