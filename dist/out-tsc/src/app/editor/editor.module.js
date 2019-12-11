"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var editor_component_1 = require("./editor.component");
var editable_article_resolver_service_1 = require("./editable-article-resolver.service");
var shared_1 = require("../shared");
var editor_routing_module_1 = require("./editor-routing.module");
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.SharedModule, editor_routing_module_1.EditorRoutingModule],
            declarations: [editor_component_1.EditorComponent],
            providers: [editable_article_resolver_service_1.EditableArticleResolver]
        })
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
//# sourceMappingURL=editor.module.js.map