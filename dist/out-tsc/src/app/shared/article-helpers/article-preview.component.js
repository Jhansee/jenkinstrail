"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ArticlePreviewComponent.prototype, "article", void 0);
    ArticlePreviewComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-article-preview',
            templateUrl: './article-preview.component.html'
        })
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());
exports.ArticlePreviewComponent = ArticlePreviewComponent;
//# sourceMappingURL=article-preview.component.js.map