"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Ng2RealApp = /** @class */ (function () {
    function Ng2RealApp() {
    }
    Ng2RealApp.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Ng2RealApp.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('.logo-font')).getText();
    };
    return Ng2RealApp;
}());
exports.Ng2RealApp = Ng2RealApp;
//# sourceMappingURL=app.po.js.map