import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FileUpload } from '../fileupload';
import { UploadFileService } from '../../service/upload-file.service';


@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})

export class ListUploadComponent implements OnInit {

  fileUploads: FirebaseListObservable<FileUpload[]>;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
    // this.fileUploads = this.uploadService.getFileUploads({limitToLast: 6})
  }
}
