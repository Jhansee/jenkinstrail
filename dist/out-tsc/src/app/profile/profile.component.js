"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var operators_1 = require("rxjs/operators");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(operators_1.concatMap(function (data) {
            _this.profile = data.profile;
            // Load the current user's data.
            return _this.userService.currentUser.pipe(operators_1.tap(function (userData) {
                _this.currentUser = userData;
                _this.isUser = (_this.currentUser.username === _this.profile.username);
            }));
        })).subscribe();
    };
    ProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    ProfileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-profile-page',
            templateUrl: './profile.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map