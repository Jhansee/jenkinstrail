"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../../core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var FollowButtonComponent = /** @class */ (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new core_1.EventEmitter();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(operators_1.concatMap(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return rxjs_1.of(null);
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                return _this.profilesService.follow(_this.profile.username)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfollow this profile
            }
            else {
                return _this.profilesService.unfollow(_this.profile.username)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "profile", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "toggle", void 0);
    FollowButtonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-follow-button',
            templateUrl: './follow-button.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.ProfilesService,
            router_1.Router,
            core_2.UserService])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());
exports.FollowButtonComponent = FollowButtonComponent;
//# sourceMappingURL=follow-button.component.js.map