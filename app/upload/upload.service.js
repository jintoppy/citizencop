"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var UploadService = (function () {
    function UploadService(router) {
        this.router = router;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHVEQUEwRDtBQUMxRCwwQ0FBeUM7QUFHekMsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0QsbUNBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxZQUFZO1FBQTlCLGlCQTZCQztRQTVCRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEQsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNwQixjQUFjLEVBQUUsb0JBQWtCLElBQU07WUFDeEMsYUFBYSxFQUFFLFlBQVk7WUFDM0IsdUNBQXVDO1lBQ3ZDLFVBQVUsRUFBRSxVQUFTLE1BQU07Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDcEUsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxZQUFZO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUQsUUFBUSxDQUFDLElBQUksQ0FDUCxNQUFNLEVBQ047Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsS0FBSyxFQUFFLFlBQVk7YUFDcEIsQ0FDTixDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBWSxHQUFHLENBQUMsR0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLEVBQ0QsVUFBVSxLQUFLO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUVtQixlQUFNO0dBRHpCLGFBQWEsQ0FrQ3pCO0FBbENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcbiAgICAgICAgXG4gICAgfVxuICAgIHN1Ym1pdEltYWdlKGRhdGEsIGZpbGVMb2NhdGlvbil7XG4gICAgICAgIGxldCBuYW1lID0gZGF0YS50aXRsZS5yZXBsYWNlKFwiIFwiLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiBgdXBsb2Fkcy9pbWFnZXMvJHtuYW1lfWAsXG4gICAgICAgIGxvY2FsRnVsbFBhdGg6IGZpbGVMb2NhdGlvbixcbiAgICAgICAgLy8gZ2V0IG5vdGlmaWVkIG9mIGZpbGUgdXBsb2FkIHByb2dyZXNzXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmNlbnRhZ2UgY29tcGxldGU6IFwiICsgc3RhdHVzLnBlcmNlbnRhZ2VDb21wbGV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKFxuICAgICAgICAgICh1cGxvYWRlZEZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZDogXCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcbiAgICAgICAgICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAgICAgICAgICAgICAnL0ZJUicsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB1cGxvYWRlZEZpbGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoYC9kZXRhaWxzLyR7cmVzLmtleX1gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxufSJdfQ==