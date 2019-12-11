"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var editor_component_1 = require("./editor.component");
var editable_article_resolver_service_1 = require("./editable-article-resolver.service");
var core_2 = require("../core");
var routes = [
    {
        path: '',
        component: editor_component_1.EditorComponent,
        canActivate: [core_2.AuthGuard]
    },
    {
        path: ':slug',
        component: editor_component_1.EditorComponent,
        canActivate: [core_2.AuthGuard],
        resolve: {
            article: editable_article_resolver_service_1.EditableArticleResolver
        }
    }
];
var EditorRoutingModule = /** @class */ (function () {
    function EditorRoutingModule() {
    }
    EditorRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], EditorRoutingModule);
    return EditorRoutingModule;
}());
exports.EditorRoutingModule = EditorRoutingModule;
//# sourceMappingURL=editor-routing.module.js.map