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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUVJLHFCQUFtQixNQUFhLEVBQVMsT0FBYyxFQUFTLFNBQWdCO1FBQTdELFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTztJQUVoRixDQUFDO0lBRUQsc0JBQVcsbUNBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDTSxrQ0FBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyxvQ0FBVzthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUNNLG1DQUFhLEdBQXBCO1FBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxtQkFBVyxjQW1CdkIsQ0FBQSIsImZpbGUiOiJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
