"use strict";
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var upload_service_1 = require("./upload.service");
var category_service_1 = require("../shared/category.service");
var fs = require("file-system");
var image_source_1 = require("image-source");
var enums_1 = require("ui/enums");
var savePath = fs.knownFolders.documents().path;
var UploadComponent = (function () {
    function UploadComponent(uploadService, categoryService) {
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.model = {
            title: '',
            description: '',
            category: '',
            image: {}
        };
        this.cameraActionCompleted = false;
        this.submissionInProgress = false;
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
        this.categories = this.categoryService.getCategories();
        this.activateCamera();
    };
    UploadComponent.prototype.takePicture = function () {
        console.log('click wored');
        this.activateCamera();
    };
    UploadComponent.prototype.submitPicture = function () {
        console.log('submitted');
        this.submissionInProgress = true;
        this.model.image = this.imageTaken;
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
    __metadata("design:paramtypes", [upload_service_1.UploadService,
        category_service_1.CategoryService])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBOEM7QUFDOUMsbURBQWlEO0FBQ2pELCtEQUE2RDtBQUU3RCxnQ0FBaUM7QUFDakMsNkNBQXlDO0FBQ3pDLGtDQUVpQjtBQUNqQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztBQVFoRCxJQUFhLGVBQWU7SUFnQnhCLHlCQUFvQixhQUE0QixFQUM1QixlQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFmN0Msa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFVBQUssR0FBZTtZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFDSywwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFHOUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO0lBRWtCLENBQUM7SUFDekQsd0NBQWMsR0FBZDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3BDLENBQUM7UUFDRixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQy9CLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUFDO2dCQUN2RCxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQztRQUdQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHVDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7cUNBaUJxQyw4QkFBYTtRQUNYLGtDQUFlO0dBakIzQyxlQUFlLENBeUQzQjtBQXpEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwiaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4vdXBsb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXRlZ29yeS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVcGxvYWRJdGVtIH0gZnJvbSAnLi91cGxvYWRJdGVtJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZpbGUtc3lzdGVtJ1xuaW1wb3J0IHtJbWFnZVNvdXJjZX0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHtcbiAgSW1hZ2VGb3JtYXRcbn0gZnJvbSAndWkvZW51bXMnXG5sZXQgc2F2ZVBhdGggPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy11cGxvYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdXBsb2FkLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGltYWdlVGFrZW46IEltYWdlQXNzZXQ7XG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBrZWVwQXNwZWN0UmF0aW86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMzAwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgbW9kZWw6IFVwbG9hZEl0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgIGltYWdlOiB7fVxuICAgIH07XG4gICAgcHVibGljIGNhbWVyYUFjdGlvbkNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICAgIGZpbGVMb2NhdGlvbjogc3RyaW5nO1xuICAgIHN1Ym1pc3Npb25JblByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSB7IH1cbiAgICBhY3RpdmF0ZUNhbWVyYSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW1lcmFBY3Rpb25Db21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRoaXMua2VlcEFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5XG4gICAgICAgIH07XG4gICAgICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oaW1hZ2VPYmogPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbiA9IGltYWdlT2JqO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQWN0aW9uQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgICAgICAgICAgc291cmNlLmZyb21Bc3NldChpbWFnZU9iaikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSAnaW1nXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArICcucG5nJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlTG9jYXRpb24gPSBmcy5wYXRoLmpvaW4oIHNhdmVQYXRoLCBmaWxlTmFtZSApO1xuICAgICAgICAgICAgICAgICAgICByZXMuc2F2ZVRvRmlsZSh0aGlzLmZpbGVMb2NhdGlvbiwgSW1hZ2VGb3JtYXQucG5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBY3Rpb25Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yeVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlQ2FtZXJhKCk7XG4gICAgfVxuICAgIHRha2VQaWN0dXJlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgd29yZWQnKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUNhbWVyYSgpO1xuICAgIH1cbiAgICBzdWJtaXRQaWN0dXJlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vZGVsLmltYWdlID0gdGhpcy5pbWFnZVRha2VuO1xuICAgICAgICB0aGlzLnVwbG9hZFNlcnZpY2Uuc3VibWl0SW1hZ2UodGhpcy5tb2RlbCwgdGhpcy5maWxlTG9jYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==