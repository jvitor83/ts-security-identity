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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUVJLG1CQUFtQixRQUFtQixFQUFTLGtCQUFzQztRQUE3QyxrQ0FBNkMsR0FBN0MsOEJBQTZDO1FBQWxFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBR3JGLENBQUM7SUFFRCxzQkFBVyxzQ0FBZTthQUExQjtZQUVJLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM1QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2pCLENBQUM7Z0JBQ0csZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGlCQUFTLFlBZ0JyQixDQUFBIiwiZmlsZSI6IklkZW50aXRpZXMvUHJpbmNpcGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBQcmluY2lwYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHkgOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuSWRlbnRpdHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLklkZW50aXR5LklzQXV0aGVudGljYXRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxufSJdfQ==
