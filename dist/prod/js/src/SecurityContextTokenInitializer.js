(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Identities/IdentityFactory", "./Identities/Identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IdentityFactory_1 = require("./Identities/IdentityFactory");
    var Identity_1 = require("./Identities/Identity");
    var SecurityContextTokenInitializer = (function () {
        function SecurityContextTokenInitializer(tokens) {
            this.tokens = tokens;
        }
        SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
            securityContext.Principal.Identity = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, this.tokens);
        };
        return SecurityContextTokenInitializer;
    }());
    exports.SecurityContextTokenInitializer = SecurityContextTokenInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFFQSxnRUFBNkQ7SUFDN0Qsa0RBQStDO0lBSS9DO1FBQ0UseUNBQW1CLE1BQWE7WUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRWhDLENBQUM7UUFFTSxvREFBVSxHQUFqQixVQUFrQixlQUFnQztZQUNoRCxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBQ0gsc0NBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLDBFQUErQiIsImZpbGUiOiJTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBhbnlbXSkge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dDogU2VjdXJpdHlDb250ZXh0KSB7XHJcbiAgICBzZWN1cml0eUNvbnRleHQuUHJpbmNpcGFsLklkZW50aXR5ID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=
