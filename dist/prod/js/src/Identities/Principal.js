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
    var Principal = (function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS0E7UUFDRSxtQkFBbUIsUUFBbUIsRUFBUyxrQkFBc0M7WUFBdEMsbUNBQUEsRUFBQSw4QkFBc0M7WUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztZQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFckYsQ0FBQztRQUVELHNCQUFXLHNDQUFlO2lCQUExQjtnQkFDRSxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQixlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUNILGdCQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSw4QkFBUyIsImZpbGUiOiJJZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk6IElJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nID0gJ0dlbmVyaWMnKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5JZGVudGl0eSkge1xyXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLklkZW50aXR5LklzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
