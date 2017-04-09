"use strict";
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var upload_service_1 = require("./upload.service");
var fs = require("file-system");
var image_source_1 = require("image-source");
var enums_1 = require("ui/enums");
var savePath = fs.knownFolders.documents().path;
var UploadComponent = (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.model = {
            title: '',
            description: '',
            category: '',
            imageTaken: {}
        };
        this.cameraActionCompleted = false;
    }
    UploadComponent.prototype.activateCamera = function () {
        var _this = this;
        this.cameraActionCompleted = false;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        camera.takePicture(options)
            .then(function (imageObj) {
            _this.imageTaken = imageObj;
            _this.cameraActionCompleted = true;
            var source = new image_source_1.ImageSource();
            source.fromAsset(imageObj).then(function (res) {
                var fileName = 'img_' + new Date().getTime() + '_' + '.png';
                _this.fileLocation = fs.path.join(savePath, fileName);
                res.saveToFile(_this.fileLocation, enums_1.ImageFormat.png);
            });
        }).catch(function (err) {
            _this.cameraActionCompleted = true;
            console.log(err.message);
        });
    };
    UploadComponent.prototype.ngOnInit = function () {
        this.categories = this.uploadService.getCategories();
        this.activateCamera();
    };
    UploadComponent.prototype.takePicture = function () {
        console.log('click wored');
        this.activateCamera();
    };
    UploadComponent.prototype.submitPicture = function () {
        console.log('submitted');
        this.model.imageTaken = this.imageTaken;
        this.uploadService.submitImage(this.model, this.fileLocation);
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        selector: "ns-upload",
        moduleId: module.id,
        templateUrl: "./upload.component.html",
    }),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBOEM7QUFDOUMsbURBQWlEO0FBRWpELGdDQUFpQztBQUNqQyw2Q0FBeUM7QUFDekMsa0NBRWlCO0FBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBUWhELElBQWEsZUFBZTtJQWV4Qix5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiekMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFVBQUssR0FBZTtZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDO1FBQ0ssMEJBQXFCLEdBQVksS0FBSyxDQUFDO0lBR00sQ0FBQztJQUNyRCx3Q0FBYyxHQUFkO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDcEMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMzQixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDNUQsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7Z0JBQ3ZELEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdUNBQWEsR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7cUNBZ0JxQyw4QkFBYTtHQWZ2QyxlQUFlLENBc0QzQjtBQXREWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwiaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vdXBsb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkSXRlbSB9IGZyb20gJy4vdXBsb2FkSXRlbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmaWxlLXN5c3RlbSdcbmltcG9ydCB7SW1hZ2VTb3VyY2V9IGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7XG4gIEltYWdlRm9ybWF0XG59IGZyb20gJ3VpL2VudW1zJ1xubGV0IHNhdmVQYXRoID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGg7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdXBsb2FkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3VwbG9hZC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpbWFnZVRha2VuOiBJbWFnZUFzc2V0O1xuICAgIHB1YmxpYyBzYXZlVG9HYWxsZXJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMga2VlcEFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIG1vZGVsOiBVcGxvYWRJdGVtID0ge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgICBpbWFnZVRha2VuOiB7fVxuICAgIH07XG4gICAgcHVibGljIGNhbWVyYUFjdGlvbkNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICAgIGZpbGVMb2NhdGlvbjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXBsb2FkU2VydmljZTogVXBsb2FkU2VydmljZSkgeyB9XG4gICAgYWN0aXZhdGVDYW1lcmEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FtZXJhQWN0aW9uQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0aGlzLmtlZXBBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeVxuICAgICAgICB9O1xuICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKGltYWdlT2JqID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4gPSBpbWFnZU9iajtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFjdGlvbkNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VPYmopLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gJ2ltZ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyAnLnBuZyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxvY2F0aW9uID0gZnMucGF0aC5qb2luKCBzYXZlUGF0aCwgZmlsZU5hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNhdmVUb0ZpbGUodGhpcy5maWxlTG9jYXRpb24sIEltYWdlRm9ybWF0LnBuZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQWN0aW9uQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMudXBsb2FkU2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVDYW1lcmEoKTtcbiAgICB9XG4gICAgdGFrZVBpY3R1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayB3b3JlZCcpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlQ2FtZXJhKCk7XG4gICAgfVxuICAgIHN1Ym1pdFBpY3R1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcbiAgICAgICAgdGhpcy5tb2RlbC5pbWFnZVRha2VuID0gdGhpcy5pbWFnZVRha2VuO1xuICAgICAgICB0aGlzLnVwbG9hZFNlcnZpY2Uuc3VibWl0SW1hZ2UodGhpcy5tb2RlbCwgdGhpcy5maWxlTG9jYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==