import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import { Md5 } from "ts-md5/dist/md5";
import swal from 'sweetalert2'

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.css"]
})
export class AddProjectComponent implements OnInit {
  wikiList: any;
  allkey: FirebaseListObservable<any[]>;
  key: any;

  projectList: any;
  studentLis: any;
  tmpArr = [];
  tmp: any;
  studentArr = [];

  name_th = "";
  name_en = "";
  project_id = "";

  dataThis: any;
  stu_id: any;
  stu_name: any;
  stu_pass: any;
  pj_id: any;

  old_pass = "";
  new_pass = "";
  re_new_pass = "";
  myk: any;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router
  ) {}
  basePath = "/project";

  ngOnInit() {
    this.wikiList = this.firebaseService.getData(this.basePath);
    this.studentLis = this.firebaseService.getData("/student");
    this.projectList = this.firebaseService.getData("/project");
    const key1 = localStorage.getItem("key");
    this.myk = key1;
    this.studentLis.forEach(element1 => {
      element1.forEach(element => {
        if (element.key == key1) {
          this.tmpArr.push(element);
          this.stu_id = element.key;
          this.stu_name = element.student_name;
          this.stu_pass = element.password;
          this.pj_id = element.project_id;
        }
      });
    });

    this.projectList.forEach(element1 => {
      element1.forEach(element => {
        if (element.key == this.pj_id) {
          this.name_th = element.name_th;
          this.name_en = element.name_en;
        }
      });
    });
  }

  async addData() {
    const dataPJ = {
      key: this.tmpArr[0].project_id,
      name_th: this.name_th,
      name_en: this.name_en
    };
    await this.firebaseService.addData(dataPJ, this.basePath);

    const dataStu = {
      student_name: this.stu_name,
      password: this.stu_pass
    };
    await this.firebaseService.editData(this.stu_id, dataStu, "/student");
    swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1500})


  }

  async change_password() {
    console.log(this.stu_pass);
    let Hashing_old_pass = Md5.hashStr(this.old_pass);
    let Hashing_new_pass = Md5.hashStr(this.new_pass);
    let Hashing_re_new_pass = Md5.hashStr(this.re_new_pass);

    console.log("DB " + this.stu_pass);
    console.log("เพิ่งเขียน " + Hashing_old_pass);
    console.log();

    if (this.stu_pass == Hashing_old_pass) {
      if (Hashing_new_pass == Hashing_re_new_pass) {
        const dataStu = {
          password: Hashing_new_pass
        };
        console.log("yeah");

        this.firebaseService.editData(this.tmpArr[0].key, dataStu, "/student");
        swal({type: 'success', title: 'เปลี่ยนรหัสผ่านสำเร็จ', showConfirmButton: false, timer: 1200})


      } else {
        // alert("การยืนยันรหัสผ่านไม่ถูกต้อง");
        swal({type: 'error',title: 'การยืนยันรหัสผ่านไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง',})

      }
    } else {
      // alert("รหัสผ่านเดิมไม่ถูกต้อง");
      swal({type: 'error', title: 'รหัสผ่านเดิมไม่ถูกต้อง',text: 'กรุณากรอกรหัสผ่านอีกครั้ง',})

    }
    await this.studentLis.forEach(async element1 => {
      this.studentArr = [];
      await element1.forEach(async (element, index) => {
        if (element.key == this.myk) {
          this.studentArr.push(element);
          this.stu_pass = element.password;
        }
      });
    });
  }

  clear() {
    this.old_pass = "";
    this.new_pass = "";
    this.re_new_pass = "";
  }

}
