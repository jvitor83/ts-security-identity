(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './TokenParsed', '../../Utils/Base64'], factory);
    }
})(function (require, exports) {
    "use strict";
    var TokenParsed_1 = require('./TokenParsed');
    var Base64_1 = require('../../Utils/Base64');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUNBLDRCQUEwQixlQUFlLENBQUMsQ0FBQTtJQUMxQyx1QkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtJQUkxQztRQUdFLHFCQUEwQixLQUFhO1lBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUV2QyxDQUFDO1FBRU0sMkJBQUssR0FBWjtZQUNFLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTFFLElBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEQsSUFBTSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxJQUFNLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlDLElBQU0sU0FBUyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUksSUFBSSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQWxCTSwyQkFBZSxHQUFHLEdBQUcsQ0FBQztRQW1CL0Isa0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxJQUFBO0lBcEJZLG1CQUFXLGNBb0J2QixDQUFBIiwiZmlsZSI6IlRva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9rZW5QYXJzZWR9IGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IHtUb2tlblBhcnNlZH0gZnJvbSAnLi9Ub2tlblBhcnNlZCc7XHJcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi8uLi9VdGlscy9CYXNlNjQnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXIge1xyXG4gIHN0YXRpYyBUT0tFTl9TRVBBUkFUT1IgPSAnLic7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW46IHN0cmluZykge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOiBUIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcblxyXG4gICAgY29uc3QgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICBjb25zdCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICBjb25zdCBlbmNvZGVkU2lnbmF0dXJlID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsyXTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZENvbnRlbnQpO1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuXHJcbiAgICByZXR1cm4gPFQ+bmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICB9XHJcbn1cclxuIl19
