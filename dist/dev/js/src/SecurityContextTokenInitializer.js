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
            //export default SecurityContextTokenInitializer;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBS0EsaURBQWlEO1lBRWpEO2dCQUVJLHlDQUFtQixNQUFhO29CQUFiLFdBQU0sR0FBTixNQUFNLENBQU87Z0JBR2hDLENBQUM7Z0JBRU0sb0RBQVUsR0FBakIsVUFBa0IsZUFBZ0M7b0JBRTlDLElBQUksV0FBVyxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ3JELENBQUM7Z0JBQ0wsc0NBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZFQVlDLENBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnMgOmFueVtdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4gICAgIl19
