"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var UploadService = (function () {
    function UploadService(router) {
        this.router = router;
        this.categories = new Array('Traffic', 'Bus', 'Cab', 'Littering', 'Public Place', 'Public Smoking');
    }
    UploadService.prototype.getCategories = function () {
        return this.categories;
    };
    UploadService.prototype.submitImage = function (data, fileLocation) {
        var _this = this;
        var name = data.title.replace(" ", "_").toLowerCase();
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
                _this.router.navigateByUrl("/details/" + res.key);
            });
        }, function (error) {
            console.log("File upload error: " + error);
        });
    };
    return UploadService;
}());
UploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHVEQUEwRDtBQUMxRCwwQ0FBeUM7QUFHekMsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUcxQixlQUFVLEdBQUcsSUFBSSxLQUFLLENBQzFCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZ0JBQWdCLENBQ25CLENBQUE7SUFSRCxDQUFDO0lBVUQscUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksSUFBSSxFQUFFLFlBQVk7UUFBOUIsaUJBNkJDO1FBNUJHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0RCxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3BCLGNBQWMsRUFBRSxvQkFBa0IsSUFBTTtZQUN4QyxhQUFhLEVBQUUsWUFBWTtZQUMzQix1Q0FBdUM7WUFDdkMsVUFBVSxFQUFFLFVBQVMsTUFBTTtnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNwRSxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLFlBQVk7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM5RCxRQUFRLENBQUMsSUFBSSxDQUNQLE1BQU0sRUFDTjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixLQUFLLEVBQUUsWUFBWTthQUNwQixDQUNOLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDTixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFZLEdBQUcsQ0FBQyxHQUFLLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFDRCxVQUFVLEtBQUs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBRW1CLGVBQU07R0FEekIsYUFBYSxDQStDekI7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xuICAgICAgICBcbiAgICB9XG4gICAgcHJpdmF0ZSBjYXRlZ29yaWVzID0gbmV3IEFycmF5PHN0cmluZz4oXG4gICAgICAgICdUcmFmZmljJyxcbiAgICAgICAgJ0J1cycsXG4gICAgICAgICdDYWInLFxuICAgICAgICAnTGl0dGVyaW5nJyxcbiAgICAgICAgJ1B1YmxpYyBQbGFjZScsXG4gICAgICAgICdQdWJsaWMgU21va2luZycgXG4gICAgKVxuXG4gICAgZ2V0Q2F0ZWdvcmllcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXM7XG4gICAgfVxuXG4gICAgc3VibWl0SW1hZ2UoZGF0YSwgZmlsZUxvY2F0aW9uKXtcbiAgICAgICAgbGV0IG5hbWUgPSBkYXRhLnRpdGxlLnJlcGxhY2UoXCIgXCIsIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBmaXJlYmFzZS51cGxvYWRGaWxlKHtcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IGB1cGxvYWRzL2ltYWdlcy8ke25hbWV9YCxcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogZmlsZUxvY2F0aW9uLFxuICAgICAgICAvLyBnZXQgbm90aWZpZWQgb2YgZmlsZSB1cGxvYWQgcHJvZ3Jlc3NcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRlZCBmcmFjdGlvbjogXCIgKyBzdGF0dXMuZnJhY3Rpb25Db21wbGV0ZWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVyY2VudGFnZSBjb21wbGV0ZTogXCIgKyBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgKHVwbG9hZGVkRmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xuICAgICAgICAgICAgZmlyZWJhc2UucHVzaChcbiAgICAgICAgICAgICAgICAgICcvRklSJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVwbG9hZGVkRmlsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2RldGFpbHMvJHtyZXMua2V5fWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIHVwbG9hZCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG59Il19