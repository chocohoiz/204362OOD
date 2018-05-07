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
import { ViewChild } from "@angular/core";
import { BaseChartDirective } from "ng2-charts/ng2-charts";

import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                 //api
import { ChartModule } from "primeng/chart";

@Component({
  selector: "app-report-a-student",
  templateUrl: "./report-a-student.component.html",
  styleUrls: ["./report-a-student.component.css"]
})
export class ReportAStudentComponent implements OnInit {
  @ViewChild("myChart") myChart: BaseChartDirective;

  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  projectList: any;

  selectedAllPhase: any;

  stu_name: any;
  stu_key: any;
  student_pj_id: any;
  sp_name: any;

  myPJ_name_th: any;

  sp_name_Arr = [];
  subphaseArr = [];
  studentArr = [];
  statusArr = [];

  status_send_Arr = [];
  status_result_Arr = [];

  data: any;
  options: any;

  tmp: any;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {
    // var storedNames = JSON.parse(localStorage.getItem("status_send_Arr"));
    // console.log(storedNames);

    const key1 = localStorage.getItem("key");
    const selectedPhase = localStorage.getItem("Phase");
    const selectedSubPhase = localStorage.getItem("SubPhase");
    this.selectedAllPhase = selectedPhase + selectedSubPhase;
    const selectedStudent = localStorage.getItem("Student");

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.projectList = this.firebaseService.getData("/project");

    this.subphaseList.forEach(element1 => {
      element1.forEach(element => {
        this.subphaseArr.push(element);
      });
    });


    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        if (element.key == selectedStudent) {
          this.studentArr.push(element);
          this.stu_name = element.student_name;
          this.stu_key = element.key;
          this.student_pj_id = element.project_id;
          console.log("pjid" + this.student_pj_id);
        }
      });
    });

    this.projectList.forEach(element1 => {
      element1.forEach(element => {
        if (this.student_pj_id == element.key){
          this.myPJ_name_th = element.name_th;
        }
      });
    });

    var keepGoing = true;
    this.statusList.forEach(async element1 => {
      if (keepGoing) {
        await element1.forEach((element, index) => {
          keepGoing = false;
          let Phase_id = element.key[4] + element.key[5] + element.key[6] + element.key[7];
          let SubPhase_id = element.key[6] + element.key[7];
          let my_pj_id = element.key[0] + element.key[1] + element.key[2];
          let mynum: number;

          if (this.student_pj_id == my_pj_id) {
            this.subphaseArr.length == 1;
            for (var i = 0; i < this.subphaseArr.length; i++) {
              if (Phase_id == this.subphaseArr[i].key && my_pj_id == this.student_pj_id) {
                // console.log("enter "+ i);
                // console.log("tmp "+this.tmp);
                if(i == this.tmp){
                  this.sp_name_Arr.pop();
                  this.status_send_Arr.pop();
                  this.status_result_Arr.pop();
                }

                console.log(this.subphaseArr[i].sub_phase_name);
                this.sp_name_Arr.push(this.subphaseArr[i].sub_phase_name);
                if (element.status_send == "Sent") {
                  mynum = 2.2;
                } else if (element.status_send == "Late") {
                  mynum = 1.2;
                } else {
                  mynum = 0.2;
                }
                this.status_send_Arr.push(mynum);

                if (element.status_result == "Pass") {
                  mynum = 2.1;
                } else if (element.status_result == "Failed") {
                  mynum = 1.1;
                } else {
                  mynum = 0.1;
                }
                this.status_result_Arr.push(mynum);
                this.tmp = i;
              }
            }
          }
          /////////////////////////////////////////////////
          if (index === element1.length - 1) {
            this.data = {
              labels: this.sp_name_Arr,
              datasets: [
                {
                  tension: 0,
                  label: "สถานะการส่งงาน",
                  borderColor: "#F5B041",
                  fill: false,
                  data: this.status_send_Arr
                },
                {
                  tension: 0,
                  label: "สถานะการตรวจงาน",
                  borderColor: "#5D6D7E",
                  fill: false,
                  data: this.status_result_Arr
                }
              ]
            };
          }
          /////////////////////////////////////////////////////
        });
        console.log(this.status_send_Arr);
        console.log(this.status_result_Arr);
        console.log(this.sp_name_Arr);

      }
    });

    // this.subphaseList.forEach(element1 => {
    //   element1.forEach((element, index) => {
    //     console.log(element.sub_phase_name);
    //     this.sp_name_Arr.push(element.sub_phase_name);
    //   });
    //   console.log(this.sp_name_Arr);
    // });

    ////////////////////////////////////

    this.options = {
      // title: {
      //   display: true
      // },
      // legend: {
      //   position: "bottom"
      // },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 1,
              beginAtZero: true,
              suggestedMax: 3,
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              autoSkip: false
            }
          }
        ]
      }
    };
  }

  selectData(event: any) {
    console.log(event);
  }

  ngOnInit() {}

  //////////////////////////////////////////////////////////////////
}
