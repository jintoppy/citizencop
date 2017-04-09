import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from '@angular/router';

@Injectable()
export class UploadService {
    constructor(private router: Router){
        
    }
    submitImage(data, fileLocation){
        let name = data.title.replace(" ", "_").toLowerCase();
        firebase.uploadFile({
        remoteFullPath: `uploads/images/${name}`,
        localFullPath: fileLocation,
        // get notified of file upload progress
        onProgress: function(status) {
          console.log("Uploaded fraction: " + status.fractionCompleted);
          console.log("Percentage complete: " + status.percentageCompleted);
        }
      }).then(
          (uploadedFile) => {
            console.log("File uploaded: " + JSON.stringify(uploadedFile));
            firebase.push(
                  '/FIR',
                  {
                    title: data.title,
                    description: data.description,
                    category: data.category,
                    image: uploadedFile
                  }
            ).then(res => {
                this.router.navigateByUrl(`/details/${res.key}`);
            })
          },
          function (error) {
            console.log("File upload error: " + error);
          }
      );
    }
}