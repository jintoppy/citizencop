"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_service_1 = require("./list.service");
var DetailsComponent = (function () {
    function DetailsComponent(listService, route) {
        this.listService = listService;
        this.route = route;
        this.item = {
            title: '',
            description: '',
            category: '',
            image: {}
        };
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["itemId"];
        var self = this;
        this.listService.getItemById(id).then(function (res) {
            console.dump(res);
            self.item = res;
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./details.component.html",
    }),
    __metadata("design:paramtypes", [list_service_1.ListService,
        router_1.ActivatedRoute])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUVqRCwrQ0FBNkM7QUFPN0MsSUFBYSxnQkFBZ0I7SUFPekIsMEJBQ1ksV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFSakMsU0FBSSxHQUFlO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBSUUsQ0FBQztJQUNMLG1DQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQVMyQiwwQkFBVztRQUNqQix1QkFBYztHQVR4QixnQkFBZ0IsQ0FtQjVCO0FBbkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXBsb2FkSXRlbSB9IGZyb20gJy4uL3VwbG9hZC91cGxvYWRJdGVtJztcbmltcG9ydCB7IExpc3RTZXJ2aWNlIH0gZnJvbSAnLi9saXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogVXBsb2FkSXRlbSA9IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgaW1hZ2U6IHt9XG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsaXN0U2VydmljZTogTGlzdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcIml0ZW1JZFwiXTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdFNlcnZpY2UuZ2V0SXRlbUJ5SWQoaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZHVtcChyZXMpO1xuICAgICAgICAgICAgc2VsZi5pdGVtID0gcmVzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=