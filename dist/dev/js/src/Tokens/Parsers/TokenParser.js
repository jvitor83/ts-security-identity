"use strict";
var TokenParsed_1 = require('./TokenParsed');
var Base64_1 = require('../../Utils/Base64');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenParser;
var TokenParser = (function () {
    function TokenParser(token) {
        this.token = token;
    }
    TokenParser.prototype.Parse = function () {
        var accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
        var encodedHeader = accessTokenSplitted[0];
        var encodedContent = accessTokenSplitted[1];
        var encodedSignature = accessTokenSplitted[2];
        var header = Base64_1.default.Decode(encodedHeader);
        var content = Base64_1.default.Decode(encodedContent);
        var signature = Base64_1.default.Decode(encodedSignature);
        var tokenParsed = new TokenParsed_1.default(header, content, signature);
        return tokenParsed;
    };
    TokenParser.TOKEN_SEPARATOR = ".";
    return TokenParser;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFtQixvQkFBb0IsQ0FBQyxDQUFBO0FBRXhDO2tCQUFlLFdBQVcsQ0FBQztBQUUzQjtJQUlJLHFCQUEwQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV2QyxDQUFDO0lBRU0sMkJBQUssR0FBWjtRQUVJLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXhFLElBQUksYUFBYSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksY0FBYyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsSUFBSSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVoRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUksV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFwQk0sMkJBQWUsR0FBVyxHQUFHLENBQUM7SUFxQnpDLGtCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQSIsImZpbGUiOiJzcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVRva2VuUGFyc2VkIGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IFRva2VuUGFyc2VkIGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQgQmFzZTY0IGZyb20gJy4uLy4uL1V0aWxzL0Jhc2U2NCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlcjtcclxuXHJcbmNsYXNzIFRva2VuUGFyc2VyXHJcbntcclxuICAgIHN0YXRpYyBUT0tFTl9TRVBBUkFUT1IgOnN0cmluZyA9IFwiLlwiO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHRva2VuIDpzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIFBhcnNlPFQgZXh0ZW5kcyBJVG9rZW5QYXJzZWQ+KCk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblNwbGl0dGVkID0gdGhpcy50b2tlbi5zcGxpdChUb2tlblBhcnNlci5UT0tFTl9TRVBBUkFUT1IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbmNvZGVkSGVhZGVyID0gYWNjZXNzVG9rZW5TcGxpdHRlZFswXTtcclxuICAgICAgICBsZXQgZW5jb2RlZENvbnRlbnQgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzFdO1xyXG4gICAgICAgIGxldCBlbmNvZGVkU2lnbmF0dXJlID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsyXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaGVhZGVyID0gQmFzZTY0LkRlY29kZShlbmNvZGVkSGVhZGVyKTtcclxuICAgICAgICBsZXQgY29udGVudCA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZENvbnRlbnQpO1xyXG4gICAgICAgIGxldCBzaWduYXR1cmUgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRTaWduYXR1cmUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0b2tlblBhcnNlZCA9IG5ldyBUb2tlblBhcnNlZChoZWFkZXIsIGNvbnRlbnQsIHNpZ25hdHVyZSk7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRva2VuUGFyc2VkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
