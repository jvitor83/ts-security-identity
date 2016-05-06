"use strict";
var Principal = (function () {
    function Principal(Identity, AuthenticationType) {
        if (AuthenticationType === void 0) { AuthenticationType = "Generic"; }
        this.Identity = Identity;
        this.AuthenticationType = AuthenticationType;
    }
    Object.defineProperty(Principal.prototype, "IsAuthenticated", {
        get: function () {
            if (this.Identity != null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Principal;
}());
exports.Principal = Principal;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFFSSxtQkFBbUIsUUFBb0IsRUFBUyxrQkFBc0M7UUFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUd0RixDQUFDO0lBRUQsc0JBQVcsc0NBQWU7YUFBMUI7WUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDO2dCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGlCQUFTLFlBa0JyQixDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcmluY2lwYWwgfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQgeyBJSWRlbnRpdHkgfSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk/IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLklkZW50aXR5ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
