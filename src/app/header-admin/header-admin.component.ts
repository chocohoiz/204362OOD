import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from '../service/firebase-service.service';
import { AppRoutingModule } from './../app-routing.module';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  wikiList: any;
  key: any;
  adminList: any;
  adminArr = [];

  constructor(@Inject(FirebaseService)  private firebaseService: FirebaseService, private router: Router) {}
  basePath = '/admin';

  ngOnInit() {
     this.adminList = this.firebaseService.getData(this.basePath);
     const key1 = localStorage.getItem('key');
     this.key = key1;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
