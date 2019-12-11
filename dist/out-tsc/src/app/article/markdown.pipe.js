"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var marked = require("marked");
var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (content) {
        return marked(content, { sanitize: true });
    };
    MarkdownPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'markdown' })
    ], MarkdownPipe);
    return MarkdownPipe;
}());
exports.MarkdownPipe = MarkdownPipe;
//# sourceMappingURL=markdown.pipe.js.map