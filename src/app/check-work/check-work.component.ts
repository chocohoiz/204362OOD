import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';
import { UploadFileService } from "../service/upload-file.service";
import { element } from 'protractor';
// import { FileUpload } from "./fileupload";


@Component({
  selector: 'app-check-work',
  templateUrl: './check-work.component.html',
  styleUrls: ['./check-work.component.css']
})
export class CheckWorkComponent implements OnInit {
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
  tmpArr = [];

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

  isValid: any;
  edited: boolean;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router,
    private uploadService: UploadFileService
  ) {


  }
  basePath = "/status";

  ngOnInit() {
    this.edited = true;
    const key1 = localStorage.getItem("key");
    this.te_key = key1;

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.teacherList = this.firebaseService.getData("/teacher");

    this.phaseList.forEach(element1 => {
      element1.forEach(element => {
        this.phaseArr.push(element);
      });
    });

    // this.statusList.forEach(element1 => {
    //   this.statusArr = [];
    //     element1.forEach((element,index) => {
    //        this.statusArr.push(element)
    //     });
    //       console.log(this.statusArr);
    //   });

    // this.studentList.forEach(element1 => {
    //   let mycount = 0;
    //   let myP = "P01"
    //   element1.forEach(element => {
    //     // for (var i = 0; i< this.statusArr.length; i++) {
    //     //   if(element.project_id == this.statusArr[i].key[0]+this.statusArr[i].key[1]+this.statusArr[i].key[2]) {
    //     //     if(this.statusArr[i].status_send != "No"){
    //     //       if(this.statusArr[i].status_result != "Pass" && this.statusArr[i].status_result != "Failed") {
    //     //         if(myP == element.project_id) {
    //     //           mycount = mycount + 1;
    //     //         } else {
    //     //           myP = element.project_id;
    //     //           mycount = 0;
    //     //         }
    //     //       }
    //     //     }
    //     //   }


    //     // }

    //     this.studentArr.push(element);
    //   });
    // });


  }

  async showme(data) {
    this.subphaseArr = [];
    this.key = data.key;

    if (this.temp != data.key) {
      this.subphaseArr = [];
    }
    await this.subphaseList.forEach(element1 => {
      this.subphaseArr = [];
      element1.forEach(element => {
        if (element.phase_id == this.key) {
          this.subphaseArr.push(element);
        }
      });
      this.temp = data.key;
    });

  }

  selectPhase(data) {
    this.selectedPhase = data.key[0]+ data.key[1];
    this.selectedSubPhase = data.key[2]+ data.key[3];
    localStorage.setItem('Phase', this.selectedPhase);
    localStorage.setItem('SubPhase', this.selectedSubPhase);
    this.router.navigate(['/checkWorkSubPhase']);
  }

  selectStudent(data) {
    this.selectedStudent = data.key;
    localStorage.setItem('Student', this.selectedStudent);
    this.router.navigate(['/checkWorkStudent']);
  }


}
