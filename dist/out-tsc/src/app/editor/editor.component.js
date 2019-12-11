"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(articlesService, route, router, fb) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.article = {};
        this.tagField = new forms_1.FormControl();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.article.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an article prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.article) {
                _this.article = data.article;
                _this.articleForm.patchValue(data.article);
            }
        });
    };
    EditorComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.article.tagList.indexOf(tag) < 0) {
            this.article.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    EditorComponent.prototype.removeTag = function (tagName) {
        this.article.tagList = this.article.tagList.filter(function (tag) { return tag !== tagName; });
    };
    EditorComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateArticle(this.articleForm.value);
        // post the changes
        this.articlesService.save(this.article).subscribe(function (article) { return _this.router.navigateByUrl('/article/' + article.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    EditorComponent.prototype.updateArticle = function (values) {
        Object.assign(this.article, values);
    };
    EditorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-editor-page',
            templateUrl: './editor.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.ArticlesService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map