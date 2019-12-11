"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProfileArticlesComponent = /** @class */ (function () {
    function ProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh article load on swap
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    ProfileArticlesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-profile-articles',
            templateUrl: './profile-articles.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProfileArticlesComponent);
    return ProfileArticlesComponent;
}());
exports.ProfileArticlesComponent = ProfileArticlesComponent;
//# sourceMappingURL=profile-articles.component.js.map