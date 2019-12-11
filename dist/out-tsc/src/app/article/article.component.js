"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, articlesService, commentsService, router, userService) {
        this.route = route;
        this.articlesService = articlesService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new forms_1.FormControl();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched article
        this.route.data.subscribe(function (data) {
            _this.article = data.article;
            // Load the comments on this article
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.article.author.username);
        });
    };
    ArticleComponent.prototype.onToggleFavorite = function (favorited) {
        this.article.favorited = favorited;
        if (favorited) {
            this.article.favoritesCount++;
        }
        else {
            this.article.favoritesCount--;
        }
    };
    ArticleComponent.prototype.onToggleFollowing = function (following) {
        this.article.author.following = following;
    };
    ArticleComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.isDeleting = true;
        this.articlesService.destroy(this.article.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    ArticleComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.article.slug)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    ArticleComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.article.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    ArticleComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.article.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    ArticleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-article-page',
            templateUrl: './article.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.ArticlesService,
            core_2.CommentsService,
            router_1.Router,
            core_2.UserService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map