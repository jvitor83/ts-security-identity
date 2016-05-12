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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztRQUE3QyxrQ0FBNkMsR0FBN0MsOEJBQTZDO1FBQW5FLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBR3RGLENBQUM7SUFFRCxzQkFBVyxzQ0FBZTthQUExQjtZQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQzFCLENBQUM7Z0JBQ0csTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFDTCxnQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksaUJBQVMsWUFrQnJCLENBQUEiLCJmaWxlIjoiSWRlbnRpdGllcy9QcmluY2lwYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eT8gOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuSWRlbnRpdHkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
