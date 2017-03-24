(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Identities/Principal', './Identities/Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var Principal_1 = require('./Identities/Principal');
    var Identity_1 = require('./Identities/Identity');
    var SecurityContext = (function () {
        function SecurityContext() {
            this._Principal = null;
            var identity = new Identity_1.Identity();
            this.Principal = new Principal_1.Principal(identity);
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
    exports.SecurityContext = SecurityContext;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFDQSwwQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtJQUNqRCx5QkFBdUIsdUJBQXVCLENBQUMsQ0FBQTtJQUsvQztRQWdCRTtZQWJRLGVBQVUsR0FBZSxJQUFJLENBQUM7WUFjcEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQWRELHNCQUFrQiwwQkFBTztpQkFBekI7Z0JBQ0UsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ25ELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQzs7O1dBQUE7UUFFYSxxQkFBSyxHQUFuQjtZQUNFLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7UUFPRCxzQkFBVyxzQ0FBUztpQkFBcEI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsQ0FBQztpQkFFRCxVQUFxQixLQUFpQjtnQkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQzs7O1dBSkE7UUFNTSw4QkFBSSxHQUFYLFVBQVksMEJBQXVEO1lBQ2pFLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBOUJjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztRQStCbEQsc0JBQUM7SUFBRCxDQWhDQSxBQWdDQyxJQUFBO0lBaENZLHVCQUFlLGtCQWdDM0IsQ0FBQSIsImZpbGUiOiJTZWN1cml0eUNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IFNlY3VyaXR5Q29udGV4dCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX1ByaW5jaXBhbDogSVByaW5jaXBhbCA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IEN1cnJlbnQoKTogU2VjdXJpdHlDb250ZXh0IHtcclxuICAgIGlmIChTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbmV3IFNlY3VyaXR5Q29udGV4dCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgUmVzZXQoKSB7XHJcbiAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBpZGVudGl0eSA9IG5ldyBJZGVudGl0eSgpO1xyXG4gICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKGlkZW50aXR5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgUHJpbmNpcGFsKCk6IElQcmluY2lwYWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSB7XHJcbiAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyOiBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpIHtcclxuICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
