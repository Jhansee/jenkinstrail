"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .pipe(operators_1.map(function (data) { return data.tags; }));
    };
    TagsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService])
    ], TagsService);
    return TagsService;
}());
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map