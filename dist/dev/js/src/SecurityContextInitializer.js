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
            class SecurityContextInitializer {
                static Create(typeOfSecurityContextInitializer, ...args) {
                    let securityContextInitializer = new typeOfSecurityContextInitializer(args);
                    let castedSecurityContextInitializer = securityContextInitializer;
                    return castedSecurityContextInitializer;
                }
                static InitializeWithTokens(tokens) {
                    let securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, tokens);
                    SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.SecurityContext.Current;
                }
                static InitializeWithEncodedTokens(encodedTokens) {
                    let securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, encodedTokens);
                    SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.SecurityContext.Current;
                }
            }
            exports_1("SecurityContextInitializer", SecurityContextInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLE9BQWMsTUFBTSxDQUF3QyxnQ0FBcUQsRUFBRSxHQUFHLElBQUk7b0JBRXRILElBQUksMEJBQTBCLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxnQ0FBZ0MsR0FBTSwwQkFBMEIsQ0FBQztvQkFDckUsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELE9BQWMsb0JBQW9CLENBQUMsTUFBYTtvQkFFNUMsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsaUVBQStCLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pILGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsT0FBYywyQkFBMkIsQ0FBQyxhQUF1QjtvQkFFN0QsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsaUVBQStCLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3hILGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1lBdEJELG1FQXNCQyxDQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXJ9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI+KHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDp7IG5ldyguLi5hcmdzKTogVCB9LCAuLi5hcmdzKTogVFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyB0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcihhcmdzKTtcclxuICAgICAgICBsZXQgY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSA8VD5zZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgICAgICByZXR1cm4gY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhUb2tlbnModG9rZW5zOiBhbnlbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIHRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhFbmNvZGVkVG9rZW5zKGVuY29kZWRUb2tlbnM6IHN0cmluZ1tdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgZW5jb2RlZFRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19
