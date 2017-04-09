import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { UploadService } from "./upload/upload.service";
import { ListService } from "./details/list.service";
import { CategoryService } from "./shared/category.service";
import { HomeComponent } from "./home/home.component";
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './details/summary.component';
import { ListComponent } from './details/list.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UploadComponent,
        DetailsComponent,
        SummaryComponent,
        ListComponent
    ],
    providers: [
        UploadService,
        ListService,
        CategoryService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
