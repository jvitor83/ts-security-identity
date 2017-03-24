(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUtBO1FBQ0UsbUJBQW1CLFFBQW1CLEVBQVMsa0JBQXNDO1lBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7WUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztZQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFckYsQ0FBQztRQUVELHNCQUFXLHNDQUFlO2lCQUExQjtnQkFDRSxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQixlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUNILGdCQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxpQkFBUyxZQVlyQixDQUFBIiwiZmlsZSI6IklkZW50aXRpZXMvUHJpbmNpcGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWwge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eTogSUlkZW50aXR5LCBwdWJsaWMgQXV0aGVudGljYXRpb25UeXBlOiBzdHJpbmcgPSAnR2VuZXJpYycpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLklkZW50aXR5KSB7XHJcbiAgICAgIGlzQXV0aGVudGljYXRlZCA9IHRoaXMuSWRlbnRpdHkuSXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICB9XHJcbn1cclxuIl19
