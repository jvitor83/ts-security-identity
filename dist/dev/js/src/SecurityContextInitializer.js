"use strict";
var SecurityContext_1 = require('./SecurityContext');
var SecurityContextTokenInitializer_1 = require('./SecurityContextTokenInitializer');
//export default SecurityContextInitializer;
var SecurityContextInitializer = (function () {
    function SecurityContextInitializer() {
    }
    SecurityContextInitializer.Create = function (typeOfSecurityContextInitializer) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var securityContextInitializer = new typeOfSecurityContextInitializer(args);
        var castedSecurityContextInitializer = securityContextInitializer;
        return castedSecurityContextInitializer;
    };
    SecurityContextInitializer.InitializeWithTokens = function (tokens) {
        var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, tokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
        var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, encodedTokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    return SecurityContextInitializer;
}());
exports.SecurityContextInitializer = SecurityContextInitializer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFHbEQsZ0RBQThDLG1DQUFtQyxDQUFDLENBQUE7QUFFbEYsNENBQTRDO0FBRTVDO0lBQUE7SUFzQkEsQ0FBQztJQXBCaUIsaUNBQU0sR0FBcEIsVUFBNEQsZ0NBQXFEO1FBQUUsY0FBTzthQUFQLFdBQU8sQ0FBUCxzQkFBTyxDQUFQLElBQU87WUFBUCw2QkFBTzs7UUFFdEgsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUksZ0NBQWdDLEdBQU0sMEJBQTBCLENBQUM7UUFDckUsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7SUFFYSwrQ0FBb0IsR0FBbEMsVUFBbUMsTUFBYTtRQUU1QyxJQUFJLCtCQUErQixHQUFHLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxpRUFBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqSCxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUVhLHNEQUEyQixHQUF6QyxVQUEwQyxhQUF1QjtRQUU3RCxJQUFJLCtCQUErQixHQUFHLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxpRUFBK0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4SCxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCcUIsa0NBQTBCLDZCQXNCL0MsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyPih0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6eyBuZXcoLi4uYXJncyk6IFQgfSwgLi4uYXJncyk6IFRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgdHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIoYXJncyk7XHJcbiAgICAgICAgbGV0IGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gPFQ+c2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICAgICAgcmV0dXJuIGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoVG9rZW5zKHRva2VuczogYW55W10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCB0b2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoRW5jb2RlZFRva2VucyhlbmNvZGVkVG9rZW5zOiBzdHJpbmdbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIGVuY29kZWRUb2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
