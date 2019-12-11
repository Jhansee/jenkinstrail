"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("../core");
var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = tslib_1.__decorate([
        core_1.Directive({ selector: '[appShowAuthed]' }),
        tslib_1.__metadata("design:paramtypes", [core_1.TemplateRef,
            core_2.UserService,
            core_1.ViewContainerRef])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());
exports.ShowAuthedDirective = ShowAuthedDirective;
//# sourceMappingURL=show-authed.directive.js.map