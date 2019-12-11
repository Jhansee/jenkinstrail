"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var profile_articles_component_1 = require("./profile-articles.component");
var profile_component_1 = require("./profile.component");
var profile_favorites_component_1 = require("./profile-favorites.component");
var profile_resolver_service_1 = require("./profile-resolver.service");
var shared_1 = require("../shared");
var profile_routing_module_1 = require("./profile-routing.module");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                profile_routing_module_1.ProfileRoutingModule
            ],
            declarations: [
                profile_articles_component_1.ProfileArticlesComponent,
                profile_component_1.ProfileComponent,
                profile_favorites_component_1.ProfileFavoritesComponent
            ],
            providers: [
                profile_resolver_service_1.ProfileResolver
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map