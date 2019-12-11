"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-list-errors',
            templateUrl: './list-errors.component.html'
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());
exports.ListErrorsComponent = ListErrorsComponent;
//# sourceMappingURL=list-errors.component.js.map