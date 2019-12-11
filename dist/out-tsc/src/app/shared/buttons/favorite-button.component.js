"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../../core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FavoriteButtonComponent = /** @class */ (function () {
    function FavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new core_1.EventEmitter();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(operators_1.concatMap(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return rxjs_1.of(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article.favorited) {
                return _this.articlesService.favorite(_this.article.slug)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfavorite the article
            }
            else {
                return _this.articlesService.unfavorite(_this.article.slug)
                    .pipe(operators_1.tap(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], FavoriteButtonComponent.prototype, "article", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], FavoriteButtonComponent.prototype, "toggle", void 0);
    FavoriteButtonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-favorite-button',
            templateUrl: './favorite-button.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.ArticlesService,
            router_1.Router,
            core_2.UserService])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());
exports.FavoriteButtonComponent = FavoriteButtonComponent;
//# sourceMappingURL=favorite-button.component.js.map