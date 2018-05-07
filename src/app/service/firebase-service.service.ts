import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseService {
  // wikiList: AngularFireList<any[]>;
  allkey: FirebaseListObservable<any[]>;

  // basePath = '/wikis';
  myList: any;

  constructor(private db: AngularFireDatabase) { }
  getData(basePath): FirebaseListObservable<any[]> {
    this.myList =  this.db.list(basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.myList;
  }

  addData(data, basePath) {
    const key = data.key;
    delete data.key;
    this.db.list(basePath).set(key, data);
    return this.myList;
  }

  delData(data, basePath) {
    this.db.list(basePath).remove(data.key);
  }

  editData(k, data, basePath) {
    this.db.object(basePath + '/' + k).update(data);
    // console.log('aaacsdfdf');
    // console.log(data);
  }


}
