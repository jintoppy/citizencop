import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class UploadService {
    private categories = new Array<string>(
        'Traffic',
        'Bus',
        'Cab',
        'Littering',
        'Public Place',
        'Public Smoking' 
    )

    getCategories(): string[] {
        return this.categories;
    }

    submitImage(data, fileLocation){
        let name = data.title.replace(" ", "_").toLowerCase();
        console.log(data.imageTaken);

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
                console.log("creatted", res.key);
            })
          },
          function (error) {
            console.log("File upload error: " + error);
          }
      );
    }
}