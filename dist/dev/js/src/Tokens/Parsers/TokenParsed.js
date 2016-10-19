(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    //export default TokenParsed;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFHQSw2QkFBNkI7SUFFN0I7UUFFSSxxQkFBbUIsTUFBYSxFQUFTLE9BQWMsRUFBUyxTQUFnQjtZQUE3RCxXQUFNLEdBQU4sTUFBTSxDQUFPO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztZQUFTLGNBQVMsR0FBVCxTQUFTLENBQU87UUFFaEYsQ0FBQztRQUVELHNCQUFXLG1DQUFVO2lCQUFyQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQzs7O1dBQUE7UUFDTSxrQ0FBWSxHQUFuQjtZQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlCLENBQUM7UUFFRCxzQkFBVyxvQ0FBVztpQkFBdEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLENBQUM7OztXQUFBO1FBQ00sbUNBQWEsR0FBcEI7WUFDSSxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBbkJZLG1CQUFXLGNBbUJ2QixDQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
