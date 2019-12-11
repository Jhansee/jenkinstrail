"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var no_auth_guard_service_1 = require("./no-auth-guard.service");
var routes = [
    {
        path: 'login',
        component: auth_component_1.AuthComponent,
        canActivate: [no_auth_guard_service_1.NoAuthGuard]
    },
    {
        path: 'register',
        component: auth_component_1.AuthComponent,
        canActivate: [no_auth_guard_service_1.NoAuthGuard]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;
//# sourceMappingURL=auth-routing.module.js.map