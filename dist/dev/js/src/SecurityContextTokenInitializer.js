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
            SecurityContextTokenInitializer = (function () {
                function SecurityContextTokenInitializer(tokens) {
                    this.tokens = tokens;
                }
                SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
                    var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, this.tokens);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextTokenInitializer;
            }());
            exports_1("SecurityContextTokenInitializer", SecurityContextTokenInitializer);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUkseUNBQW1CLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztnQkFHaEMsQ0FBQztnQkFFTSxvREFBVSxHQUFqQixVQUFrQixlQUFnQztvQkFFOUMsSUFBSSxXQUFXLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hFLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDckQsQ0FBQztnQkFDTCxzQ0FBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsNkVBWUMsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcblxyXG5pbXBvcnQge0lkZW50aXR5RmFjdG9yeX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnMgOmFueVtdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4gICAgIl19
