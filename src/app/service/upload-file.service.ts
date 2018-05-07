import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { FileUpload } from '../upload/fileupload';
import { FirebaseListObservable } from "angularfire2/database-deprecated";


@Injectable()
export class UploadFileService {

  constructor(private db: AngularFireDatabase) {}

  private basePath = '/uploads';
  fileUploads: FirebaseListObservable<FileUpload[]>;

  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number}, k) {
    let file_name = k + ".pdf";
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${file_name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL
        fileUpload.name = k+".pdf"
        this.saveFileData(fileUpload, k)
        console.log(k+".pdf");



      }
    );
  }

  private saveFileData(fileUpload: FileUpload, k) {
    this.db.object('/status' + '/' + k).update(fileUpload);
  }



  ///////////////////////////////// ..

  // getFileUploads(query = {}) {
  //   this.fileUploads = this.db.list(this.basePath, {
  //   query: query
  //   });
  //   return this.fileUploads
  // }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.$key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name)
      })
      .catch(error => console.log(error))
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key)
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref()
    storageRef.child(`${this.basePath}/${name}`).delete()
  }

}

