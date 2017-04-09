"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var UploadService = (function () {
    function UploadService() {
        this.categories = new Array('Traffic', 'Bus', 'Cab', 'Littering', 'Public Place', 'Public Smoking');
    }
    UploadService.prototype.getCategories = function () {
        return this.categories;
    };
    UploadService.prototype.submitImage = function (data, fileLocation) {
        var name = data.title.replace(" ", "_").toLowerCase();
        console.log(data.imageTaken);
        firebase.uploadFile({
            remoteFullPath: "uploads/images/" + name,
            localFullPath: fileLocation,
            // get notified of file upload progress
            onProgress: function (status) {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                console.log("Percentage complete: " + status.percentageCompleted);
            }
        }).then(function (uploadedFile) {
            console.log("File uploaded: " + JSON.stringify(uploadedFile));
            firebase.push('/FIR', {
                title: data.title,
                description: data.description,
                category: data.category,
                image: uploadedFile
            }).then(function (res) {
                console.log("creatted", res.key);
            });
        }, function (error) {
            console.log("File upload error: " + error);
        });
    };
    return UploadService;
}());
UploadService = __decorate([
    core_1.Injectable()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHVEQUEwRDtBQUcxRCxJQUFhLGFBQWE7SUFEMUI7UUFFWSxlQUFVLEdBQUcsSUFBSSxLQUFLLENBQzFCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZ0JBQWdCLENBQ25CLENBQUE7SUFzQ0wsQ0FBQztJQXBDRyxxQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFJLEVBQUUsWUFBWTtRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0IsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNwQixjQUFjLEVBQUUsb0JBQWtCLElBQU07WUFDeEMsYUFBYSxFQUFFLFlBQVk7WUFDM0IsdUNBQXVDO1lBQ3ZDLFVBQVUsRUFBRSxVQUFTLE1BQU07Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDcEUsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxZQUFZO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUQsUUFBUSxDQUFDLElBQUksQ0FDUCxNQUFNLEVBQ047Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsS0FBSyxFQUFFLFlBQVk7YUFDcEIsQ0FDTixDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUNELFVBQVUsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0E4Q3pCO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuICAgIHByaXZhdGUgY2F0ZWdvcmllcyA9IG5ldyBBcnJheTxzdHJpbmc+KFxuICAgICAgICAnVHJhZmZpYycsXG4gICAgICAgICdCdXMnLFxuICAgICAgICAnQ2FiJyxcbiAgICAgICAgJ0xpdHRlcmluZycsXG4gICAgICAgICdQdWJsaWMgUGxhY2UnLFxuICAgICAgICAnUHVibGljIFNtb2tpbmcnIFxuICAgIClcblxuICAgIGdldENhdGVnb3JpZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xuICAgIH1cblxuICAgIHN1Ym1pdEltYWdlKGRhdGEsIGZpbGVMb2NhdGlvbil7XG4gICAgICAgIGxldCBuYW1lID0gZGF0YS50aXRsZS5yZXBsYWNlKFwiIFwiLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5pbWFnZVRha2VuKTtcblxuICAgICAgICBmaXJlYmFzZS51cGxvYWRGaWxlKHtcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IGB1cGxvYWRzL2ltYWdlcy8ke25hbWV9YCxcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogZmlsZUxvY2F0aW9uLFxuICAgICAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgKHVwbG9hZGVkRmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xuICAgICAgICAgICAgZmlyZWJhc2UucHVzaChcbiAgICAgICAgICAgICAgICAgICcvRklSJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVwbG9hZGVkRmlsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdHRlZFwiLCByZXMua2V5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxufSJdfQ==