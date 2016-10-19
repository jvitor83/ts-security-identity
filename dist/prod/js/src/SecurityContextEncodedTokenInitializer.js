(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Tokens/Parsers/TokenParser', './Identities/IdentityFactory', './Identities/Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var TokenParser_1 = require('./Tokens/Parsers/TokenParser');
    var IdentityFactory_1 = require('./Identities/IdentityFactory');
    var Identity_1 = require('./Identities/Identity');
    var SecurityContextEncodedTokenInitializer = (function () {
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
    exports.SecurityContextEncodedTokenInitializer = SecurityContextEncodedTokenInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUdBLDRCQUEwQiw4QkFBOEIsQ0FBQyxDQUFBO0lBQ3pELGdDQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0lBQzdELHlCQUF1Qix1QkFBdUIsQ0FBQyxDQUFBO0lBSS9DO1FBRUksZ0RBQW1CLGFBQXVCO1lBQXZCLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1FBRzFDLENBQUM7UUFFTSwyREFBVSxHQUFqQixVQUFrQixlQUFnQztZQUU5QyxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsWUFBWTtnQkFFM0QsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFdBQVcsR0FBRyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDekUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3JELENBQUM7UUFDTCw2Q0FBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksOENBQXNDLHlDQW9CbEQsQ0FBQSIsImZpbGUiOiJTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplciBpbXBsZW1lbnRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplclxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5jb2RlZFRva2VucyA6c3RyaW5nW10pIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdGlhbGl6ZShzZWN1cml0eUNvbnRleHQgOlNlY3VyaXR5Q29udGV4dClcclxuICAgIHtcclxuICAgICAgICBsZXQgZGVjb2RlZFRva2Vuc0NvbnRlbnQgPSB0aGlzLmVuY29kZWRUb2tlbnMubWFwKChlbmNvZGVkVG9rZW4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5QYXJzZXIgPSBuZXcgVG9rZW5QYXJzZXIoZW5jb2RlZFRva2VuKTtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gdG9rZW5QYXJzZXIuUGFyc2UoKTtcclxuICAgICAgICAgICAgbGV0IHRva2VuQ29udGVudCA9IHRva2VuUGFyc2VkLmNvbnRlbnRKU09OO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5Db250ZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgZGVjb2RlZFRva2Vuc0NvbnRlbnQpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
