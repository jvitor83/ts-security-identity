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
            exports_1("default",SecurityContextTokenInitializer);
            SecurityContextTokenInitializer = (function () {
                function SecurityContextTokenInitializer(tokens) {
                    this.tokens = tokens;
                }
                SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
                    var userCreated = IdentityFactory_1.default.Create(Identity_1.default, this.tokens);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextTokenInitializer;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBS0Esb0JBQWUsK0JBQStCLEVBQUM7WUFFL0M7Z0JBRUkseUNBQW1CLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztnQkFHaEMsQ0FBQztnQkFFTSxvREFBVSxHQUFqQixVQUFrQixlQUFnQztvQkFFOUMsSUFBSSxXQUFXLEdBQUcseUJBQWUsQ0FBQyxNQUFNLENBQUMsa0JBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hFLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDckQsQ0FBQztnQkFDTCxzQ0FBQztZQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3VyaXR5Q29udGV4dCBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcblxyXG5pbXBvcnQgSWRlbnRpdHlGYWN0b3J5IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXI7XHJcblxyXG5jbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplclxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zIDphbnlbXSkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dCA6U2VjdXJpdHlDb250ZXh0KVxyXG4gICAge1xyXG4gICAgICAgIGxldCB1c2VyQ3JlYXRlZCA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUoSWRlbnRpdHksIHRoaXMudG9rZW5zKTtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHQuUHJpbmNpcGFsLklkZW50aXR5ID0gdXNlckNyZWF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuICAgICJdfQ==
