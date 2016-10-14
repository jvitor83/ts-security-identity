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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsMkJBQTJCO0FBRTNCO0lBRUksbUJBQW1CLFFBQW1CLEVBQVMsa0JBQXNDO1FBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7UUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFHckYsQ0FBQztJQUVELHNCQUFXLHNDQUFlO2FBQTFCO1lBRUksSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDakIsQ0FBQztnQkFDRyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDcEQsQ0FBQztZQUNELE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDTCxnQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksaUJBQVMsWUFnQnJCLENBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvUHJpbmNpcGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBQcmluY2lwYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHkgOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuSWRlbnRpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLklkZW50aXR5LklzQXV0aGVudGljYXRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxufSJdfQ==
