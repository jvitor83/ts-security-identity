(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export default Principal;
    var Principal = /** @class */ (function () {
        function Principal(Identity, AuthenticationType) {
            if (AuthenticationType === void 0) { AuthenticationType = 'Generic'; }
            this.Identity = Identity;
            this.AuthenticationType = AuthenticationType;
        }
        Object.defineProperty(Principal.prototype, "IsAuthenticated", {
            get: function () {
                var isAuthenticated = false;
                if (this.Identity) {
                    isAuthenticated = this.Identity.IsAuthenticated;
                }
                return isAuthenticated;
            },
            enumerable: true,
            configurable: true
        });
        return Principal;
    }());
    exports.Principal = Principal;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBLDRCQUE0QjtJQUU1QjtRQUNFLG1CQUFtQixRQUFtQixFQUFTLGtCQUFzQztZQUF0QyxtQ0FBQSxFQUFBLDhCQUFzQztZQUFsRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUVyRixDQUFDO1FBRUQsc0JBQVcsc0NBQWU7aUJBQTFCO2dCQUNFLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDbEQsQ0FBQztnQkFDRCxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBQ0gsZ0JBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLDhCQUFTIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk6IElJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nID0gJ0dlbmVyaWMnKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5JZGVudGl0eSkge1xyXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLklkZW50aXR5LklzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
