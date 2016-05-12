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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsMkJBQTJCO0FBRTNCO0lBRUksbUJBQW1CLFFBQW9CLEVBQVMsa0JBQXNDO1FBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFHdEYsQ0FBQztJQUVELHNCQUFXLHNDQUFlO2FBQTFCO1lBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FDMUIsQ0FBQztnQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxJQUFJLENBQ0osQ0FBQztnQkFDRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUNMLGdCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxpQkFBUyxZQWtCckIsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9QcmluY2lwYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eT8gOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuSWRlbnRpdHkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
