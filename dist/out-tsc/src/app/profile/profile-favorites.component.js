"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProfileFavoritesComponent = /** @class */ (function () {
    function ProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    ProfileFavoritesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-profile-favorites',
            templateUrl: './profile-favorites.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());
exports.ProfileFavoritesComponent = ProfileFavoritesComponent;
//# sourceMappingURL=profile-favorites.component.js.map