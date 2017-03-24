(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Identities/IdentityFactory', './Identities/Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var IdentityFactory_1 = require('./Identities/IdentityFactory');
    var Identity_1 = require('./Identities/Identity');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUVBLGdDQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0lBQzdELHlCQUF1Qix1QkFBdUIsQ0FBQyxDQUFBO0lBRS9DLGtEQUFrRDtJQUVsRDtRQUNFLHlDQUFtQixNQUFhO1lBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUVoQyxDQUFDO1FBRU0sb0RBQVUsR0FBakIsVUFBa0IsZUFBZ0M7WUFDaEQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckYsQ0FBQztRQUNILHNDQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSx1Q0FBK0Isa0NBUTNDLENBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5pbXBvcnQge0lkZW50aXR5RmFjdG9yeX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnM6IGFueVtdKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0OiBTZWN1cml0eUNvbnRleHQpIHtcclxuICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCB0aGlzLnRva2Vucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
