(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    //export default Principal;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFHQSwyQkFBMkI7SUFFM0I7UUFFSSxtQkFBbUIsUUFBbUIsRUFBUyxrQkFBc0M7WUFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztZQUFsRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUdyRixDQUFDO1FBRUQsc0JBQVcsc0NBQWU7aUJBQTFCO2dCQUVJLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNqQixDQUFDO29CQUNHLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQzNCLENBQUM7OztXQUFBO1FBQ0wsZ0JBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLGlCQUFTLFlBZ0JyQixDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWxcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIElkZW50aXR5IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLklkZW50aXR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5JZGVudGl0eS5Jc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcbn0iXX0=
