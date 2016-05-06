System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal;
    return {
        setters:[],
        execute: function() {
            //export default Principal;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0EsMkJBQTJCO1lBRTNCO2dCQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztvQkFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztvQkFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtvQkFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO2dCQUd0RixDQUFDO2dCQUVELHNCQUFXLHNDQUFlO3lCQUExQjt3QkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBQ0wsZ0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELGlDQWtCQyxDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgUHJpbmNpcGFsO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWxcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIElkZW50aXR5PyA6SUlkZW50aXR5LCBwdWJsaWMgQXV0aGVudGljYXRpb25UeXBlIDpzdHJpbmcgPSBcIkdlbmVyaWNcIikgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5JZGVudGl0eSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
