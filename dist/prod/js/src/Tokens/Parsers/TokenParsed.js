(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var TokenParsed = (function () {
        function TokenParsed(header, content, signature) {
            this.header = header;
            this.content = content;
            this.signature = signature;
        }
        Object.defineProperty(TokenParsed.prototype, "headerJSON", {
            get: function () {
                return JSON.parse(this.header);
            },
            enumerable: true,
            configurable: true
        });
        TokenParsed.prototype.headerObject = function () {
            return this.headerJSON;
        };
        Object.defineProperty(TokenParsed.prototype, "contentJSON", {
            get: function () {
                return JSON.parse(this.content);
            },
            enumerable: true,
            configurable: true
        });
        TokenParsed.prototype.contentObject = function () {
            return this.contentJSON;
        };
        return TokenParsed;
    }());
    exports.TokenParsed = TokenParsed;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUtBO1FBQ0UscUJBQW1CLE1BQWMsRUFBUyxPQUFlLEVBQVMsU0FBaUI7WUFBaEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBRW5GLENBQUM7UUFFRCxzQkFBVyxtQ0FBVTtpQkFBckI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7OztXQUFBO1FBRU0sa0NBQVksR0FBbkI7WUFDRSxNQUFNLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QixDQUFDO1FBRUQsc0JBQVcsb0NBQVc7aUJBQXRCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxDQUFDOzs7V0FBQTtRQUVNLG1DQUFhLEdBQXBCO1lBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtJQXBCWSxtQkFBVyxjQW9CdkIsQ0FBQSIsImZpbGUiOiJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZWQgaW1wbGVtZW50cyBJVG9rZW5QYXJzZWQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6IHN0cmluZywgcHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIHNpZ25hdHVyZTogc3RyaW5nKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWFkZXJKU09OKCk6IGFueSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCk6IFQge1xyXG4gICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY29udGVudEpTT04oKTogYW55IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpOiBUIHtcclxuICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gIH1cclxufVxyXG4iXX0=
