"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var auth_component_1 = require("./auth.component");
var no_auth_guard_service_1 = require("./no-auth-guard.service");
var shared_1 = require("../shared");
var auth_routing_module_1 = require("./auth-routing.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                auth_routing_module_1.AuthRoutingModule
            ],
            declarations: [
                auth_component_1.AuthComponent
            ],
            providers: [
                no_auth_guard_service_1.NoAuthGuard
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map