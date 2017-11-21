(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFDRSxxQkFBbUIsTUFBYyxFQUFTLE9BQWUsRUFBUyxTQUFpQjtZQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFFbkYsQ0FBQztRQUVELHNCQUFXLG1DQUFVO2lCQUFyQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQzs7O1dBQUE7UUFFTSxrQ0FBWSxHQUFuQjtZQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVCLENBQUM7UUFFRCxzQkFBVyxvQ0FBVztpQkFBdEI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRU0sbUNBQWEsR0FBcEI7WUFDRSxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxJQUFBO0lBcEJZLGtDQUFXIiwiZmlsZSI6IlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuUGFyc2VkIH0gZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQgeyBJVG9rZW5IZWFkZXIgfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5pbXBvcnQgeyBJVG9rZW5Db250ZW50IH0gZnJvbSAnLi4vSVRva2VuQ29udGVudCc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGhlYWRlcjogc3RyaW5nLCBwdWJsaWMgY29udGVudDogc3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOiBzdHJpbmcpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKTogYW55IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuaGVhZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoZWFkZXJPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKTogVCB7XHJcbiAgICByZXR1cm4gPFQ+dGhpcy5oZWFkZXJKU09OO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjb250ZW50SlNPTigpOiBhbnkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb250ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb250ZW50T2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5Db250ZW50PigpOiBUIHtcclxuICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gIH1cclxufVxyXG4iXX0=
