"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var jwt_service_1 = require("./jwt.service");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return rxjs_1.throwError(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new http_1.HttpParams(); }
        return this.http.get("" + environment_1.environment.api_url + path, { params: params })
            .pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + environment_1.environment.api_url + path, JSON.stringify(body)).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + environment_1.environment.api_url + path, JSON.stringify(body)).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + environment_1.environment.api_url + path).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            jwt_service_1.JwtService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map