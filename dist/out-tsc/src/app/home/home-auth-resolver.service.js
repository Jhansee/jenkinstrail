"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var operators_1 = require("rxjs/operators");
var HomeAuthResolver = /** @class */ (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.pipe(operators_1.take(1));
    };
    HomeAuthResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            core_2.UserService])
    ], HomeAuthResolver);
    return HomeAuthResolver;
}());
exports.HomeAuthResolver = HomeAuthResolver;
//# sourceMappingURL=home-auth-resolver.service.js.map