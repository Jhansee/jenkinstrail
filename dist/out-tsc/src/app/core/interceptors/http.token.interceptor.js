"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var services_1 = require("../services");
var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [services_1.JwtService])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());
exports.HttpTokenInterceptor = HttpTokenInterceptor;
//# sourceMappingURL=http.token.interceptor.js.map