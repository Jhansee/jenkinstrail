"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', forms_1.Validators.required],
            'password': ['', forms_1.Validators.required]
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (_this.authType === 'register') {
                _this.authForm.addControl('username', new forms_1.FormControl());
            }
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    AuthComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-page',
            templateUrl: './auth.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            core_2.UserService,
            forms_1.FormBuilder])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map