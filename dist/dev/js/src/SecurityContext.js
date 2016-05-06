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
            SecurityContext = (function () {
                function SecurityContext() {
                    this._Principal = {
                        IsAuthenticated: false,
                        Identity: null
                    };
                    this.Principal = new Principal_1.Principal();
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
            exports_1("SecurityContext", SecurityContext);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFJSTtnQkFrQkk7b0JBS1EsZUFBVSxHQUNsQjt3QkFDSSxlQUFlLEVBQUUsS0FBSzt3QkFDdEIsUUFBUSxFQUFFLElBQUk7cUJBQ2pCLENBQUM7b0JBUEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFqQkQsc0JBQWtCLDBCQUFPO3lCQUF6Qjt3QkFFSSxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUNyQyxDQUFDOzRCQUNHLGVBQWUsQ0FBQyxRQUFRLEdBQUksSUFBSSxlQUFlLEVBQUUsQ0FBQzt3QkFDdEQsQ0FBQzt3QkFDRCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztvQkFDcEMsQ0FBQzs7O21CQUFBO2dCQUVhLHFCQUFLLEdBQW5CO29CQUVJLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxDQUFDO2dCQWFELHNCQUFXLHNDQUFTO3lCQUFwQjt3QkFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDM0IsQ0FBQzt5QkFFRCxVQUFxQixLQUFpQjt3QkFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQzVCLENBQUM7OzttQkFMQTtnQkFPTSw4QkFBSSxHQUFYLFVBQVksMEJBQXVEO29CQUUvRCwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBeENjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztnQkF5Q3BELHNCQUFDO1lBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtZQTNDRCw2Q0EyQ0MsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJlc2V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOklTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
