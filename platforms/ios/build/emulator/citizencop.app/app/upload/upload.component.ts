import { Component, OnInit } from "@angular/core";
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";
import { UploadService } from './upload.service';
import { UploadItem } from './uploadItem';
import * as fs from 'file-system'
import * as imageSource from "image-source"
import {
  ImageFormat
} from 'ui/enums'
let savePath = fs.knownFolders.documents().path;


@Component({
    selector: "ns-upload",
    moduleId: module.id,
    templateUrl: "./upload.component.html",
})
export class UploadComponent implements OnInit {
    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;
    public model: UploadItem = {
        title: '',
        description: '',
        category: '',
        imageTaken: {}
    };
    public cameraActionCompleted: boolean = false;
    categories: string[];
    fileLocation: string;
    constructor(private uploadService: UploadService) { }
    activateCamera(): void {
        this.cameraActionCompleted = false;
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        camera.takePicture(options)
            .then(imageObj => {
                this.imageTaken = imageObj;
                this.cameraActionCompleted = true;
                imageSource.fromAsset(imageObj).then(res => {
                    let fileName = 'img_' + new Date().getTime() + '_' + '.png';
                    this.fileLocation = fs.path.join( savePath, fileName );
                    res.saveToFile(this.fileLocation, ImageFormat.png);
                });
                
                
            }).catch(err => {
                this.cameraActionCompleted = true;
                console.log(err.message);
            });
    }
    ngOnInit(): void {
        this.categories = this.uploadService.getCategories();
        this.activateCamera();
    }
    takePicture(): void {
        console.log('click wored');
        this.activateCamera();
    }
    submitPicture(): void {
        console.log('submitted');
        this.model.imageTaken = this.imageTaken;
        this.uploadService.submitImage(this.model, this.fileLocation);
    }
}
