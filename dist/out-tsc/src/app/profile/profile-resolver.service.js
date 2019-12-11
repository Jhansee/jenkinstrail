"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var operators_1 = require("rxjs/operators");
var ProfileResolver = /** @class */ (function () {
    function ProfileResolver(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['username'])
            .pipe(operators_1.catchError(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ProfileResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_2.ProfilesService,
            router_1.Router])
    ], ProfileResolver);
    return ProfileResolver;
}());
exports.ProfileResolver = ProfileResolver;
//# sourceMappingURL=profile-resolver.service.js.map