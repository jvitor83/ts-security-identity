(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    // export default TokenParsed;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFHQSw4QkFBOEI7SUFFOUI7UUFDRSxxQkFBbUIsTUFBYyxFQUFTLE9BQWUsRUFBUyxTQUFpQjtZQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFFbkYsQ0FBQztRQUVELHNCQUFXLG1DQUFVO2lCQUFyQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQzs7O1dBQUE7UUFFTSxrQ0FBWSxHQUFuQjtZQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVCLENBQUM7UUFFRCxzQkFBVyxvQ0FBVztpQkFBdEI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRU0sbUNBQWEsR0FBcEI7WUFDRSxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxJQUFBO0lBcEJZLG1CQUFXLGNBb0J2QixDQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZWQgaW1wbGVtZW50cyBJVG9rZW5QYXJzZWQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6IHN0cmluZywgcHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIHNpZ25hdHVyZTogc3RyaW5nKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWFkZXJKU09OKCk6IGFueSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCk6IFQge1xyXG4gICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY29udGVudEpTT04oKTogYW55IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpOiBUIHtcclxuICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gIH1cclxufVxyXG4iXX0=
