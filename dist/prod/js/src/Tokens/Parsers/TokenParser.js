(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TokenParsed", "../../Utils/Base64"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TokenParsed_1 = require("./TokenParsed");
    var Base64_1 = require("../../Utils/Base64");
    var TokenParser = (function () {
        function TokenParser(token) {
            this.token = token;
        }
        TokenParser.prototype.Parse = function () {
            var accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
            var encodedHeader = accessTokenSplitted[0];
            var encodedContent = accessTokenSplitted[1];
            var encodedSignature = accessTokenSplitted[2];
            var header = Base64_1.Base64.Decode(encodedHeader);
            var content = Base64_1.Base64.Decode(encodedContent);
            var signature = Base64_1.Base64.Decode(encodedSignature);
            return new TokenParsed_1.TokenParsed(header, content, signature);
        };
        TokenParser.TOKEN_SEPARATOR = '.';
        return TokenParser;
    }());
    exports.TokenParser = TokenParser;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQ0EsNkNBQTBDO0lBQzFDLDZDQUEwQztJQUkxQztRQUdFLHFCQUEwQixLQUFhO1lBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUV2QyxDQUFDO1FBRU0sMkJBQUssR0FBWjtZQUNFLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTFFLElBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEQsSUFBTSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxJQUFNLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlDLElBQU0sU0FBUyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUksSUFBSSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQWxCTSwyQkFBZSxHQUFHLEdBQUcsQ0FBQztRQW1CL0Isa0JBQUM7S0FwQkQsQUFvQkMsSUFBQTtJQXBCWSxrQ0FBVyIsImZpbGUiOiJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7VG9rZW5QYXJzZWR9IGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vLi4vVXRpbHMvQmFzZTY0JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFRva2VuUGFyc2VyO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUGFyc2VyIHtcclxuICBzdGF0aWMgVE9LRU5fU0VQQVJBVE9SID0gJy4nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHRva2VuOiBzdHJpbmcpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgUGFyc2U8VCBleHRlbmRzIElUb2tlblBhcnNlZD4oKTogVCB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlblNwbGl0dGVkID0gdGhpcy50b2tlbi5zcGxpdChUb2tlblBhcnNlci5UT0tFTl9TRVBBUkFUT1IpO1xyXG5cclxuICAgIGNvbnN0IGVuY29kZWRIZWFkZXIgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzBdO1xyXG4gICAgY29uc3QgZW5jb2RlZENvbnRlbnQgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzFdO1xyXG4gICAgY29uc3QgZW5jb2RlZFNpZ25hdHVyZSA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMl07XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gQmFzZTY0LkRlY29kZShlbmNvZGVkSGVhZGVyKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRDb250ZW50KTtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZFNpZ25hdHVyZSk7XHJcblxyXG4gICAgcmV0dXJuIDxUPm5ldyBUb2tlblBhcnNlZChoZWFkZXIsIGNvbnRlbnQsIHNpZ25hdHVyZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
