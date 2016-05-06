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
            //export default SecurityContextInitializer;
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
            exports_1("SecurityContextInitializer", SecurityContextInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUtBLDRDQUE0QztZQUU1QztnQkFBQTtnQkFzQkEsQ0FBQztnQkFwQmlCLGlDQUFNLEdBQXBCLFVBQTRELGdDQUFxRDtvQkFBRSxjQUFPO3lCQUFQLFdBQU8sQ0FBUCxzQkFBTyxDQUFQLElBQU87d0JBQVAsNkJBQU87O29CQUV0SCxJQUFJLDBCQUEwQixHQUFHLElBQUksZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVFLElBQUksZ0NBQWdDLEdBQU0sMEJBQTBCLENBQUM7b0JBQ3JFLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDNUMsQ0FBQztnQkFFYSwrQ0FBb0IsR0FBbEMsVUFBbUMsTUFBYTtvQkFFNUMsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsaUVBQStCLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pILGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBRWEsc0RBQTJCLEdBQXpDLFVBQTBDLGFBQXVCO29CQUU3RCxJQUFJLCtCQUErQixHQUFHLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxpRUFBK0IsRUFBRSxhQUFhLENBQUMsQ0FBQztvQkFDeEgsaUNBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsQ0FBQztnQkFDTCxpQ0FBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsbUVBc0JDLENBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcj4odHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOnsgbmV3KC4uLmFyZ3MpOiBUIH0sIC4uLmFyZ3MpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKGFyZ3MpO1xyXG4gICAgICAgIGxldCBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IDxUPnNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgICAgIHJldHVybiBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aFRva2Vucyh0b2tlbnM6IGFueVtdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgdG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aEVuY29kZWRUb2tlbnMoZW5jb2RlZFRva2Vuczogc3RyaW5nW10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCBlbmNvZGVkVG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxufVxyXG4iXX0=
