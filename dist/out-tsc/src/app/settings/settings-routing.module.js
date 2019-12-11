"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var settings_component_1 = require("./settings.component");
var routes = [
    {
        path: '',
        component: settings_component_1.SettingsComponent,
        canActivate: [core_2.AuthGuard]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());
exports.SettingsRoutingModule = SettingsRoutingModule;
//# sourceMappingURL=settings-routing.module.js.map