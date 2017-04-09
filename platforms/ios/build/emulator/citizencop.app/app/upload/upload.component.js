"use strict";
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var upload_service_1 = require("./upload.service");
var fs = require("file-system");
var imageSource = require("image-source");
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
            imageSource.fromAsset(imageObj).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBOEM7QUFDOUMsbURBQWlEO0FBRWpELGdDQUFpQztBQUNqQywwQ0FBMkM7QUFDM0Msa0NBRWlCO0FBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBUWhELElBQWEsZUFBZTtJQWV4Qix5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiekMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFVBQUssR0FBZTtZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDO1FBQ0ssMEJBQXFCLEdBQVksS0FBSyxDQUFDO0lBR00sQ0FBQztJQUNyRCx3Q0FBYyxHQUFkO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDcEMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDVixLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMzQixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDcEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDNUQsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7Z0JBQ3ZELEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdUNBQWEsR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7cUNBZ0JxQyw4QkFBYTtHQWZ2QyxlQUFlLENBcUQzQjtBQXJEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwiaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vdXBsb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkSXRlbSB9IGZyb20gJy4vdXBsb2FkSXRlbSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmaWxlLXN5c3RlbSdcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJpbWFnZS1zb3VyY2VcIlxuaW1wb3J0IHtcbiAgSW1hZ2VGb3JtYXRcbn0gZnJvbSAndWkvZW51bXMnXG5sZXQgc2F2ZVBhdGggPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy11cGxvYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdXBsb2FkLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGltYWdlVGFrZW46IEltYWdlQXNzZXQ7XG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBrZWVwQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMzAwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgbW9kZWw6IFVwbG9hZEl0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgIGltYWdlVGFrZW46IHt9XG4gICAgfTtcbiAgICBwdWJsaWMgY2FtZXJhQWN0aW9uQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gICAgZmlsZUxvY2F0aW9uOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7IH1cbiAgICBhY3RpdmF0ZUNhbWVyYSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW1lcmFBY3Rpb25Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRoaXMua2VlcEFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5XG4gICAgICAgIH07XG4gICAgICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oaW1hZ2VPYmogPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbiA9IGltYWdlT2JqO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQWN0aW9uQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VPYmopLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gJ2ltZ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyAnLnBuZyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxvY2F0aW9uID0gZnMucGF0aC5qb2luKCBzYXZlUGF0aCwgZmlsZU5hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNhdmVUb0ZpbGUodGhpcy5maWxlTG9jYXRpb24sIEltYWdlRm9ybWF0LnBuZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQWN0aW9uQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMudXBsb2FkU2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVDYW1lcmEoKTtcbiAgICB9XG4gICAgdGFrZVBpY3R1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayB3b3JlZCcpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlQ2FtZXJhKCk7XG4gICAgfVxuICAgIHN1Ym1pdFBpY3R1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcbiAgICAgICAgdGhpcy5tb2RlbC5pbWFnZVRha2VuID0gdGhpcy5pbWFnZVRha2VuO1xuICAgICAgICB0aGlzLnVwbG9hZFNlcnZpY2Uuc3VibWl0SW1hZ2UodGhpcy5tb2RlbCwgdGhpcy5maWxlTG9jYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==