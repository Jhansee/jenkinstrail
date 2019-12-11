"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var settings_component_1 = require("./settings.component");
var shared_1 = require("../shared");
var settings_routing_module_1 = require("./settings-routing.module");
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                settings_routing_module_1.SettingsRoutingModule
            ],
            declarations: [
                settings_component_1.SettingsComponent
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map