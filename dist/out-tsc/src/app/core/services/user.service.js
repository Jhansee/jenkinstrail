"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var api_service_1 = require("./api.service");
var jwt_service_1 = require("./jwt.service");
var operators_1 = require("rxjs/operators");
var UserService = /** @class */ (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs_1.BehaviorSubject({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(operators_1.distinctUntilChanged());
        this.isAuthenticatedSubject = new rxjs_1.ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(operators_1.map(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(operators_1.map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    UserService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService,
            http_1.HttpClient,
            jwt_service_1.JwtService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map