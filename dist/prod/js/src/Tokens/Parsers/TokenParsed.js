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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUtBO1FBRUkscUJBQW1CLE1BQWEsRUFBUyxPQUFjLEVBQVMsU0FBZ0I7WUFBN0QsV0FBTSxHQUFOLE1BQU0sQ0FBTztZQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87WUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBRWhGLENBQUM7UUFFRCxzQkFBVyxtQ0FBVTtpQkFBckI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUM7OztXQUFBO1FBQ00sa0NBQVksR0FBbkI7WUFDSSxNQUFNLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QixDQUFDO1FBRUQsc0JBQVcsb0NBQVc7aUJBQXRCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxDQUFDOzs7V0FBQTtRQUNNLG1DQUFhLEdBQXBCO1lBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0IsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtJQW5CWSxtQkFBVyxjQW1CdkIsQ0FBQSIsImZpbGUiOiJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
