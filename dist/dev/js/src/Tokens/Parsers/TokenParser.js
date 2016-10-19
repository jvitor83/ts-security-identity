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
    //export default TokenParser;
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
            var tokenParsed = new TokenParsed_1.TokenParsed(header, content, signature);
            return tokenParsed;
        };
        TokenParser.TOKEN_SEPARATOR = ".";
        return TokenParser;
    }());
    exports.TokenParser = TokenParser;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFDQSw0QkFBMEIsZUFBZSxDQUFDLENBQUE7SUFDMUMsdUJBQXFCLG9CQUFvQixDQUFDLENBQUE7SUFFMUMsNkJBQTZCO0lBRTdCO1FBSUkscUJBQTBCLEtBQWE7WUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRXZDLENBQUM7UUFFTSwyQkFBSyxHQUFaO1lBRUksSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFeEUsSUFBSSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWhELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBSSxXQUFXLENBQUM7UUFDMUIsQ0FBQztRQXBCTSwyQkFBZSxHQUFXLEdBQUcsQ0FBQztRQXFCekMsa0JBQUM7SUFBRCxDQXZCQSxBQXVCQyxJQUFBO0lBdkJZLG1CQUFXLGNBdUJ2QixDQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7VG9rZW5QYXJzZWR9IGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vLi4vVXRpbHMvQmFzZTY0JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXJcclxue1xyXG4gICAgc3RhdGljIFRPS0VOX1NFUEFSQVRPUiA6c3RyaW5nID0gXCIuXCI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW4gOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUGFyc2U8VCBleHRlbmRzIElUb2tlblBhcnNlZD4oKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVuY29kZWRIZWFkZXIgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzBdO1xyXG4gICAgICAgIGxldCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICAgICAgbGV0IGVuY29kZWRTaWduYXR1cmUgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gQmFzZTY0LkRlY29kZShlbmNvZGVkQ29udGVudCk7XHJcbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZFNpZ25hdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gbmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICAgICAgICByZXR1cm4gPFQ+dG9rZW5QYXJzZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19
