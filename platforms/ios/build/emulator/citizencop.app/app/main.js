"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    storageBucket: 'gs://citizencop-3cc64.appspot.com'
}).then(function (instance) {
    console.log("firebase.init done");
    firebase.login({
        type: firebase.LoginType.ANONYMOUS
    });
}, function (error) {
    console.log("firebase.init error: " + error);
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBNEU7QUFFNUUsMkNBQXlDO0FBRXpDLHVEQUEwRDtBQUcxRCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ1osYUFBYSxFQUFFLG1DQUFtQztDQUNuRCxDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUMsUUFBUTtJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ1QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUztLQUNyQyxDQUFDLENBQUM7QUFDUCxDQUFDLEVBQ0QsVUFBQyxLQUFLO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0YsQ0FBQztBQUVGLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG4gXG5maXJlYmFzZS5pbml0KHtcbiAgc3RvcmFnZUJ1Y2tldDogJ2dzOi8vY2l0aXplbmNvcC0zY2M2NC5hcHBzcG90LmNvbSdcbn0pLnRoZW4oXG4gIChpbnN0YW5jZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuQU5PTllNT1VTXG4gICAgICB9KTtcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgfVxuKTtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=