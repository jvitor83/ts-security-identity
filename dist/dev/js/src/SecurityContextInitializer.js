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
    // import {ISecurityContextInitializer} from './ISecurityContextInitializer';
    // export default SecurityContextInitializer;
    var SecurityContextInitializer = /** @class */ (function () {
        function SecurityContextInitializer() {
        }
        // public static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer :{ new(...args): T }, ...args): T
        // {
        //     let securityContextInitializer = new typeOfSecurityContextInitializer(args);
        //     let castedSecurityContextInitializer = <T>securityContextInitializer;
        //     return castedSecurityContextInitializer;
        // }
        SecurityContextInitializer.InitializeWithTokens = function (tokens) {
            var securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(tokens);
            // let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer, tokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
            var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.SecurityContextEncodedTokenInitializer(encodedTokens);
            // let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextEncodedTokenInitializer, encodedTokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        return SecurityContextInitializer;
    }());
    exports.SecurityContextInitializer = SecurityContextInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBLHFEQUFrRDtJQUNsRCxxRkFBa0Y7SUFDbEYsbUdBQWdHO0lBRWhHLDZFQUE2RTtJQUM3RSw2Q0FBNkM7SUFFN0M7UUFBQTtRQXNCQSxDQUFDO1FBcEJDLGlJQUFpSTtRQUNqSSxJQUFJO1FBQ0osbUZBQW1GO1FBQ25GLDRFQUE0RTtRQUM1RSwrQ0FBK0M7UUFDL0MsSUFBSTtRQUVVLCtDQUFvQixHQUFsQyxVQUFtQyxNQUFhO1lBQzlDLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxpRUFBK0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRSwrR0FBK0c7WUFDL0csaUNBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDO1FBQ2pDLENBQUM7UUFFYSxzREFBMkIsR0FBekMsVUFBMEMsYUFBdUI7WUFDL0QsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLCtFQUFzQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdGLDZIQUE2SDtZQUM3SCxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7UUFDakMsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtJQXRCcUIsZ0VBQTBCIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyJztcclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG4vLyBpbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciB7XHJcblxyXG4gIC8vIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI+KHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDp7IG5ldyguLi5hcmdzKTogVCB9LCAuLi5hcmdzKTogVFxyXG4gIC8vIHtcclxuICAvLyAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKGFyZ3MpO1xyXG4gIC8vICAgICBsZXQgY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSA8VD5zZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAvLyAgICAgcmV0dXJuIGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aFRva2Vucyh0b2tlbnM6IGFueVtdKTogU2VjdXJpdHlDb250ZXh0IHtcclxuICAgIGNvbnN0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIodG9rZW5zKTtcclxuICAgIC8vIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCB0b2tlbnMpO1xyXG4gICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplcik7XHJcbiAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoRW5jb2RlZFRva2VucyhlbmNvZGVkVG9rZW5zOiBzdHJpbmdbXSk6IFNlY3VyaXR5Q29udGV4dCB7XHJcbiAgICBjb25zdCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcihlbmNvZGVkVG9rZW5zKTtcclxuICAgIC8vIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplciwgZW5jb2RlZFRva2Vucyk7XHJcbiAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICB9XHJcbn1cclxuIl19
