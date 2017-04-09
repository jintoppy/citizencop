import { Component, OnInit } from "@angular/core";
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";
import { UploadService } from './upload.service';
import { CategoryService } from "../shared/category.service";
import { UploadItem } from './uploadItem';
import * as fs from 'file-system'
import {ImageSource} from "image-source";
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
        image: {}
    };
    public cameraActionCompleted: boolean = false;
    categories: string[];
    fileLocation: string;
    submissionInProgress: boolean = false;
    constructor(private uploadService: UploadService, 
                private categoryService: CategoryService) { }
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
                let source = new ImageSource();
                source.fromAsset(imageObj).then(res => {
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
        this.categories = this.categoryService.getCategories();
        this.activateCamera();
    }
    takePicture(): void {
        console.log('click wored');
        this.activateCamera();
    }
    submitPicture(): void {
        console.log('submitted');
        this.submissionInProgress = true;
        this.model.image = this.imageTaken;
        this.uploadService.submitImage(this.model, this.fileLocation);
    }
}
