import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import * as moment from "moment";

import { UploadFileService } from "../service/upload-file.service";
import { isNumber } from "util";
import { element } from "protractor";

import { ChartsModule } from "ng2-charts/ng2-charts";
import Charts from "chart.js";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  selectedFiles: FileList;

  wikiList: any;
  // allkey: FirebaseListObservable<any[]>;
  te_key: any;

  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  teacherList: any;

  phaseArr = [];
  subphaseArr = [];
  studentArr = [];
  select_stuArr = [];
  statusArr = [];

  testtest: any;
  temp: any;

  selectedPhase = "";
  selectedSubPhase = "";
  selectedStudent = "";

  sp_date_assign: any;
  sp_date_send: any;
  sp_detail: any;
  sp_id: any;
  sp_name: any;

  phase_id = "";
  sub_phase_id = "";
  sub_phase_name = "";
  date_assign = "";
  date_send = "";
  sub_phase_detail = "";

  dataThis: any;
  key: any;
  p_id: any;

  student_pj_id: any;
  status_send_Arr = [];
  status_result_Arr = [];

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {}

  ngOnInit() {
    let date = new Date();
    const key1 = localStorage.getItem("key");
    this.te_key = key1;

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.teacherList = this.firebaseService.getData("/teacher");


    this.subphaseList.forEach(element1 => {
      let date_now = moment().format('MM/DD/YY');
      element1.forEach(element => {
        if(date_now > element.date_send){
          console.log("enter1");
          this.subphaseArr.push(element);
          // this.isValid = false;
        } else {
          console.log("enter2");

          // this.isValid = true;
        }

      });
    });


    this.phaseList.forEach(element1 => {
      element1.forEach(element => {
        this.phaseArr.push(element);
      });
    });


    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        this.studentArr.push(element);
      });
    });
  }

  showme() {
    this.subphaseList.forEach(element1 => {
    let date_now = moment().format('MM/DD/YY');
    this.subphaseArr = [];
      element1.forEach(element => {
        if (element.phase_id == this.selectedPhase) {
          if(date_now > element.date_send){
            console.log("enter1");
            this.subphaseArr.push(element);
          } else {
            console.log("enter2");
          }
        }
      });
    });
  }


  selectPhase() {
    console.log(this.selectedPhase);
    console.log(this.selectedSubPhase);
    if(this.selectedSubPhase == "") {
      alert("ต้องเลือกงานย่อยก่อน")
    } else {
      localStorage.setItem("Phase", this.selectedPhase);
      localStorage.setItem("SubPhase", this.selectedSubPhase);
      this.router.navigate(["/report-all-phase"]);
    }

  }

  selectStudent() {
    localStorage.setItem("Student", this.selectedStudent);
    this.router.navigate(["/report-student"]);
  }
}
