"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var bootstrapPromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map