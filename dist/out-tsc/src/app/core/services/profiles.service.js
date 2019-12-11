"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var ProfilesService = /** @class */ (function () {
    function ProfilesService(apiService) {
        this.apiService = apiService;
    }
    ProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(operators_1.map(function (data) { return data.profile; }));
    };
    ProfilesService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfilesService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfilesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService])
    ], ProfilesService);
    return ProfilesService;
}());
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map