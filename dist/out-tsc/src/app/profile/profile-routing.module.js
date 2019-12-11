"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_articles_component_1 = require("./profile-articles.component");
var profile_favorites_component_1 = require("./profile-favorites.component");
var profile_resolver_service_1 = require("./profile-resolver.service");
var profile_component_1 = require("./profile.component");
var routes = [
    {
        path: ':username',
        component: profile_component_1.ProfileComponent,
        resolve: {
            profile: profile_resolver_service_1.ProfileResolver
        },
        children: [
            {
                path: '',
                component: profile_articles_component_1.ProfileArticlesComponent
            },
            {
                path: 'favorites',
                component: profile_favorites_component_1.ProfileFavoritesComponent
            }
        ]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
exports.ProfileRoutingModule = ProfileRoutingModule;
//# sourceMappingURL=profile-routing.module.js.map