"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var operators_1 = require("rxjs/operators");
var ArticleResolver = /** @class */ (function () {
    function ArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .pipe(operators_1.catchError(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ArticleResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_2.ArticlesService,
            router_1.Router,
            core_2.UserService])
    ], ArticleResolver);
    return ArticleResolver;
}());
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article-resolver.service.js.map