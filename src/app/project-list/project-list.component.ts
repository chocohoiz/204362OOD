import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  studentList: any;
  projectList: any;

  studentArr = [];
  projectArr = [];
  objArr = [];
  mycount:number = 0;

  constructor(
    @Inject(FirebaseService) private firebaseService: FirebaseService,
    private router: Router
  ) {
    this.studentList = this.firebaseService.getData("/student");
    this.projectList = this.firebaseService.getData("/project");

    this.projectList.subscribe(element1 => {
      element1.forEach(element => {
        this.projectArr.push(element);
      });

      this.studentList.subscribe(element1 => {
        element1.forEach(element => {
          for (var t=0; t< this.projectArr.length; t++){
            if(element.project_id == this.projectArr[t].key){
              this.mycount = this.mycount + 1;
              console.log(element.project_id);
              const dataObj = {
                no: this.mycount,
                stu_key: element.key,
                stu_name: element.student_name,
                pj_name_th: this.projectArr[t].name_th,
                pj_name_en: this.projectArr[t].name_en
              }
              console.log(dataObj);
              this.objArr.push(dataObj);
            }
          }
        });
      });

    });

  }

  ngOnInit() {



  }

}
