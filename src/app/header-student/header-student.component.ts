import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-student',
  templateUrl: './header-student.component.html',
  styleUrls: ['./header-student.component.css']
})
export class HeaderStudentComponent implements OnInit {
  wikiList: any;
  key: any;
  studentList: any;
  studentArr = [];
  stu_name: any;

  constructor(@Inject(FirebaseService)  private firebaseService: FirebaseService, private router: Router) {}
  basePath = '/student';

  ngOnInit() {
     this.studentList = this.firebaseService.getData(this.basePath);
     const key1 = localStorage.getItem('key');
     this.key = key1;

     this.studentList.forEach(data1 => {
      data1.forEach(data => {
        if(data.key == this.key){
          this.stu_name = data.student_name;
        }
      });
    });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
