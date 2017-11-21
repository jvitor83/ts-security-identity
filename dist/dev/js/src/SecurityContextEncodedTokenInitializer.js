(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Tokens/Parsers/TokenParser", "./Identities/IdentityFactory", "./Identities/Identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TokenParser_1 = require("./Tokens/Parsers/TokenParser");
    var IdentityFactory_1 = require("./Identities/IdentityFactory");
    var Identity_1 = require("./Identities/Identity");
    // export default SecurityContextEncodedTokenInitializer;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUVBLDREQUF5RDtJQUN6RCxnRUFBNkQ7SUFDN0Qsa0RBQStDO0lBRS9DLHlEQUF5RDtJQUV6RDtRQUNFLGdEQUFtQixhQUF1QjtZQUF2QixrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUUxQyxDQUFDO1FBRU0sMkRBQVUsR0FBakIsVUFBa0IsZUFBZ0M7WUFDaEQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFlBQVk7Z0JBQy9ELElBQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbEQsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBQ0gsNkNBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJZLHdGQUFzQyIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmNvZGVkVG9rZW5zOiBzdHJpbmdbXSkge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dDogU2VjdXJpdHlDb250ZXh0KSB7XHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW5zQ29udGVudCA9IHRoaXMuZW5jb2RlZFRva2Vucy5tYXAoKGVuY29kZWRUb2tlbikgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlblBhcnNlciA9IG5ldyBUb2tlblBhcnNlcihlbmNvZGVkVG9rZW4pO1xyXG4gICAgICBjb25zdCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICAgIHJldHVybiB0b2tlblBhcnNlZC5jb250ZW50SlNPTjtcclxuICAgIH0pO1xyXG4gICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUoSWRlbnRpdHksIGRlY29kZWRUb2tlbnNDb250ZW50KTtcclxuICB9XHJcbn1cclxuIl19
