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
            if (AuthenticationType === void 0) { AuthenticationType = "Generic"; }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUtBO1FBRUksbUJBQW1CLFFBQW1CLEVBQVMsa0JBQXNDO1lBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7WUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztZQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFHckYsQ0FBQztRQUVELHNCQUFXLHNDQUFlO2lCQUExQjtnQkFFSSxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDakIsQ0FBQztvQkFDRyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUMzQixDQUFDOzs7V0FBQTtRQUNMLGdCQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxpQkFBUyxZQWdCckIsQ0FBQSIsImZpbGUiOiJJZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWxcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIElkZW50aXR5IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLklkZW50aXR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5JZGVudGl0eS5Jc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcbn0iXX0=
