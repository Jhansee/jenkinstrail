"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-demo App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Ng2RealApp();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('conduit');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map