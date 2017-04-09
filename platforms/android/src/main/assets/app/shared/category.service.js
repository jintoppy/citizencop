"use strict";
var core_1 = require("@angular/core");
var CategoryService = (function () {
    function CategoryService() {
        this.categories = new Array('Traffic', 'Bus', 'Cab', 'Littering', 'Public Place', 'Public Smoking');
    }
    CategoryService.prototype.getCategories = function () {
        return this.categories;
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable()
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUczQyxJQUFhLGVBQWU7SUFENUI7UUFFWSxlQUFVLEdBQUcsSUFBSSxLQUFLLENBQzFCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZ0JBQWdCLENBQ25CLENBQUE7SUFNTCxDQUFDO0lBSkcsdUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksZUFBZTtJQUQzQixpQkFBVSxFQUFFO0dBQ0EsZUFBZSxDQWMzQjtBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVNlcnZpY2Uge1xuICAgIHByaXZhdGUgY2F0ZWdvcmllcyA9IG5ldyBBcnJheTxzdHJpbmc+KFxuICAgICAgICAnVHJhZmZpYycsXG4gICAgICAgICdCdXMnLFxuICAgICAgICAnQ2FiJyxcbiAgICAgICAgJ0xpdHRlcmluZycsXG4gICAgICAgICdQdWJsaWMgUGxhY2UnLFxuICAgICAgICAnUHVibGljIFNtb2tpbmcnIFxuICAgIClcblxuICAgIGdldENhdGVnb3JpZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xuICAgIH1cblxufSJdfQ==