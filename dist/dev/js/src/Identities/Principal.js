System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal;
    return {
        setters:[],
        execute: function() {
            exports_1("default",Principal);
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0Esb0JBQWUsU0FBUyxFQUFDO1lBRXpCO2dCQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztvQkFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztvQkFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtvQkFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO2dCQUd0RixDQUFDO2dCQUVELHNCQUFXLHNDQUFlO3lCQUExQjt3QkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBQ0wsZ0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUHJpbmNpcGFsIGZyb20gJy4vSVByaW5jaXBhbCc7XHJcbmltcG9ydCBJSWRlbnRpdHkgZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsO1xyXG5cclxuY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk/IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLklkZW50aXR5ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
