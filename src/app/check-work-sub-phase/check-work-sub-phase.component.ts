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
import swal from 'sweetalert2'

// import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: "app-check-work-sub-phase",
  templateUrl: "./check-work-sub-phase.component.html",
  styleUrls: ["./check-work-sub-phase.component.css"]
})
export class CheckWorkSubPhaseComponent implements OnInit {
  pdfSrc: string = '';
  page: number = 1;
  wikiList: any;
  // allkey: FirebaseListObservable<any[]>;

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

  testtest: any;
  temp: any;

  clicked: false;
  isClass1Visible: false;
  isClass2Visible: false;

  selectedPhase = "";
  selectedSubPhase = "";
  selectedStudent = "";
  selectedAllPhase = "";

  status_key: any;
  result: any;
  comment_teacher: any ="";
  ment_teacher: any;
  ment_student: any;
  url_name: any;

  p_name: any;
  sp_name: any;

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
    console.log(selectedPhase);
    console.log(selectedSubPhase);
    console.log(this.selectedAllPhase );


    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.teacherList = this.firebaseService.getData("/teacher");

    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        this.studentArr.push(element);
      });
    });

    this.phaseList.forEach(element1 => {
      element1.forEach(element => {
        if(element.key == selectedPhase){
          this.p_name = element.phase_name;
        }
      });
    });

    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {

        if(element.key == this.selectedAllPhase){
          this.sp_name = element.sub_phase_name;
        }
      });
    });

    var keepGoing = true;
    this.statusList.forEach(element1 => {
        element1.forEach(element => {
          keepGoing = false;
          this.selectedPhase = element.key[4] + element.key[5];
          this.selectedSubPhase = element.key[6] + element.key[7];
          // console.log("+++++++++"+this.selectedPhase);

          if (this.selectedAllPhase == this.selectedPhase + this.selectedSubPhase) {

            for (var i = 0; i < this.studentArr.length; i++) {
              // console.log(this.studentArr[i].student_name);

              if (element.key[0] + element.key[1] + element.key[2] == this.studentArr[i].project_id) {
                const dataTmp = {
                  stu_id: this.studentArr[i].key,
                  stu_name: this.studentArr[i].student_name,
                  pj_id: this.studentArr[i].project_id,
                  file_name: element.file_name,
                  url: element.url,
                  date_send: element.date_send,
                  status_send: element.status_send,
                  status_result: element.status_result,
                  // status_check: element.status_check,
                  key: element.key,
                  comment_student: element.comment_student,
                  comment_teacher: element.comment_teacher
                };
                this.statusArr.push(dataTmp);
              }
            }
          }
        });
    });

  }

  saveData(empForm: NgForm) {
    const data = {
      comment_teacher: empForm.value.comment_teacher,
      status_result: empForm.value.result,
      // status_check: "Y"
    };
    this.firebaseService.editData(this.status_key, data, "/status");
    this.statusArr = [];
  }

  setData(data) {
    // console.log(data);
    this.status_key = data.key;
    this.result = data.status_result;
    this.comment_teacher = data.comment_teacher;
    this.ment_student = data.comment_student;
    this.ment_teacher = data.comment_teacher;
    this.url_name = data.url;
    this.pdfSrc = data.url;
    }


  // onFileSelected() {
  //   console.log("******");

  //   let img: any = document.querySelector('#file');

  //   if (typeof (FileReader) !== 'undefined') {
  //     let reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.pdfSrc = e.target.result;
  //       console.log(this.pdfSrc);

  //     };
  //     console.log("++++++++");

  //     reader.readAsArrayBuffer(img.files[0]);
  //   }
  // }


  public my_Class = "style1";
  //function to change the class from style1 to style 2 when clicked
  toggle_class() {
    if (this.my_Class == "style1") {
      this.my_Class = "style2";
    } else {
      this.my_Class = "style1";
    }
  }
}
