"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var article_component_1 = require("./article.component");
var article_comment_component_1 = require("./article-comment.component");
var article_resolver_service_1 = require("./article-resolver.service");
var markdown_pipe_1 = require("./markdown.pipe");
var shared_1 = require("../shared");
var article_routing_module_1 = require("./article-routing.module");
var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                article_routing_module_1.ArticleRoutingModule
            ],
            declarations: [
                article_component_1.ArticleComponent,
                article_comment_component_1.ArticleCommentComponent,
                markdown_pipe_1.MarkdownPipe
            ],
            providers: [
                article_resolver_service_1.ArticleResolver
            ]
        })
    ], ArticleModule);
    return ArticleModule;
}());
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map