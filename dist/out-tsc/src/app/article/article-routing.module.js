"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var article_component_1 = require("./article.component");
var article_resolver_service_1 = require("./article-resolver.service");
var routes = [
    {
        path: ':slug',
        component: article_component_1.ArticleComponent,
        resolve: {
            article: article_resolver_service_1.ArticleResolver
        }
    }
];
var ArticleRoutingModule = /** @class */ (function () {
    function ArticleRoutingModule() {
    }
    ArticleRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ArticleRoutingModule);
    return ArticleRoutingModule;
}());
exports.ArticleRoutingModule = ArticleRoutingModule;
//# sourceMappingURL=article-routing.module.js.map