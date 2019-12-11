"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("../core");
var ArticleCommentComponent = /** @class */ (function () {
    function ArticleCommentComponent(userService) {
        this.userService = userService;
        this.deleteComment = new core_1.EventEmitter();
    }
    ArticleCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.subscription = this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
    };
    ArticleCommentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ArticleCommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ArticleCommentComponent.prototype, "comment", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ArticleCommentComponent.prototype, "deleteComment", void 0);
    ArticleCommentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-article-comment',
            templateUrl: './article-comment.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.UserService])
    ], ArticleCommentComponent);
    return ArticleCommentComponent;
}());
exports.ArticleCommentComponent = ArticleCommentComponent;
//# sourceMappingURL=article-comment.component.js.map