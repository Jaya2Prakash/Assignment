import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
// import { UploaderOptions } from 'ngx-uploader';


const URL = 'http://localhost:3000/comments';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  

  uploader:FileUploader|any
  // options: UploaderOptions|any;

  ngOnInit(): void {
  
    // this.options = { concurrency: 1, maxUploads: 3, maxFileSize: 1000000 };

  
   this.uploader = new FileUploader({
    
    url: URL, 
    disableMultipart : true,
    
    // allowedFileType: ['image'],
    queueLimit:3,
    // autoUpload:true,
    allowedMimeType : [ 'application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'], 
    // removeAfterUpload:true
    
    
    });

    this.uploader.onWhenAddingFileFailed = (fileItem:any) => {
      
      alert("Invalid file format....(Required only in .pdf)")
      
    }

    this.uploader.onWhenAddingFileFailed = (item:any, filter:any) => {
      let message = '';
      switch (filter.name) {
        case 'queueLimit':
          message = "Max 3 files can upload in a single time, After upload need to remove the files from the queue ";
          break;

        default:
          message = "Invalid file type...................(Required only in .pdf/.doc)";
          break;
      }
    
      alert(message);
    }

    this.uploader.onAfterAddingFile = (item:any) => {
      item.remove();
      if (this.uploader.queue.filter((f:any) => f._file.name == item._file.name).length == 0) {
      this.uploader.queue.push(item);
      } else {
      alert("file duplicated");
      }
      }

      // var xlUp = -4162;
      // var sheet = this.uploader.Workbooks.Open(filePath).ActiveSheet;
      // alert(sheet.cells(sheet.rows.count,1).end(xlUp).row);
   
      
    
  }


  

  // public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;

  // fileObject: any;


  // public fileOverBase(e:any):void {
  //   this.hasBaseDropZoneOver = e; 
  // }
 
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }
}
