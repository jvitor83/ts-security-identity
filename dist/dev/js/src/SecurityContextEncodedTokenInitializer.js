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
            //export default SecurityContextEncodedTokenInitializer;
            SecurityContextEncodedTokenInitializer = (function () {
                function SecurityContextEncodedTokenInitializer(encodedTokens) {
                    this.encodedTokens = encodedTokens;
                }
                SecurityContextEncodedTokenInitializer.prototype.Initialize = function (securityContext) {
                    var decodedTokensContent = this.encodedTokens.map(function (encodedToken) {
                        var tokenParser = new TokenParser_1.TokenParser(encodedToken);
                        var tokenParsed = tokenParser.Parse();
                        var tokenContent = tokenParsed.contentJSON;
                        return tokenContent;
                    });
                    var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, decodedTokensContent);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextEncodedTokenInitializer;
            }());
            exports_1("SecurityContextEncodedTokenInitializer", SecurityContextEncodedTokenInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLHdEQUF3RDtZQUV4RDtnQkFFSSxnREFBbUIsYUFBdUI7b0JBQXZCLGtCQUFhLEdBQWIsYUFBYSxDQUFVO2dCQUcxQyxDQUFDO2dCQUVNLDJEQUFVLEdBQWpCLFVBQWtCLGVBQWdDO29CQUU5QyxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsWUFBWTt3QkFFM0QsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNoRCxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3RDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7d0JBQzNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksV0FBVyxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztvQkFDekUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUNyRCxDQUFDO2dCQUNMLDZDQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyRkFvQkMsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtUb2tlblBhcnNlcn0gZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuY29kZWRUb2tlbnMgOnN0cmluZ1tdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRlY29kZWRUb2tlbnNDb250ZW50ID0gdGhpcy5lbmNvZGVkVG9rZW5zLm1hcCgoZW5jb2RlZFRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGVuY29kZWRUb2tlbik7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbkNvbnRlbnQgPSB0b2tlblBhcnNlZC5jb250ZW50SlNPTjtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuQ29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCBkZWNvZGVkVG9rZW5zQ29udGVudCk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
