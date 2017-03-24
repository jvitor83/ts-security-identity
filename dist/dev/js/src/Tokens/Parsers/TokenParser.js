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
    // export default TokenParser;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFDQSw0QkFBMEIsZUFBZSxDQUFDLENBQUE7SUFDMUMsdUJBQXFCLG9CQUFvQixDQUFDLENBQUE7SUFFMUMsOEJBQThCO0lBRTlCO1FBR0UscUJBQTBCLEtBQWE7WUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRXZDLENBQUM7UUFFTSwyQkFBSyxHQUFaO1lBQ0UsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFMUUsSUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFNLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLElBQU0sT0FBTyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsSUFBTSxTQUFTLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWxELE1BQU0sQ0FBSSxJQUFJLHlCQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBbEJNLDJCQUFlLEdBQUcsR0FBRyxDQUFDO1FBbUIvQixrQkFBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksbUJBQVcsY0FvQnZCLENBQUEiLCJmaWxlIjoic3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9rZW5QYXJzZWR9IGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IHtUb2tlblBhcnNlZH0gZnJvbSAnLi9Ub2tlblBhcnNlZCc7XHJcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi8uLi9VdGlscy9CYXNlNjQnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXIge1xyXG4gIHN0YXRpYyBUT0tFTl9TRVBBUkFUT1IgPSAnLic7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW46IHN0cmluZykge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOiBUIHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcblxyXG4gICAgY29uc3QgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICBjb25zdCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICBjb25zdCBlbmNvZGVkU2lnbmF0dXJlID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsyXTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZENvbnRlbnQpO1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuXHJcbiAgICByZXR1cm4gPFQ+bmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICB9XHJcbn1cclxuIl19
