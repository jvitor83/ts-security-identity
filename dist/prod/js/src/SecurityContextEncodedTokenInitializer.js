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
                return tokenParsed.contentJSON;
            });
            securityContext.Principal.Identity = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, decodedTokensContent);
        };
        return SecurityContextEncodedTokenInitializer;
    }());
    exports.SecurityContextEncodedTokenInitializer = SecurityContextEncodedTokenInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUVBLDRCQUEwQiw4QkFBOEIsQ0FBQyxDQUFBO0lBQ3pELGdDQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0lBQzdELHlCQUF1Qix1QkFBdUIsQ0FBQyxDQUFBO0lBSS9DO1FBQ0UsZ0RBQW1CLGFBQXVCO1lBQXZCLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1FBRTFDLENBQUM7UUFFTSwyREFBVSxHQUFqQixVQUFrQixlQUFnQztZQUNoRCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsWUFBWTtnQkFDL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFDSCw2Q0FBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksOENBQXNDLHlDQWFsRCxDQUFBIiwiZmlsZSI6IlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuaW1wb3J0IHtUb2tlblBhcnNlcn0gZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5jb2RlZFRva2Vuczogc3RyaW5nW10pIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgSW5pdGlhbGl6ZShzZWN1cml0eUNvbnRleHQ6IFNlY3VyaXR5Q29udGV4dCkge1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2Vuc0NvbnRlbnQgPSB0aGlzLmVuY29kZWRUb2tlbnMubWFwKChlbmNvZGVkVG9rZW4pID0+IHtcclxuICAgICAgY29uc3QgdG9rZW5QYXJzZXIgPSBuZXcgVG9rZW5QYXJzZXIoZW5jb2RlZFRva2VuKTtcclxuICAgICAgY29uc3QgdG9rZW5QYXJzZWQgPSB0b2tlblBhcnNlci5QYXJzZSgpO1xyXG4gICAgICByZXR1cm4gdG9rZW5QYXJzZWQuY29udGVudEpTT047XHJcbiAgICB9KTtcclxuICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCBkZWNvZGVkVG9rZW5zQ29udGVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
