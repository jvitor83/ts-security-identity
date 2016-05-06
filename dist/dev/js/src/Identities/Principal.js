System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal;
    return {
        setters:[],
        execute: function() {
            Principal = (function () {
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
            exports_1("Principal", Principal);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBSUk7Z0JBRUksbUJBQW1CLFFBQW9CLEVBQVMsa0JBQXNDO29CQUE3QyxrQ0FBNkMsR0FBN0MsOEJBQTZDO29CQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFZO29CQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7Z0JBR3RGLENBQUM7Z0JBRUQsc0JBQVcsc0NBQWU7eUJBQTFCO3dCQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQzFCLENBQUM7NEJBQ0csTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQzt3QkFDRCxJQUFJLENBQ0osQ0FBQzs0QkFDRyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNqQixDQUFDO29CQUNMLENBQUM7OzttQkFBQTtnQkFDTCxnQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsaUNBa0JDLENBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvUHJpbmNpcGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eT8gOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLklkZW50aXR5ICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
