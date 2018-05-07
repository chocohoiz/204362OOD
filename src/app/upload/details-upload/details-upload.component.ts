import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../fileupload';
import { UploadFileService } from '../../service/upload-file.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload)
  }

}
