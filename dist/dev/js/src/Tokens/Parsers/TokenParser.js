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
            class TokenParser {
                constructor(token) {
                    this.token = token;
                }
                Parse() {
                    let accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
                    let encodedHeader = accessTokenSplitted[0];
                    let encodedContent = accessTokenSplitted[1];
                    let encodedSignature = accessTokenSplitted[2];
                    let header = Base64_1.Base64.Decode(encodedHeader);
                    let content = Base64_1.Base64.Decode(encodedContent);
                    let signature = Base64_1.Base64.Decode(encodedSignature);
                    let tokenParsed = new TokenParsed_1.TokenParsed(header, content, signature);
                    return tokenParsed;
                }
            }
            TokenParser.TOKEN_SEPARATOR = ".";
            exports_1("TokenParser", TokenParser);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUlJLFlBQTBCLEtBQWE7b0JBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFFdkMsQ0FBQztnQkFFTSxLQUFLO29CQUVSLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUV4RSxJQUFJLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTlDLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFDLElBQUksT0FBTyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVDLElBQUksU0FBUyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzlELE1BQU0sQ0FBSSxXQUFXLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDO1lBckJVLDJCQUFlLEdBQVcsR0FBRyxDQUFDO1lBRnpDLHFDQXVCQyxDQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7VG9rZW5QYXJzZWR9IGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vLi4vVXRpbHMvQmFzZTY0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlclxyXG57XHJcbiAgICBzdGF0aWMgVE9LRU5fU0VQQVJBVE9SIDpzdHJpbmcgPSBcIi5cIjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbiA6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOlRcclxuICAgIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5TcGxpdHRlZCA9IHRoaXMudG9rZW4uc3BsaXQoVG9rZW5QYXJzZXIuVE9LRU5fU0VQQVJBVE9SKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICAgICAgbGV0IGVuY29kZWRDb250ZW50ID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsxXTtcclxuICAgICAgICBsZXQgZW5jb2RlZFNpZ25hdHVyZSA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZEhlYWRlcik7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRDb250ZW50KTtcclxuICAgICAgICBsZXQgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSBuZXcgVG9rZW5QYXJzZWQoaGVhZGVyLCBjb250ZW50LCBzaWduYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiA8VD50b2tlblBhcnNlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
