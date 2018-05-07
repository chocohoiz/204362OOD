import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import { ManageStudentComponent } from "./../manage-student/manage-student.component";
import { FirebaseService } from "../service/firebase-service.service";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import { LoginService } from "../service/login-service.service";
import { Md5 } from "ts-md5/dist/md5";
import swal from 'sweetalert2'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  studentList: any;
  studentArr = [];

  teacherList: any;
  teacherArr = [];

  adminList: any;
  adminArr = [];

  tmpArr = [];

  mycount1 = 0;
  conf = 0;

  constructor(
    @Inject(LoginService) private LoginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teacherList = this.LoginService.getList("/teacher");
    this.studentList = this.LoginService.getList("/student");
    this.adminList = this.LoginService.getList("/admin");

    this.teacherList.subscribe(data => {
      data.forEach(tmp => {
        this.teacherArr.push(tmp);
        const dataObj = {
          key: tmp.key,
          password: tmp.password,
          mytype: "teacher"
        }
        this.tmpArr.push(dataObj);
      });
    });

    this.studentList.subscribe(data => {
      data.forEach(tmp => {
        this.studentArr.push(tmp);
        const dataObj = {
          key: tmp.key,
          password: tmp.password,
          mytype: "student"
        }
        this.tmpArr.push(dataObj);
      });
    });

    this.adminList.subscribe(data => {
      data.forEach(tmp => {
        this.adminArr.push(tmp);
        const dataObj = {
          key: tmp.key,
          password: tmp.password,
          mytype: "admin"
        }
        this.tmpArr.push(dataObj);
      });
    });

  }

  login() {
    this.mycount1 = 0;

    console.log(Md5.hashStr(this.password));
    let Hashing_pass = Md5.hashStr(this.password);

    for (var i = 0 ; i<this.tmpArr.length;i++){
      this.conf = 0;
      this.mycount1 = 0;
      if(this.username == this.tmpArr[i].key) {
        this.conf = 1;
        this.mycount1 = 0;
        if(Hashing_pass == this.tmpArr[i].password){
          if(this.tmpArr[i].mytype == "teacher"){
            localStorage.setItem("key", this.username);
            this.router.navigate(["/checkWork"]);
          } else if (this.tmpArr[i].mytype == "student") {
            localStorage.setItem("key", this.username);
            localStorage.setItem("Student", this.username);
            this.router.navigate(["/sendWork"]);
          } else {
            localStorage.setItem("key", this.username);
            this.router.navigate(["/ManageAdmin"]);
          }
        } else {
          // alert("รหัสผ่านไม่ถูกต้อง")
           swal({type: 'error', title: 'รหัสผ่านไม่ถูกต้อง',text: 'กรุณากรอกรหัสผ่านอีกครั้ง',})

        }
        break;
      }
      else {
        this.mycount1 = 1;
      }
    }

    if(this.mycount1 == 1 && this.conf == 0) {
      console.log("ชื่อผู้ใช้ไม่มีในระบบ");
      // alert("ชื่อผู้ใช้ไม่มีในระบบ")
      swal({type: 'error', title: 'ไม่มีชื่อผู้ใช้นี้ในระบบ',text: 'กรุณาตรวจสอบ',})

    }

  }

}
