"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var upload_service_1 = require("./upload/upload.service");
var list_service_1 = require("./details/list.service");
var category_service_1 = require("./shared/category.service");
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
            list_service_1.ListService,
            category_service_1.CategoryService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQWtFO0FBQ2xFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQXdEO0FBQ3hELHVEQUFxRDtBQUNyRCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBQ3RELDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFDL0QsaUVBQStEO0FBQy9ELDJEQUF5RDtBQTRCekQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixvQ0FBZ0I7WUFDaEIsb0NBQWdCO1lBQ2hCLDhCQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsOEJBQWE7WUFDYiwwQkFBVztZQUNYLGtDQUFlO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gXCIuL3VwbG9hZC91cGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9kZXRhaWxzL2xpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2NhdGVnb3J5LnNlcnZpY2VcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy9zdW1tYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzL2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFVwbG9hZENvbXBvbmVudCxcbiAgICAgICAgRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgU3VtbWFyeUNvbXBvbmVudCxcbiAgICAgICAgTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVwbG9hZFNlcnZpY2UsXG4gICAgICAgIExpc3RTZXJ2aWNlLFxuICAgICAgICBDYXRlZ29yeVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19