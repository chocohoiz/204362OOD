import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class LoginService {
  myList: any;

  constructor(private db: AngularFireDatabase) { }

  getList(basePath): FirebaseListObservable<any[]> {
    this.myList =  this.db.list(basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.myList;
  }
}
