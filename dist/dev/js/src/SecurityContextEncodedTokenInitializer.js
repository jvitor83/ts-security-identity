System.register(['./Tokens/Parsers/TokenParser', './Identities/IdentityFactory', './Identities/Identity'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParser_1, IdentityFactory_1, Identity_1;
    var SecurityContextEncodedTokenInitializer;
    return {
        setters:[
            function (TokenParser_1_1) {
                TokenParser_1 = TokenParser_1_1;
            },
            function (IdentityFactory_1_1) {
                IdentityFactory_1 = IdentityFactory_1_1;
            },
            function (Identity_1_1) {
                Identity_1 = Identity_1_1;
            }],
        execute: function() {
            exports_1("default",SecurityContextEncodedTokenInitializer);
            SecurityContextEncodedTokenInitializer = (function () {
                function SecurityContextEncodedTokenInitializer(encodedTokens) {
                    this.encodedTokens = encodedTokens;
                }
                SecurityContextEncodedTokenInitializer.prototype.Initialize = function (securityContext) {
                    var decodedTokensContent = this.encodedTokens.map(function (encodedToken) {
                        var tokenParser = new TokenParser_1.default(encodedToken);
                        var tokenParsed = tokenParser.Parse();
                        var tokenContent = tokenParsed.contentJSON;
                        return tokenContent;
                    });
                    var userCreated = IdentityFactory_1.default.Create(Identity_1.default, decodedTokensContent);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextEncodedTokenInitializer;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLG9CQUFlLHNDQUFzQyxFQUFDO1lBRXREO2dCQUVJLGdEQUFtQixhQUF1QjtvQkFBdkIsa0JBQWEsR0FBYixhQUFhLENBQVU7Z0JBRzFDLENBQUM7Z0JBRU0sMkRBQVUsR0FBakIsVUFBa0IsZUFBZ0M7b0JBRTlDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxZQUFZO3dCQUUzRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2hELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQzt3QkFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxXQUFXLEdBQUcseUJBQWUsQ0FBQyxNQUFNLENBQUMsa0JBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO29CQUN6RSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ3JELENBQUM7Z0JBQ0wsNkNBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN1cml0eUNvbnRleHQgZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCBUb2tlblBhcnNlciBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuaW1wb3J0IElkZW50aXR5RmFjdG9yeSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmNsYXNzIFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmNvZGVkVG9rZW5zIDpzdHJpbmdbXSkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dCA6U2VjdXJpdHlDb250ZXh0KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkZWNvZGVkVG9rZW5zQ29udGVudCA9IHRoaXMuZW5jb2RlZFRva2Vucy5tYXAoKGVuY29kZWRUb2tlbikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlciA9IG5ldyBUb2tlblBhcnNlcihlbmNvZGVkVG9rZW4pO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSB0b2tlblBhcnNlci5QYXJzZSgpO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5Db250ZW50ID0gdG9rZW5QYXJzZWQuY29udGVudEpTT047XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbkNvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgZGVjb2RlZFRva2Vuc0NvbnRlbnQpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
