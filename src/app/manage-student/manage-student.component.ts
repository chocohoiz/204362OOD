import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";

import * as XLSX from "ts-xlsx";
import { element } from "protractor";
import { Md5 } from 'ts-md5/dist/md5';
import swal from 'sweetalert2'


@Component({
  selector: "app-manage-student",
  templateUrl: "./manage-student.component.html",
  styleUrls: ["./manage-student.component.css"]
})
export class ManageStudentComponent implements OnInit {
  wikiList: any;
  allkey: FirebaseListObservable<any[]>;
  key: any;

  tmpToNum: any;
  myCount: any;
  a1: any;

  studentList: any;
  studentArr = [];
  myMax: any;

  statusList: any;
  statusArr = [];
  subphaseList: any;
  subPhaseArr = [];

  stu_id: any;
  stu_name: any;
  dataThis: any;
  stu_pass: any;
  pj_id: any;

  student_id = "";
  student_name = "";
  password = "";
  project_id = "";

  arrayBuffer: any;
  file: File;

  stu_excel_arr = [];
  stu_arr = [];

  last_pj_id: any;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService, private router: Router
  ) {}
  basePath = "/student";

  ngOnInit() {
    this.wikiList = this.firebaseService.getData(this.basePath);
    const key1 = localStorage.getItem("key");
    this.tmpToNum = "01";
    this.tmpToNum = Number(this.tmpToNum);
    this.studentList = this.firebaseService.getData("/student");
    this.statusList = this.firebaseService.getData("/status");
    this.subphaseList = this.firebaseService.getData("/subphase");
    this.myMax = 0;
    this.last_pj_id = "P01"

    this.studentList.subscribe(element1 => {
      element1.forEach((element, index) => {
        this.last_pj_id = element.project_id;
      });
    });
  }

  delData(data) {
    const dataObj = {
      key: data
    };
    console.log(dataObj);
    console.log(data);


    this.firebaseService.delData(dataObj, this.basePath);
    swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1200})

    // this.statusList.subscribe(element1 => {
    //   element1.forEach(element => {
    //   });
    // });
  }

  confirm(data) {
    console.log(data);
    this.student_id = data.key;
  }

  setData(data) {
    this.dataThis = data;
    // console.log(data);
    this.stu_id = data.key;
    this.stu_name = data.student_name;
    this.stu_pass = data.password;
    this.pj_id = data.project_id;
  }

  editData(stu_id, stu_name, stu_pass, pj_id) {
    let Hashing_pass = Md5.hashStr(stu_pass);

    const dataObj = {
      password: Hashing_pass,
      project_id: pj_id,
      student_id: stu_id,
      student_name: stu_name
    };
    this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
    swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200})

  }

  async addData() {
    let mytmp = 0;
    let tmp: any;
    var keepGoing = true;

    await this.studentList.forEach(async element1 => {
      if (keepGoing) {
        await element1.forEach(async element => {
          tmp = Number(element.project_id[1] + element.project_id[2]);
          if (tmp > this.myMax) {
            this.myMax = tmp;
          }
        });
        keepGoing = false;

        this.myMax++;
        if (this.myMax < 10) {
          this.myMax = "P0" + this.myMax;
        } else {
          this.myMax = "P" + this.myMax;
        }

        this.project_id = this.myMax;

    let Hashing_pass = Md5.hashStr("1234");

        const data = {
          key: this.student_id,
          student_name: this.student_name,
          password: Hashing_pass,
          project_id: this.project_id
        };
        await this.firebaseService.addData(data, this.basePath);
        await this.clear();
        await console.log(data.project_id);
        await this.addStatus(data.project_id);
        swal({type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200})

      }
    });
  }

  clear() {
    this.student_id = "";
    this.student_name = "";
    this.password = "";
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    this.myCount = 0;
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      XLSX.utils.sheet_to_json(worksheet).forEach(element => {
        this.stu_excel_arr.push(element);
      });

    for (var i=0; i< this.stu_excel_arr.length;i++) {
      this.last_pj_id = Number(this.last_pj_id[1] + this.last_pj_id[2]);
      this.last_pj_id = this.last_pj_id + 1;
      if (this.last_pj_id < 10) {
        this.last_pj_id = "P0" + this.last_pj_id;
      } else {
        this.last_pj_id = "P" + this.last_pj_id;
      }
    let Hashing_pass = Md5.hashStr(this.stu_excel_arr[i].password);

      const data = {
        key: this.stu_excel_arr[i].key,
        student_name: this.stu_excel_arr[i].student_name + " " + this.stu_excel_arr[i].student_lastname,
        password: Hashing_pass,
        project_id: this.last_pj_id
      };
      console.log(data);
      this.firebaseService.addData(data, this.basePath);
      this.addStatus(data.project_id);
      console.log(data.project_id);
      swal({type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200})

    }

    };
    fileReader.readAsArrayBuffer(this.file);
  }

  addStatus(kk) {
    let mykk: any;
    this.subphaseList.subscribe(element1 => {
      element1.forEach(element => {
        mykk = kk +"_" +element.key + "01";
        const dataObj = {
          key: mykk,
          status_send: "No"
        };
      // console.log(dataObj);
      this.firebaseService.addData(dataObj, "/status");
      });
    });
  }

}
