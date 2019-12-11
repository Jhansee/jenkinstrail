"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_auth_resolver_service_1 = require("./home-auth-resolver.service");
var shared_1 = require("../shared");
var home_routing_module_1 = require("./home-routing.module");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                home_routing_module_1.HomeRoutingModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            providers: [
                home_auth_resolver_service_1.HomeAuthResolver
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map