"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.user = {};
        this.errors = {};
        this.isSubmitting = false;
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
        // Optional: subscribe to changes on the form
        // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);
    };
    SettingsComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    };
    SettingsComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user)
            .subscribe(function (updatedUser) { return _this.router.navigateByUrl('/profile/' + updatedUser.username); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    SettingsComponent.prototype.updateUser = function (values) {
        Object.assign(this.user, values);
    };
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-settings-page',
            templateUrl: './settings.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            core_2.UserService,
            forms_1.FormBuilder])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map