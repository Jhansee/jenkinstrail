"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var auth_module_1 = require("./auth/auth.module");
var home_module_1 = require("./home/home.module");
var shared_1 = require("./shared");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, shared_1.FooterComponent, shared_1.HeaderComponent],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                shared_1.SharedModule,
                home_module_1.HomeModule,
                auth_module_1.AuthModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map