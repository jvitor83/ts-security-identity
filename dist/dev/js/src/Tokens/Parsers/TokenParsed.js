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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFFSSxxQkFBbUIsTUFBYSxFQUFTLE9BQWMsRUFBUyxTQUFnQjtRQUE3RCxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQU87SUFFaEYsQ0FBQztJQUVELHNCQUFXLG1DQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ00sa0NBQVksR0FBbkI7UUFDSSxNQUFNLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsb0NBQVc7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFDTSxtQ0FBYSxHQUFwQjtRQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQy9CLENBQUM7SUFDTCxrQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksbUJBQVcsY0FtQnZCLENBQUEiLCJmaWxlIjoic3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9rZW5QYXJzZWR9IGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IHtJVG9rZW5IZWFkZXJ9IGZyb20gJy4uL0lUb2tlbkhlYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZWQgaW1wbGVtZW50cyBJVG9rZW5QYXJzZWRcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlYWRlcjpzdHJpbmcsIHB1YmxpYyBjb250ZW50OnN0cmluZywgcHVibGljIHNpZ25hdHVyZTpzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBoZWFkZXJKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuaGVhZGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoZWFkZXJPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmhlYWRlckpTT047XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgY29udGVudEpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb250ZW50T2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5jb250ZW50SlNPTjtcclxuICAgIH1cclxufVxyXG4iXX0=
