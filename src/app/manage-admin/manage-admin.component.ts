import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import swal from 'sweetalert2'


@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  wikiList: any;

  tea_id: any;
  tea_pass: any;
  tea_name: any;
  dataThis: any;

  teacher_id = '';
  teacher_name = '';
  password = '';

  constructor(@Inject(FirebaseService)  private firebaseService: FirebaseService, private router: Router) {}
  basePath = '/teacher';

  ngOnInit() {
     this.wikiList = this.firebaseService.getData(this.basePath);
  }

  setAddData() {
    this.teacher_name = '';
    this.teacher_id = '';
    this.password = '';
  }

  async addData() {
    let Hashing_pass = Md5.hashStr("1234");

    const data = {
      key: this.teacher_id,
      teacher_name: this.teacher_name,
      password: Hashing_pass
    }
    await this.firebaseService.addData(data, this.basePath);
    await this.clear();
    await this.router.navigate(['/ManageAdmin']);
    swal({type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1500})


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
    this.router.navigate(["/ManageAdmin"]);
    swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1500})

  }


  setData(data) {
    this.dataThis = data;
    this.tea_id = data.key;
    this.tea_name = data.teacher_name;
    this.tea_pass = data.password;
  }

  editData(tea_id, tea_name, tea_pass) {
    let Hashing_pass = Md5.hashStr(tea_pass);

    const dataObj = {
      password : tea_pass,
      teacher_id: tea_id,
      teacher_name : Hashing_pass
    };
    this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
    this.router.navigate(['/ManageAdmin']);
    swal({type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1500})

  }

  confirm(data) {
    this.teacher_id = data.key;
  }
}
