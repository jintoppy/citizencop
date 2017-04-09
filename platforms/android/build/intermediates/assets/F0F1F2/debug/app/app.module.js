"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var upload_service_1 = require("./upload/upload.service");
var list_service_1 = require("./details/list.service");
var home_component_1 = require("./home/home.component");
var upload_component_1 = require("./upload/upload.component");
var details_component_1 = require("./details/details.component");
var summary_component_1 = require("./details/summary.component");
var list_component_1 = require("./details/list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            upload_component_1.UploadComponent,
            details_component_1.DetailsComponent,
            summary_component_1.SummaryComponent,
            list_component_1.ListComponent
        ],
        providers: [
            upload_service_1.UploadService,
            list_service_1.ListService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQWtFO0FBQ2xFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQXdEO0FBQ3hELHVEQUFxRDtBQUNyRCx3REFBc0Q7QUFDdEQsOERBQTREO0FBQzVELGlFQUErRDtBQUMvRCxpRUFBK0Q7QUFDL0QsMkRBQXlEO0FBMkJ6RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF6QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLCtCQUF1QjtTQUMxQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixrQ0FBZTtZQUNmLG9DQUFnQjtZQUNoQixvQ0FBZ0I7WUFDaEIsOEJBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCw4QkFBYTtZQUNiLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBVcGxvYWRTZXJ2aWNlIH0gZnJvbSBcIi4vdXBsb2FkL3VwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gXCIuL2RldGFpbHMvbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi91cGxvYWQvdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMvc3VtbWFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy9saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBVcGxvYWRDb21wb25lbnQsXG4gICAgICAgIERldGFpbHNDb21wb25lbnQsXG4gICAgICAgIFN1bW1hcnlDb21wb25lbnQsXG4gICAgICAgIExpc3RDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVcGxvYWRTZXJ2aWNlLFxuICAgICAgICBMaXN0U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=