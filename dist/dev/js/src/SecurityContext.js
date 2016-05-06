"use strict";
var Principal_1 = require('./Identities/Principal');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SecurityContext;
var SecurityContext = (function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUFzQix3QkFBd0IsQ0FBQyxDQUFBO0FBRy9DO2tCQUFlLGVBQWUsQ0FBQztBQUUvQjtJQWtCSTtRQUtRLGVBQVUsR0FDbEI7WUFDSSxlQUFlLEVBQUUsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBUEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBakJELHNCQUFrQiwwQkFBTzthQUF6QjtZQUVJLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQ3JDLENBQUM7Z0JBQ0csZUFBZSxDQUFDLFFBQVEsR0FBSSxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBQ3RELENBQUM7WUFDRCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVhLHFCQUFLLEdBQW5CO1FBRUksZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQWFELHNCQUFXLHNDQUFTO2FBQXBCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXFCLEtBQWlCO1lBRWxDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUxBO0lBT00sOEJBQUksR0FBWCxVQUFZLDBCQUF1RDtRQUUvRCwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXhDYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7SUF5Q3BELHNCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElQcmluY2lwYWwgZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQgUHJpbmNpcGFsIGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dDtcclxuXHJcbmNsYXNzIFNlY3VyaXR5Q29udGV4dCBcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IFNlY3VyaXR5Q29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3VycmVudCgpOiBTZWN1cml0eUNvbnRleHQgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1ByaW5jaXBhbDogSVByaW5jaXBhbCA9IDxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICBJZGVudGl0eTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBQcmluY2lwYWwodmFsdWU6IElQcmluY2lwYWwpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDpJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuSW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxufSJdfQ==
