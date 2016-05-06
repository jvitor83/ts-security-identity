System.register(['./SecurityContext', './SecurityContextTokenInitializer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SecurityContext_1, SecurityContextTokenInitializer_1;
    var SecurityContextInitializer;
    return {
        setters:[
            function (SecurityContext_1_1) {
                SecurityContext_1 = SecurityContext_1_1;
            },
            function (SecurityContextTokenInitializer_1_1) {
                SecurityContextTokenInitializer_1 = SecurityContextTokenInitializer_1_1;
            }],
        execute: function() {
            exports_1("default",SecurityContextInitializer);
            SecurityContextInitializer = (function () {
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
                    var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.default, tokens);
                    SecurityContext_1.default.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.default.Current;
                };
                SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
                    var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.default, encodedTokens);
                    SecurityContext_1.default.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.default.Current;
                };
                return SecurityContextInitializer;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUtBLG9CQUFlLDBCQUEwQixFQUFDO1lBRTFDO2dCQUFBO2dCQXNCQSxDQUFDO2dCQXBCaUIsaUNBQU0sR0FBcEIsVUFBNEQsZ0NBQXFEO29CQUFFLGNBQU87eUJBQVAsV0FBTyxDQUFQLHNCQUFPLENBQVAsSUFBTzt3QkFBUCw2QkFBTzs7b0JBRXRILElBQUksMEJBQTBCLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxnQ0FBZ0MsR0FBTSwwQkFBMEIsQ0FBQztvQkFDckUsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVhLCtDQUFvQixHQUFsQyxVQUFtQyxNQUFhO29CQUU1QyxJQUFJLCtCQUErQixHQUFHLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyx5Q0FBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDakgseUJBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7b0JBQzlELE1BQU0sQ0FBQyx5QkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsQ0FBQztnQkFFYSxzREFBMkIsR0FBekMsVUFBMEMsYUFBdUI7b0JBRTdELElBQUksK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLHlDQUErQixFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUN4SCx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLHlCQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNMLGlDQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdXJpdHlDb250ZXh0IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyPih0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6eyBuZXcoLi4uYXJncyk6IFQgfSwgLi4uYXJncyk6IFRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgdHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIoYXJncyk7XHJcbiAgICAgICAgbGV0IGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gPFQ+c2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICAgICAgcmV0dXJuIGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoVG9rZW5zKHRva2VuczogYW55W10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCB0b2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoRW5jb2RlZFRva2VucyhlbmNvZGVkVG9rZW5zOiBzdHJpbmdbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIGVuY29kZWRUb2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
