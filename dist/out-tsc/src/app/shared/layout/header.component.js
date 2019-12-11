"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-layout-header',
            templateUrl: './header.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map