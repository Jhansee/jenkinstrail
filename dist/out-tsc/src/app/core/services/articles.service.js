"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService) {
        this.apiService = apiService;
    }
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new http_1.HttpParams({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug)
            .pipe(operators_1.map(function (data) { return data.article; }));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .pipe(operators_1.map(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .pipe(operators_1.map(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    };
    ArticlesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map