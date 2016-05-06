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
            class SecurityContextEncodedTokenInitializer {
                constructor(encodedTokens) {
                    this.encodedTokens = encodedTokens;
                }
                Initialize(securityContext) {
                    let decodedTokensContent = this.encodedTokens.map((encodedToken) => {
                        let tokenParser = new TokenParser_1.TokenParser(encodedToken);
                        let tokenParsed = tokenParser.Parse();
                        let tokenContent = tokenParsed.contentJSON;
                        return tokenContent;
                    });
                    let userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, decodedTokensContent);
                    securityContext.Principal.Identity = userCreated;
                }
            }
            exports_1("SecurityContextEncodedTokenInitializer", SecurityContextEncodedTokenInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVJLFlBQW1CLGFBQXVCO29CQUF2QixrQkFBYSxHQUFiLGFBQWEsQ0FBVTtnQkFHMUMsQ0FBQztnQkFFTSxVQUFVLENBQUMsZUFBZ0M7b0JBRTlDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZO3dCQUUzRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2hELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQzt3QkFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxXQUFXLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO29CQUN6RSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ3JELENBQUM7WUFDTCxDQUFDO1lBcEJELDJGQW9CQyxDQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHsgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIH0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtUb2tlblBhcnNlcn0gZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuY29kZWRUb2tlbnMgOnN0cmluZ1tdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRlY29kZWRUb2tlbnNDb250ZW50ID0gdGhpcy5lbmNvZGVkVG9rZW5zLm1hcCgoZW5jb2RlZFRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGVuY29kZWRUb2tlbik7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbkNvbnRlbnQgPSB0b2tlblBhcnNlZC5jb250ZW50SlNPTjtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuQ29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCBkZWNvZGVkVG9rZW5zQ29udGVudCk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
