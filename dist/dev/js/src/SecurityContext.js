System.register(['./Identities/Principal'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal_1;
    var SecurityContext;
    return {
        setters:[
            function (Principal_1_1) {
                Principal_1 = Principal_1_1;
            }],
        execute: function() {
            exports_1("default",SecurityContext);
            SecurityContext = (function () {
                function SecurityContext() {
                    this._Principal = {
                        IsAuthenticated: false,
                        Identity: null
                    };
                    this.Principal = new Principal_1.default();
                }
                Object.defineProperty(SecurityContext, "Current", {
                    get: function () {
                        if (SecurityContext._current === null) {
                            SecurityContext._current = new SecurityContext();
                        }
                        return SecurityContext._current;
                    },
                    enumerable: true,
                    configurable: true
                });
                SecurityContext.Reset = function () {
                    SecurityContext._current = null;
                };
                Object.defineProperty(SecurityContext.prototype, "Principal", {
                    get: function () {
                        return this._Principal;
                    },
                    set: function (value) {
                        this._Principal = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SecurityContext.prototype.Init = function (securityContextInitializer) {
                    securityContextInitializer.Initialize(this);
                };
                SecurityContext._current = null;
                return SecurityContext;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFJQSxvQkFBZSxlQUFlLEVBQUM7WUFFL0I7Z0JBa0JJO29CQUtRLGVBQVUsR0FDbEI7d0JBQ0ksZUFBZSxFQUFFLEtBQUs7d0JBQ3RCLFFBQVEsRUFBRSxJQUFJO3FCQUNqQixDQUFDO29CQVBFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBakJELHNCQUFrQiwwQkFBTzt5QkFBekI7d0JBRUksRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FDckMsQ0FBQzs0QkFDRyxlQUFlLENBQUMsUUFBUSxHQUFJLElBQUksZUFBZSxFQUFFLENBQUM7d0JBQ3RELENBQUM7d0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7b0JBQ3BDLENBQUM7OzttQkFBQTtnQkFFYSxxQkFBSyxHQUFuQjtvQkFFSSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDcEMsQ0FBQztnQkFhRCxzQkFBVyxzQ0FBUzt5QkFBcEI7d0JBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzNCLENBQUM7eUJBRUQsVUFBcUIsS0FBaUI7d0JBRWxDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUM1QixDQUFDOzs7bUJBTEE7Z0JBT00sOEJBQUksR0FBWCxVQUFZLDBCQUF1RDtvQkFFL0QsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQXhDYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7Z0JBeUNwRCxzQkFBQztZQUFELENBM0NBLEFBMkNDLElBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUHJpbmNpcGFsIGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IFByaW5jaXBhbCBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHQ7XHJcblxyXG5jbGFzcyBTZWN1cml0eUNvbnRleHQgXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1cnJlbnQoKTogU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9ICBuZXcgU2VjdXJpdHlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLlByaW5jaXBhbCA9IG5ldyBQcmluY2lwYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAge1xyXG4gICAgICAgIElzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBQcmluY2lwYWwoKTogSVByaW5jaXBhbCBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJpbmNpcGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKVxyXG4gICAge1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=
