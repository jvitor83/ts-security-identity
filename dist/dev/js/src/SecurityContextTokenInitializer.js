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
    // export default SecurityContextTokenInitializer;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRUEsZ0VBQTZEO0lBQzdELGtEQUErQztJQUUvQyxrREFBa0Q7SUFFbEQ7UUFDRSx5Q0FBbUIsTUFBYTtZQUFiLFdBQU0sR0FBTixNQUFNLENBQU87UUFFaEMsQ0FBQztRQUVNLG9EQUFVLEdBQWpCLFVBQWtCLGVBQWdDO1lBQ2hELGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFDSCxzQ0FBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksMEVBQStCIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBhbnlbXSkge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dDogU2VjdXJpdHlDb250ZXh0KSB7XHJcbiAgICBzZWN1cml0eUNvbnRleHQuUHJpbmNpcGFsLklkZW50aXR5ID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=
