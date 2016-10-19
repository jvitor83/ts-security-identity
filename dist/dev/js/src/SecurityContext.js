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
    //export default SecurityContext;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQ0EsMEJBQXdCLHdCQUF3QixDQUFDLENBQUE7SUFDakQseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7SUFHL0MsaUNBQWlDO0lBRWpDO1FBa0JJO1lBTVEsZUFBVSxHQUFlLElBQUksQ0FBQztZQUpsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBbEJELHNCQUFrQiwwQkFBTztpQkFBekI7Z0JBRUksRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FDckMsQ0FBQztvQkFDRyxlQUFlLENBQUMsUUFBUSxHQUFJLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3RELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsQ0FBQzs7O1dBQUE7UUFFYSxxQkFBSyxHQUFuQjtZQUVJLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUM7UUFVRCxzQkFBVyxzQ0FBUztpQkFBcEI7Z0JBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQztpQkFFRCxVQUFxQixLQUFpQjtnQkFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQzs7O1dBTEE7UUFPTSw4QkFBSSxHQUFYLFVBQVksMEJBQXVEO1lBRS9ELDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBckNjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztRQXNDcEQsc0JBQUM7SUFBRCxDQXhDQSxBQXdDQyxJQUFBO0lBeENZLHVCQUFlLGtCQXdDM0IsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dCBcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IFNlY3VyaXR5Q29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3VycmVudCgpOiBTZWN1cml0eUNvbnRleHQgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpZGVudGl0eSA9IG5ldyBJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbChpZGVudGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfUHJpbmNpcGFsOiBJUHJpbmNpcGFsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBQcmluY2lwYWwodmFsdWU6IElQcmluY2lwYWwpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDpJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuSW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxufSJdfQ==
