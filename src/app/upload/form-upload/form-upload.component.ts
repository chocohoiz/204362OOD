import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../service/upload-file.service';
import { FileUpload } from '../fileupload';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
  }

  selectFile(event) {
    // this.selectedFiles = event.target.files;


    const file = event.target.files.item(0)
    if (file.type.match('application.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  // upload() {
  //   // const file = this.selectedFiles.item(0)
  //   // this.currentFileUpload = new FileUpload(file);
  //   // this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress)

  //   const file = this.selectedFiles.item(0)
  //   this.selectedFiles = undefined

  //   this.currentFileUpload = new FileUpload(file);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress)
  // }


}