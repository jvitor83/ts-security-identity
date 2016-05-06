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
            //export default TokenParser;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUlBLDZCQUE2QjtZQUU3QjtnQkFJSSxxQkFBMEIsS0FBYTtvQkFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUV2QyxDQUFDO2dCQUVNLDJCQUFLLEdBQVo7b0JBRUksSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXhFLElBQUksYUFBYSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFOUMsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxPQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxTQUFTLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUVoRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFJLFdBQVcsQ0FBQztnQkFDMUIsQ0FBQztnQkFwQk0sMkJBQWUsR0FBVyxHQUFHLENBQUM7Z0JBcUJ6QyxrQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQscUNBdUJDLENBQUEiLCJmaWxlIjoic3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9rZW5QYXJzZWR9IGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IHtUb2tlblBhcnNlZH0gZnJvbSAnLi9Ub2tlblBhcnNlZCc7XHJcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi8uLi9VdGlscy9CYXNlNjQnO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlclxyXG57XHJcbiAgICBzdGF0aWMgVE9LRU5fU0VQQVJBVE9SIDpzdHJpbmcgPSBcIi5cIjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbiA6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOlRcclxuICAgIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5TcGxpdHRlZCA9IHRoaXMudG9rZW4uc3BsaXQoVG9rZW5QYXJzZXIuVE9LRU5fU0VQQVJBVE9SKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICAgICAgbGV0IGVuY29kZWRDb250ZW50ID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsxXTtcclxuICAgICAgICBsZXQgZW5jb2RlZFNpZ25hdHVyZSA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZEhlYWRlcik7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRDb250ZW50KTtcclxuICAgICAgICBsZXQgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSBuZXcgVG9rZW5QYXJzZWQoaGVhZGVyLCBjb250ZW50LCBzaWduYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiA8VD50b2tlblBhcnNlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
