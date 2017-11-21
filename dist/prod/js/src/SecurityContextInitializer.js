(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SecurityContext", "./SecurityContextTokenInitializer", "./SecurityContextEncodedTokenInitializer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SecurityContext_1 = require("./SecurityContext");
    var SecurityContextTokenInitializer_1 = require("./SecurityContextTokenInitializer");
    var SecurityContextEncodedTokenInitializer_1 = require("./SecurityContextEncodedTokenInitializer");
    var SecurityContextInitializer = (function () {
        function SecurityContextInitializer() {
        }
        SecurityContextInitializer.InitializeWithTokens = function (tokens) {
            var securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(tokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
            var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.SecurityContextEncodedTokenInitializer(encodedTokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        return SecurityContextInitializer;
    }());
    exports.SecurityContextInitializer = SecurityContextInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEscURBQWtEO0lBQ2xELHFGQUFrRjtJQUNsRixtR0FBZ0c7SUFLaEc7UUFBQTtRQXNCQSxDQUFDO1FBYmUsK0NBQW9CLEdBQWxDLFVBQW1DLE1BQWE7WUFDOUMsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLGlFQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRS9FLGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDO1FBRWEsc0RBQTJCLEdBQXpDLFVBQTBDLGFBQXVCO1lBQy9ELElBQU0sMEJBQTBCLEdBQUcsSUFBSSwrRUFBc0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU3RixpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7UUFDakMsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtJQXRCcUIsZ0VBQTBCIiwiZmlsZSI6IlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyJztcclxuXHJcbi8vIGltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIHtcclxuXHJcbiAgLy8gcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcj4odHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOnsgbmV3KC4uLmFyZ3MpOiBUIH0sIC4uLmFyZ3MpOiBUXHJcbiAgLy8ge1xyXG4gIC8vICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgdHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIoYXJncyk7XHJcbiAgLy8gICAgIGxldCBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IDxUPnNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gIC8vICAgICByZXR1cm4gY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoVG9rZW5zKHRva2VuczogYW55W10pOiBTZWN1cml0eUNvbnRleHQge1xyXG4gICAgY29uc3Qgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcih0b2tlbnMpO1xyXG4gICAgLy8gbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIHRva2Vucyk7XHJcbiAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhFbmNvZGVkVG9rZW5zKGVuY29kZWRUb2tlbnM6IHN0cmluZ1tdKTogU2VjdXJpdHlDb250ZXh0IHtcclxuICAgIGNvbnN0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyKGVuY29kZWRUb2tlbnMpO1xyXG4gICAgLy8gbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLCBlbmNvZGVkVG9rZW5zKTtcclxuICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpO1xyXG4gICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gIH1cclxufVxyXG4iXX0=
