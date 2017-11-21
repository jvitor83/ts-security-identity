(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Identities/Principal", "./Identities/Identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Principal_1 = require("./Identities/Principal");
    var Identity_1 = require("./Identities/Identity");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUNBLG9EQUFpRDtJQUNqRCxrREFBK0M7SUFLL0M7UUFnQkU7WUFiUSxlQUFVLEdBQWUsSUFBSSxDQUFDO1lBY3BDLElBQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFkRCxzQkFBa0IsMEJBQU87aUJBQXpCO2dCQUNFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNuRCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRWEscUJBQUssR0FBbkI7WUFDRSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDO1FBT0Qsc0JBQVcsc0NBQVM7aUJBQXBCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLENBQUM7aUJBRUQsVUFBcUIsS0FBaUI7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUM7OztXQUpBO1FBTU0sOEJBQUksR0FBWCxVQUFZLDBCQUF1RDtZQUNqRSwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQTlCYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7UUErQmxELHNCQUFDO0tBaENELEFBZ0NDLElBQUE7SUFoQ1ksMENBQWUiLCJmaWxlIjoiU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dDtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHQge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCB7XHJcbiAgICBpZiAoU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIFJlc2V0KCkge1xyXG4gICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbChpZGVudGl0eSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIHtcclxuICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IFByaW5jaXBhbCh2YWx1ZTogSVByaW5jaXBhbCkge1xyXG4gICAgdGhpcy5fUHJpbmNpcGFsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjogSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKSB7XHJcbiAgICBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5Jbml0aWFsaXplKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=
