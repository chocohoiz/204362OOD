import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm, Form, FormGroup, FormBuilder, Validator } from "@angular/forms";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseService } from "../service/firebase-service.service";
import { AppRoutingModule } from "./../app-routing.module";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Router } from "@angular/router";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import { element } from "protractor";
import swal from 'sweetalert2'


@Component({
  selector: "app-manage-phase",
  templateUrl: "./manage-phase.component.html",
  styleUrls: ["./manage-phase.component.css"]
})
export class ManagePhaseComponent implements OnInit {
  addForm: FormGroup;
  wikiList: any;

  subPhaseList: any;
  subPhaseArr = [];
  phaseList: any;
  phaseArr = [];
  studentList: any;
  studentArr = [];
  statusList: any;
  statusArr = [];

  tmpToNum: any;
  myCount: any;
  myMax: any;
  a1: any;

  allkey: FirebaseListObservable<any[]>;
  key: any;
  dataThis: any;
  tmpArr = [];

  p_id: any;
  p_name: any;
  p_detail: any;

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

  isValid: any;
  phase_name = '';
  phase_detail = '';

  key_p_id: any;
  key_ps_id: any;

  mycount = [];
  showme: any;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router
  ) {}
  basePath = "/phase";

  ngOnInit() {
    console.log(new Date().toLocaleDateString("en-US"));
    this.phaseList = this.firebaseService.getData("/phase");
    this.subPhaseList = this.firebaseService.getData("/subphase");
    this.studentList = this.firebaseService.getData("/student");
    this.statusList = this.firebaseService.getData("/status");

    this.tmpToNum = "01";
    this.tmpToNum = Number(this.tmpToNum);
    this.myMax = 0;


  }

  delData(data) {
    console.log(data);
    const dataObj = {
      key: data
    };
    console.log(dataObj);
    this.firebaseService.delData(dataObj, "/phase");
    // swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1500})

  }

  delDataSubPhase(data) {
    console.log(data);
    const dataObj = {
      key: data
    };
    console.log(dataObj);
    this.firebaseService.delData(dataObj, "/subphase");
    // swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1100})
    this.subPhaseArr = [];
    this.delDataWorkAtStatus(data);
  }

  delDataWorkAtStatus(Myk) {
    this.statusList.subscribe(element1 => {
      element1.forEach(element => {
        if(Myk == element.key[4]+element.key[5]+element.key[6]+element.key[7]){
          const data = {
            key: element.key
          }
          this.firebaseService.delData(data, "/status");
        }
      });
    });
  }

  confirm_sp(data) {
    console.log(data);
    this.key_ps_id = data.key;
    this.sp_name = data.sub_phase_name;
  }

  confirm_p(data) {
    this.mycount = [];
    this.subPhaseList.subscribe(element1 => {
      element1.forEach(element => {
        if(data.key == element.key[0]+element.key[1])
        this.mycount.push(element)
      });
      if(this.mycount.length != 0) {
        this.p_name = "ต้องลบงานย่อยในงานหลักให้หมดก่อน";
        return this.showme = false;
      } else {
        this.key_p_id = data.key;
        this.p_name = data.phase_name;
        return this.showme = true;
      }
    });
  }

  setData(data) {
    this.dataThis = data;
    this.p_id = data.key;
    this.p_name = data.phase_name;
    this.p_detail = data.phase_detail;
  }

  setDataSubPhase_edit(data) {
    let t = 0;
    this.tmpArr=[];
    this.dataThis = data;
    this.key_ps_id = data.key;
    this.sp_date_assign = data.date_assign;
    this.sp_date_send = data.date_send;
    this.sp_detail = data.sub_phase_detail;
    this.sp_name = data.sub_phase_name;

    this.subPhaseList.forEach(element1 => {
    this.tmpArr=[];
      element1.forEach(element => {
          if (element.key[0] + element.key[1] == this.key_ps_id[0] + this.key_ps_id[1]) {
            this.tmpArr.push(element);
          }
      });
      // console.log(this.tmpArr);
    });
  }

  setDataSubPhase(data) {
    this.tmpArr=[];
    this.dataThis = data;
    this.key_p_id = data.key;
    // this.p_id = data.phase_id;
    // this.sp_id = data.sub_phase_id;
    this.sp_date_assign = data.date_assign;
    this.sp_date_send = data.date_send;
    this.sp_detail = data.sub_phase_detail;
    this.sp_name = data.sub_phase_name;

    this.subPhaseList.forEach(element1 => {
    this.tmpArr=[];
      element1.forEach(element => {
        let ele_p_key = element.key[0]+ element.key[1];
          if (ele_p_key == this.key_p_id) {
            this.tmpArr.push(element);
          }
      });
      // console.log(this.tmpArr);
    });
  }

  setIDPhase(data) {
    this.dataThis = data;
    this.p_id = data.key;
  }

  editData(p_id, p_name, p_detail) {
    const dataObj = {
      phase_detail: p_detail,
      phase_name: p_name,
      key: p_id
    };
    this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
    swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200})

  }

  editDataSubPhase(sp_name, sp_date_assign, sp_date_send, sp_detail) {
    this.sp_date_assign = moment(this.sp_date_assign).format('MM/DD/YY');
    this.sp_date_send = moment(this.sp_date_send).format('MM/DD/YY');
    const dataObj = {
      date_assign: this.sp_date_assign.toString(),
      date_send: this.sp_date_send.toString(),
      sub_phase_detail: sp_detail,
      // sub_phase_id: sp_id,
      sub_phase_name: sp_name
    };
    this.tmpArr.push(dataObj);
    this.firebaseService.editData(this.dataThis.key, dataObj, "/subphase");
    this.tmpArr = [];

  }


  async addDataSubPhase() {
    let mytmp = 0;
    let tmp: any;
    var keepGoing = true;
    this.myMax = 0;

    await  this.subPhaseList.forEach(async element1 => {
      if(keepGoing){
      await element1.forEach(async element => {
          tmp = Number(element.key[2]+element.key[3]);
          if (this.p_id == element.key[0]+element.key[1] && tmp > this.myMax) {
            this.myMax = tmp;
          }
        });
      keepGoing = false;

      this.myMax++;
      if(this.myMax < 10){
        this.myMax = '0' + this.myMax;
      } else{
        this.myMax = this.myMax;
      }

      this.sub_phase_id = this.myMax;
      this.date_send = moment(this.date_send).format('MM/DD/YY');
      this.date_assign = moment(this.date_assign).format('MM/DD/YY');
      console.log(this.date_assign);

      let sp_id = this.sub_phase_id;
      console.log(this.date_send.toString())
      const data = {
        key: this.p_id + this.sub_phase_id,
        date_assign: this.date_assign.toString(),
        phase_id: this.p_id,
        sub_phase_id: this.sub_phase_id,
        sub_phase_name: this.sub_phase_name,
        date_send: this.date_send.toString(),
        sub_phase_detail: this.sub_phase_detail
      };
      await this.firebaseService.addData(data, "/subphase");
      swal({type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200})

      await this.clear();
      await this.addStudentInStatus(this.p_id,sp_id);

    }
    });
  }

  async addStudentInStatus(p_id,sp_id) {
    // this.Arrlength = this.statusArr.length;
    // console.log("++++"+this.Arrlength);

    // console.log("tmptonum" + this.tmpToNum);
    let allSelect = p_id + sp_id;
    let mynum = 0;
    var keepGoing = true;
    allSelect = allSelect + "01";
    console.log("allSelect "+allSelect);

    await this.studentList.forEach(async element1 => {
      await element1.forEach(async element => {
        // console.log(element.project_id + "_" + allSelect);
        let kk = element.project_id + "_" + allSelect;
        const data = {
          key: kk,
          status_send: "No"
        };
      await  this.firebaseService.addData(data, "/status");
      });
    });
  }

  clear() {
    this.sub_phase_id = "";
    this.sub_phase_name = "";
    this.date_assign = "";
    this.date_send = "";
    this.sub_phase_detail = "";
  }

  clearAdd() {
    this.phase_name = "";
    this.phase_detail = "";
  }

  async addData() {
    let mytmp = 0;
    let tmp: any;
    var keepGoing = true;

    await  this.phaseList.forEach(async element1 => {
      if(keepGoing){
      await element1.forEach(async element => {
          tmp = Number(element.key[0]+element.key[1]);
          if (tmp > this.myMax) {
            this.myMax = tmp;
          }
        });
      keepGoing = false;

      this.myMax++;
      if(this.myMax < 10){
        this.myMax = '0' + this.myMax;
      } else{
        this.myMax = this.myMax;
      }

      this.phase_id = this.myMax;
      const data = {
        key: this.phase_id,
        phase_name: this.phase_name,
        phase_detail: this.phase_detail,
      }
      await this.firebaseService.addData(data, this.basePath);
      swal({type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1500})
      await this.clearAdd();

    }
    });
  }

  isValidForm(mySP_K) {
      let date_now = moment().format('MM/DD/YY');
      if(date_now > mySP_K.date_send){
        this.isValid = false;
      } else {
        this.isValid = true;
      }

      return this.isValid;
  }

}
