"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_token_interceptor_1 = require("./interceptors/http.token.interceptor");
var services_1 = require("./services");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_token_interceptor_1.HttpTokenInterceptor, multi: true },
                services_1.ApiService,
                services_1.ArticlesService,
                services_1.AuthGuard,
                services_1.CommentsService,
                services_1.JwtService,
                services_1.ProfilesService,
                services_1.TagsService,
                services_1.UserService
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map