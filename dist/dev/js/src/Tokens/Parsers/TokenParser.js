System.register(['./TokenParsed', '../../Utils/Base64'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParsed_1, Base64_1;
    var TokenParser;
    return {
        setters:[
            function (TokenParsed_1_1) {
                TokenParsed_1 = TokenParsed_1_1;
            },
            function (Base64_1_1) {
                Base64_1 = Base64_1_1;
            }],
        execute: function() {
            TokenParser = (function () {
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
            exports_1("TokenParser", TokenParser);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUlJLHFCQUEwQixLQUFhO29CQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRXZDLENBQUM7Z0JBRU0sMkJBQUssR0FBWjtvQkFFSSxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFeEUsSUFBSSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLElBQUksY0FBYyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU5QyxJQUFJLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLFNBQVMsR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBRWhELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUksV0FBVyxDQUFDO2dCQUMxQixDQUFDO2dCQXBCTSwyQkFBZSxHQUFXLEdBQUcsQ0FBQztnQkFxQnpDLGtCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxQ0F1QkMsQ0FBQSIsImZpbGUiOiJzcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lUb2tlblBhcnNlZH0gZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge1Rva2VuUGFyc2VkfSBmcm9tICcuL1Rva2VuUGFyc2VkJztcclxuaW1wb3J0IHtCYXNlNjR9IGZyb20gJy4uLy4uL1V0aWxzL0Jhc2U2NCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXJcclxue1xyXG4gICAgc3RhdGljIFRPS0VOX1NFUEFSQVRPUiA6c3RyaW5nID0gXCIuXCI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW4gOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUGFyc2U8VCBleHRlbmRzIElUb2tlblBhcnNlZD4oKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVuY29kZWRIZWFkZXIgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzBdO1xyXG4gICAgICAgIGxldCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICAgICAgbGV0IGVuY29kZWRTaWduYXR1cmUgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gQmFzZTY0LkRlY29kZShlbmNvZGVkQ29udGVudCk7XHJcbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZFNpZ25hdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gbmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICAgICAgICByZXR1cm4gPFQ+dG9rZW5QYXJzZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19
