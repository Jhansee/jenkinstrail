"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var home_auth_resolver_service_1 = require("./home-auth-resolver.service");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        resolve: {
            isAuthenticated: home_auth_resolver_service_1.HomeAuthResolver
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map