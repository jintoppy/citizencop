"use strict";
var core_1 = require("@angular/core");
var list_service_1 = require("./list.service");
var SummaryComponent = (function () {
    function SummaryComponent(listService) {
        this.listService = listService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.summaryData = this.listService.getGroupedItems();
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    core_1.Component({
        selector: "ns-summary",
        moduleId: module.id,
        templateUrl: "./summary.component.html",
    }),
    __metadata("design:paramtypes", [list_service_1.ListService])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE2QztBQU83QyxJQUFhLGdCQUFnQjtJQUV6QiwwQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBR21DLDBCQUFXO0dBRm5DLGdCQUFnQixDQVE1QjtBQVJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExpc3RTZXJ2aWNlIH0gZnJvbSAnLi9saXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zdW1tYXJ5XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N1bW1hcnkuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBzdW1tYXJ5RGF0YTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3RTZXJ2aWNlOiBMaXN0U2VydmljZSl7XG5cbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VtbWFyeURhdGEgPSB0aGlzLmxpc3RTZXJ2aWNlLmdldEdyb3VwZWRJdGVtcygpO1xuICAgIH1cbn1cbiJdfQ==