import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  te_key: any;

  statusList: any;
  phaseList: any;
  subphaseList: any;
  studentList: any;
  teacherList: any;
  projectList: any;

  phaseArr = [];
  subphaseArr = [];
  studentArr = [];
  select_stuArr = [];
  statusArr = [];
  projectArr = [];

  stu_name: any;
  stu_pass: any;
  stu_pkey:any;
  p_key: any;
  p_name_th: any;
  p_name_en: any;


  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    const key1 = localStorage.getItem("key");
    this.te_key = key1;

    this.statusList = this.firebaseService.getData("/status");
    this.phaseList = this.firebaseService.getData("/phase");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.teacherList = this.firebaseService.getData("/teacher");
    this.projectList = this.firebaseService.getData("/project")

    this.studentList.forEach(element1 => {
      element1.forEach(element => {
        if(this.te_key == element.key){
          this.studentArr.push(element);
          this.stu_name = element.student_name;
          this.stu_pass = element.password;
          this.stu_pkey = element.project_id;
        }
      });
    });

    this.projectList.forEach(element1 => {
      element1.forEach(element => {
        if(this.studentArr[0].project_id == element.key){
          this.projectArr.push(element);
          this.p_key = element.key;
          this.p_name_en = element.name_en;
          this.p_name_th = element.name_th;
        }
      });
    });
  }

}
