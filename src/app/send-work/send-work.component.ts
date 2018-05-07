import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import * as moment from "moment";
import swal from 'sweetalert2'

// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { UploadFileService } from "../service/upload-file.service";
import { FileUpload } from "./fileupload";
import { isNumber } from "util";
import { element } from "protractor";

@Component({
  selector: "app-send-work",
  templateUrl: "./send-work.component.html",
  styleUrls: ["./send-work.component.css"]
})
export class SendWorkComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  wikiList: any;
  // allkey: FirebaseListObservable<any[]>;
  // key: any;
  stu_key: any;

  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  temp: any;

  statusArr = [];
  statusArr2 = [];

  phaseArr = [];
  subphaseArr = [];
  studentArr = [];
  select_stuArr = [];
  tmpArr = [];

  testtest: any;

  selectedPhase = "";
  selectedSubPhase = "";
  user_file = "";
  comment_stu = "";

  a1: any;
  myDateNow: any;

  tmpGetLength: any;

  tmpToNum: any;
  myCount: any;
  Arrlength: any;

  mystatus_send: any;

  repass = true;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {}
  basePath = "/status";

  ngOnInit() {
    const key1 = localStorage.getItem("key");
    this.stu_key = key1;
    this.tmpToNum = "01";
    this.tmpToNum = Number(this.tmpToNum);

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");

    this.phaseList.forEach(element1 => {
      element1.forEach(element => {
        this.phaseArr.push(element);
      });
    });

    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        if (element.key == this.stu_key) {
          this.studentArr.push(element);
        }
      });
    });
  }

  showme(n1) {
    if (this.temp != n1) {
      this.subphaseArr = [];
    }
    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {
        if (element.phase_id == n1) {
          this.subphaseArr.push(element);
        }
      });
      this.temp = n1;
    });
  }

  ////////////////////////////////////////////////// ..
  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match("application.*")) {
      this.selectedFiles = event.target.files;
    } else {
      // alert("invalid format!");
      swal({type: 'error',title: 'ชนิดของไฟล์งานไม่ถูกต้อง', text: 'กรุณาเปลี่ยนเป็นไฟล์ ".pdf"',})
    }
  }

  async upload(fileUpload: FileUpload) {
    if(this.selectedSubPhase == '' || this.selectedSubPhase == ''){
      console.log("enter");
      swal({type: 'error', title: 'กรุณาเลือกงานหลักและงานย่อย'})
      // alert("ต้องเลือกงานหลักและงานย่อย");
    }
    else{
      let allSelect = this.selectedPhase + this.selectedSubPhase;
      let mynum = 0;
      var keepGoing = true;
      let s_result: any;

      await this.statusList.subscribe(async element1 => {
        if (keepGoing) {
          await element1.forEach(async element => {
            let tmpKey = element.key[0] + element.key[1] + element.key[2];
            let tmpPhase = element.key[4] + element.key[5] + element.key[6] + element.key[7];
            this.myCount = element.key[8] + element.key[9];

            if (tmpKey == this.studentArr[0].project_id && allSelect == tmpPhase) {
              mynum++;
              console.log("jaja1");

              for (var t = 0; t < this.subphaseArr.length; t++) {
                if (this.subphaseArr[t].key == allSelect) {
                  s_result = element.status_result;
                  console.log("jaja2");

                  if (this.subphaseArr[t].date_send < this.myDateNow) {
                    console.log("enter ieie");

                    this.mystatus_send = "Late";
                  } else {
                    this.mystatus_send = "Sent";
                  }
                }
              }
            }
          });
          keepGoing = false;

          console.log(s_result);

          this.myCount = mynum;
          if (this.myCount == 0) {
            this.myCount = 1;
          }
          if (s_result == "Failed") {
            this.myCount = this.myCount + 1;
            console.log("f");
            console.log(this.myCount);
          }

          if (this.myCount < 10) {
            this.a1 = this.a1 + "0" + this.myCount;
          } else {
            this.a1 = this.a1 + this.myCount;
          }
          console.log(this.a1);

          const file = this.selectedFiles.item(0);
          this.selectedFiles = undefined;

          const data = {
            file_name: this.a1 + ".pdf",
            date_send: this.myDateNow,
            comment_student: this.comment_stu,
            status_send: this.mystatus_send
          };
          const data1 = {
            key: this.a1,
            file_name: this.a1 + ".pdf",
            date_send: this.myDateNow,
            comment_student: this.comment_stu,
            status_send: this.mystatus_send
          };

          if (this.myCount == 1) {
            console.log("enter1");

            this.firebaseService.editData(this.a1, data, this.basePath);
            ////////////////////////////////////
            this.currentFileUpload = await new FileUpload(file);
            await this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.a1);
            this.statusArr = await [];
            swal({type: 'success', title: 'ส่งงานสำเร็จ', showConfirmButton: false, timer: 1200})

          } else {
            console.log("enter2");

            this.firebaseService.addData(data1, this.basePath);
            ////////////////////////////////////
            this.currentFileUpload = await new FileUpload(file);
            await this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.a1);
            this.statusArr = await [];
            swal({type: 'success', title: 'ส่งงานสำเร็จ', showConfirmButton: false, timer: 1200})

          }

          for (var i = 1; i <= mynum; i++) {
            console.log("i=== " + i);
          }

        }
      });

      this.a1 =
        this.studentArr[0].project_id +
        "_" +
        this.selectedPhase +
        this.selectedSubPhase;
      console.log("------>key " + this.a1);

      this.myDateNow = moment(this.myDateNow).format("MM/DD/YY");
    }


  }
}
