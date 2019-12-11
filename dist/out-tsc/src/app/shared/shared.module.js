"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var article_helpers_1 = require("./article-helpers");
var buttons_1 = require("./buttons");
var list_errors_component_1 = require("./list-errors.component");
var show_authed_directive_1 = require("./show-authed.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule
            ],
            declarations: [
                article_helpers_1.ArticleListComponent,
                article_helpers_1.ArticleMetaComponent,
                article_helpers_1.ArticlePreviewComponent,
                buttons_1.FavoriteButtonComponent,
                buttons_1.FollowButtonComponent,
                list_errors_component_1.ListErrorsComponent,
                show_authed_directive_1.ShowAuthedDirective
            ],
            exports: [
                article_helpers_1.ArticleListComponent,
                article_helpers_1.ArticleMetaComponent,
                article_helpers_1.ArticlePreviewComponent,
                common_1.CommonModule,
                buttons_1.FavoriteButtonComponent,
                buttons_1.FollowButtonComponent,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                list_errors_component_1.ListErrorsComponent,
                router_1.RouterModule,
                show_authed_directive_1.ShowAuthedDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map