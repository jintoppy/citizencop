// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import firebase = require("nativescript-plugin-firebase");

 
firebase.init({
  storageBucket: 'gs://citizencop-3cc64.appspot.com'
}).then(
  (instance) => {
    console.log("firebase.init done");
    firebase.login({
          type: firebase.LoginType.ANONYMOUS
      });
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);

platformNativeScriptDynamic().bootstrapModule(AppModule);
