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

import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-report-all-phase",
  templateUrl: "./report-all-phase.component.html",
  styleUrls: ["./report-all-phase.component.css"]
})
export class ReportAllPhaseComponent implements OnInit {
  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;

  selectedAllPhase: any;

  numSent: number = 0;
  numLate: number = 0;
  numNo: number = 0;
  mynum: number;

  percent_sent: number;
  percent_late: number;
  percent_no1: number;
  percent_pass: number;
  percent_failed: number;
  percent_no2: number;

  resultPass: number = 0;
  resultFailed: number = 0;
  resultNo: number = 0;

  tmpNumData: number[];
  statusArr = [];

  data: any;
  data1: any;

  p_name: any;
  sp_name: any;

  tmp: any = "01";

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {
    const key1 = localStorage.getItem("key");
    const selectedPhase = localStorage.getItem("Phase");
    const selectedSubPhase = localStorage.getItem("SubPhase");
    const selectedStudent = localStorage.getItem("Student");

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");

    this.phaseList.forEach(element1 => {
      element1.forEach(element => {
        if (selectedPhase == element.key) {
          this.p_name = element.phase_name;
        }
      });
    });

    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {
        if (selectedSubPhase == element.key) {
          this.sp_name = element.sub_phase_name;
        }
      });
    });

    this.statusList.forEach(element1 => {
      element1.forEach(element => {
        this.statusArr.push(element);
      });
      for (var i = 0; i < this.statusArr.length; i++) {
        let sp_key = this.statusArr[i].key[4] + this.statusArr[i].key[5] + this.statusArr[i].key[6] + this.statusArr[i].key[7];
        let pj_id = Number(this.statusArr[i].key[8] + this.statusArr[i].key[9]);
        if (selectedSubPhase == sp_key) {
          // console.log("tmp " + this.tmp);
          // console.log("pj id " + pj_id);
          if (pj_id > this.tmp) {
            console.log(this.statusArr[i].key);

            if (this.statusArr[i - 1].status_send == "Sent") {
              this.numSent = this.numSent - 1;
            } else if (this.statusArr[i - 1].status_send == "Late") {
              this.numLate = this.numLate - 1;
            } else {
              this.numNo = this.numNo - 1;
            }

            if (this.statusArr[i - 1].status_result == "Pass") {
              this.resultPass = this.resultPass - 1;
            } else if (this.statusArr[i - 1].status_result == "Failed") {
              this.resultFailed = this.resultFailed - 1;
            } else {
              this.resultNo = this.resultNo - 1;
            }
          }
          this.tmp = pj_id;

          if (this.statusArr[i].status_send == "Sent") {
            this.numSent = this.numSent + 1;
          } else if (this.statusArr[i].status_send == "Late") {
            this.numLate = this.numLate + 1;
          } else {
            this.numNo = this.numNo + 1;
          }

          if (this.statusArr[i].status_result == "Pass") {
            this.resultPass = this.resultPass + 1;
          } else if (this.statusArr[i].status_result == "Failed") {
            this.resultFailed = this.resultFailed + 1;
          } else {
            this.resultNo = this.resultNo + 1;
          }
        }
      }

      console.log("last");
      this.data = {
        labels: ["Sent", "Late", "No"],
        datasets: [
          {
            data: [this.numSent, this.numLate, this.numNo],
            backgroundColor: ["#5499C7", "#F1948A", "#5D6D7E"],
            hoverBackgroundColor: ["#5499C7", "#F1948A", "#5D6D7E"]
          }
        ]
      };

      this.data1 = {
        labels: ["Pass", "Failed"],
        datasets: [
          {
            data: [this.resultPass, this.resultFailed],
            backgroundColor: ["#F5B041", "#5D6D7E"],
            hoverBackgroundColor: ["#F5B041", "#5D6D7E"]
          }
        ]
      };

      this.percent_sent = this.numSent * 100 / (this.numSent + this.numLate + this.numNo);
      this.percent_late = this.numLate * 100 / (this.numSent + this.numLate + this.numNo);
      this.percent_no1 = this.numNo * 100 / (this.numSent + this.numLate + this.numNo);

      this.percent_pass = this.resultPass * 100 / (this.resultPass + this.resultFailed);
      this.percent_failed = this.resultFailed * 100 / (this.resultPass + this.resultFailed);

      console.log(this.percent_sent);
      console.log(this.percent_late);
      console.log(this.percent_no1);

      console.log(this.percent_pass);
      console.log(this.percent_failed);
    });

    // this.statusList.forEach(element1 => {
    //   element1.forEach((element, index) => {
    //     let sp_key = element.key[4] + element.key[5] + element.key[6] + element.key[7];
    //     let pj_id = element.key[0] + element.key[1] + element.key[2]
    //     if (selectedSubPhase == sp_key) {
    //       console.log(Number(element.key[8]+element.key[9]));
    //       console.log("tmp "+ this.tmp);
    //       console.log("pj id " + pj_id);
    //       this.tmp = pj_id;

    //       if (element.status_send == "Sent") {
    //         this.numSent = this.numSent + 1;
    //         //  console.log(this.numSent);
    //       } else if (element.status_send == "Late") {
    //         this.numLate = this.numLate + 1;
    //       } else {
    //         //  console.log("no");
    //         this.numNo = this.numNo + 1;
    //       }

    //       if (element.status_result == "Pass") {
    //         this.resultPass = this.resultPass + 1;
    //       } else if (element.status_result == "Failed") {
    //         this.resultFailed = this.resultFailed + 1;
    //       } else {
    //         this.resultNo = this.resultNo + 1;
    //       }
    //     }
    //     if (index === element1.length - 1) {
    //       this.data = {
    //         labels: ["Sent", "Late", "No"],
    //         datasets: [
    //           {
    //             data: [this.numSent, this.numLate, this.numNo],
    //             backgroundColor: ["#58D68D", "#F5B041", "#5D6D7E"],
    //             hoverBackgroundColor: ["#58D68D", "#F5B041", "#5D6D7E"]
    //           }
    //         ]
    //       };

    //       this.data1 = {
    //         labels: ["Pass", "Failed"],
    //         datasets: [
    //           {
    //             data: [this.resultPass, this.resultFailed],
    //             backgroundColor: ["#3498DB", "#E74C3C"],
    //             hoverBackgroundColor: ["#3498DB", "#E74C3C"]
    //           }
    //         ]
    //       };
    //     }
    //   });
    //   // console.log(this.numSent);
    //   // console.log(this.numLate);
    //   // console.log(this.numNo);

    //   this.percent_sent = (this.numSent*100)/(this.numSent+this.numLate+this.numNo);
    //   this.percent_late = (this.numLate*100)/(this.numSent+this.numLate+this.numNo);
    //   this.percent_no1 = (this.numNo*100)/(this.numSent+this.numLate+this.numNo);

    //   this.percent_pass = (this.resultPass*100)/(this.resultPass+this.resultFailed+this.resultNo);
    //   this.percent_failed = (this.resultFailed*100)/(this.resultPass+this.resultFailed);

    //   console.log(this.percent_sent);
    //   console.log(this.percent_late);
    //   console.log(this.percent_no1);

    //   console.log(this.percent_pass);
    //   console.log(this.percent_failed);

    // });
  }

  ngOnInit() {}

  setData() {}
}
