import { Component } from "@angular/core";
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    constructor(){
        camera.requestPermissions();
    }
}
