"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenParsed;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7a0JBQWUsV0FBVyxDQUFDO0FBRTNCO0lBRUkscUJBQW1CLE1BQWEsRUFBUyxPQUFjLEVBQVMsU0FBZ0I7UUFBN0QsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFPO0lBRWhGLENBQUM7SUFFRCxzQkFBVyxtQ0FBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNNLGtDQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLG9DQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ00sbUNBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMvQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVG9rZW5QYXJzZWQgZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQgSVRva2VuSGVhZGVyIGZyb20gJy4uL0lUb2tlbkhlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmNsYXNzIFRva2VuUGFyc2VkIGltcGxlbWVudHMgSVRva2VuUGFyc2VkXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6c3RyaW5nLCBwdWJsaWMgY29udGVudDpzdHJpbmcsIHB1YmxpYyBzaWduYXR1cmU6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaGVhZGVySlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5oZWFkZXJKU09OO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGNvbnRlbnRKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuY29udGVudEpTT047XHJcbiAgICB9XHJcbn1cclxuIl19
