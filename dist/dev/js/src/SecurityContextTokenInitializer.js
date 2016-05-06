System.register(['./Identities/IdentityFactory', './Identities/Identity'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IdentityFactory_1, Identity_1;
    var SecurityContextTokenInitializer;
    return {
        setters:[
            function (IdentityFactory_1_1) {
                IdentityFactory_1 = IdentityFactory_1_1;
            },
            function (Identity_1_1) {
                Identity_1 = Identity_1_1;
            }],
        execute: function() {
            class SecurityContextTokenInitializer {
                constructor(tokens) {
                    this.tokens = tokens;
                }
                Initialize(securityContext) {
                    let userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, this.tokens);
                    securityContext.Principal.Identity = userCreated;
                }
            }
            exports_1("SecurityContextTokenInitializer", SecurityContextTokenInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksWUFBbUIsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO2dCQUdoQyxDQUFDO2dCQUVNLFVBQVUsQ0FBQyxlQUFnQztvQkFFOUMsSUFBSSxXQUFXLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hFLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDckQsQ0FBQztZQUNMLENBQUM7WUFaRCw2RUFZQyxDQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuXHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciBpbXBsZW1lbnRzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRva2VucyA6YW55W10pIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdGlhbGl6ZShzZWN1cml0eUNvbnRleHQgOlNlY3VyaXR5Q29udGV4dClcclxuICAgIHtcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCB0aGlzLnRva2Vucyk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiAgICAiXX0=
