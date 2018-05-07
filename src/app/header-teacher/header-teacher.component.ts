import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-teacher',
  templateUrl: './header-teacher.component.html',
  styleUrls: ['./header-teacher.component.css']
})
export class HeaderTeacherComponent implements OnInit {
  wikiList: any;
  allkey: FirebaseListObservable<any[]>;
  key: any;



  constructor(@Inject(FirebaseService)  private firebaseService: FirebaseService, private router: Router) {}
  basePath = '/teacher';

  ngOnInit() {
     this.wikiList = this.firebaseService.getData(this.basePath);
     const key1 = localStorage.getItem('key');
    //  localStorage.clear()
    //  console.log(key1);
    //  console.log();

    this.key = key1;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
