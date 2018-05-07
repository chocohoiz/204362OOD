import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';
import swal from 'sweetalert2'

@Component({
  selector: "app-manage-teacher",
  templateUrl: "./manage-teacher.component.html",
  styleUrls: ["./manage-teacher.component.css"]
})
export class ManageTeacherComponent implements OnInit {
  wikiList: any;
  teacherList: any;
  teacherArr = [];

  tea_id: any;
  tea_pass: any;
  tea_name: any;
  dataThis: any;
  tmpArr = [];

  teacher_id = "";
  teacher_name = "";
  password = "";

  old_pass = '';
  new_pass = '';
  re_new_pass = '';
  isValid: any;
  kk:any;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router
  ) {}
  basePath = "/teacher";

  ngOnInit() {
    this.wikiList = this.firebaseService.getData(this.basePath);
    this.teacherList = this.firebaseService.getData(this.basePath);
    const key1 = localStorage.getItem("key");
    this.kk = key1;

    this.teacherList.forEach(element1 => {
      this.teacherArr = [];
      element1.forEach(element => {
        if (element.key == key1) {
          this.teacherArr.push(element);
          this.tea_pass = element.password
        }
      });
    });
  }

  setAddData() {
    this.teacher_name = "";
    this.teacher_id = "";
    this.password = "";
  }

  async addData() {
    let Hashing_pass = Md5.hashStr(this.password);
    console.log(Hashing_pass);

    const data = {
      key: this.teacher_id,
      teacher_name: this.teacher_name,
      password: "1234"
    };
    await this.firebaseService.addData(data, this.basePath);
    await this.clear();
    await this.router.navigate(["/ManageTeacher"]);
  }

  clear() {
    this.teacher_id = "";
    this.teacher_name = "";
    this.password = "";
  }

  delData(data) {
    const dataObj = {
      key: data
    };
    this.firebaseService.delData(dataObj, this.basePath);
    swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1200})
    this.router.navigate(["/ManageTeacher"]);

  }

  setData(data) {
    this.dataThis = data;
    console.log(data);
    this.tea_id = data.key;
    this.tea_name = data.teacher_name;
    this.tea_pass = data.password;
    // console.log(data.stu_id);
  }

  editData(tea_id, tea_name, tea_pass) {
    let Hashing_pass = Md5.hashStr(tea_pass);
    const dataObj = {
      password: Hashing_pass,
      teacher_id: tea_id,
      teacher_name: tea_name
    };
    this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
    swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200})

    this.router.navigate(["/ManageTeacher"]);
  }

  confirm(data) {
    console.log(data);
    this.teacher_id = data.key;
    this.teacher_name = data.teacher_name;
    this.password = data.password;
  }

  async change_password() {
     console.log("DB "+this.tea_pass);

    let now_pass = this.teacherArr[0].password;
    let now_key = this.teacherArr[0].key;
    let Hashing_old_pass = Md5.hashStr(this.old_pass);
    let Hashing_new_pass = Md5.hashStr(this.new_pass);
    let Hashing_re_new_pass = Md5.hashStr(this.re_new_pass);

    // console.log("now_pass " + now_pass);
    // console.log("เพิ่งเขียน " + Hashing_old_pass);

    if (this.tea_pass == Hashing_old_pass) {
      if (Hashing_new_pass == Hashing_re_new_pass) {
        const dataStu = {
          password: Hashing_new_pass
        };
        console.log("yeah");

        this.firebaseService.editData(this.kk, dataStu, "/teacher");
        swal({type: 'success', title: 'เปลี่ยนรหัสผ่านสำเร็จ', showConfirmButton: false, timer: 1200})
      } else {
        // alert("การยืนยันรหัสผ่านไม่ถูกต้อง");
        swal({type: 'error',title: 'การยืนยันรหัสผ่านไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง',})
      }
    } else {
      // alert("รหัสผ่านเดิมไม่ถูกต้อง");
      swal({type: 'error', title: 'รหัสผ่านเดิมไม่ถูกต้อง',text: 'กรุณากรอกรหัสผ่านอีกครั้ง',})
    }
    await this.teacherList.forEach(async element1 => {
      this.teacherArr = [];
      await element1.forEach(async element => {
        if (element.key == this.kk) {
          this.teacherArr.push(element);
          this.tea_pass = element.password;
        }
      });
    });

  }

  clear_pass() {
     this.old_pass = '';
    this.new_pass = '';
    this.re_new_pass = '';
  }

  isValidForm(myK) {
    if(myK == this.kk) {
      this.isValid = true;
      return this.isValid;
    }
  }

}
