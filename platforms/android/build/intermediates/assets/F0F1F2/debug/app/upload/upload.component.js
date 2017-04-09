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
        this.categories = this.uploadService.getCategories();
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
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCw0Q0FBOEM7QUFDOUMsbURBQWlEO0FBRWpELGdDQUFpQztBQUNqQyw2Q0FBeUM7QUFDekMsa0NBRWlCO0FBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBUWhELElBQWEsZUFBZTtJQWdCeEIseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZHpDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixVQUFLLEdBQWU7WUFDdkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0ssMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBRzlDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztJQUNjLENBQUM7SUFDckQsd0NBQWMsR0FBZDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3BDLENBQUM7UUFDRixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQy9CLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUFDO2dCQUN2RCxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQztRQUdQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHVDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBeERZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7cUNBaUJxQyw4QkFBYTtHQWhCdkMsZUFBZSxDQXdEM0I7QUF4RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcImltYWdlLWFzc2V0XCI7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL3VwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IFVwbG9hZEl0ZW0gfSBmcm9tICcuL3VwbG9hZEl0ZW0nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZmlsZS1zeXN0ZW0nXG5pbXBvcnQge0ltYWdlU291cmNlfSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQge1xuICBJbWFnZUZvcm1hdFxufSBmcm9tICd1aS9lbnVtcydcbmxldCBzYXZlUGF0aCA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXVwbG9hZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi91cGxvYWQuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaW1hZ2VUYWtlbjogSW1hZ2VBc3NldDtcbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMzAwO1xuICAgIHB1YmxpYyBtb2RlbDogVXBsb2FkSXRlbSA9IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgaW1hZ2U6IHt9XG4gICAgfTtcbiAgICBwdWJsaWMgY2FtZXJhQWN0aW9uQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gICAgZmlsZUxvY2F0aW9uOiBzdHJpbmc7XG4gICAgc3VibWlzc2lvbkluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UpIHsgfVxuICAgIGFjdGl2YXRlQ2FtZXJhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbWVyYUFjdGlvbkNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8sXG4gICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICAgICAgfTtcbiAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihpbWFnZU9iaiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRha2VuID0gaW1hZ2VPYmo7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBY3Rpb25Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlT2JqKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9ICdpbWdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgJy5wbmcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVMb2NhdGlvbiA9IGZzLnBhdGguam9pbiggc2F2ZVBhdGgsIGZpbGVOYW1lICk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zYXZlVG9GaWxlKHRoaXMuZmlsZUxvY2F0aW9uLCBJbWFnZUZvcm1hdC5wbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFjdGlvbkNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLnVwbG9hZFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlQ2FtZXJhKCk7XG4gICAgfVxuICAgIHRha2VQaWN0dXJlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgd29yZWQnKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUNhbWVyYSgpO1xuICAgIH1cbiAgICBzdWJtaXRQaWN0dXJlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vZGVsLmltYWdlID0gdGhpcy5pbWFnZVRha2VuO1xuICAgICAgICB0aGlzLnVwbG9hZFNlcnZpY2Uuc3VibWl0SW1hZ2UodGhpcy5tb2RlbCwgdGhpcy5maWxlTG9jYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==