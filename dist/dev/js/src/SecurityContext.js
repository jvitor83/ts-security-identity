"use strict";
var Principal_1 = require('./Identities/Principal');
var SecurityContext = (function () {
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
exports.SecurityContext = SecurityContext;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBSWpEO0lBa0JJO1FBS1EsZUFBVSxHQUNsQjtZQUNJLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFQRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFqQkQsc0JBQWtCLDBCQUFPO2FBQXpCO1lBRUksRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FDckMsQ0FBQztnQkFDRyxlQUFlLENBQUMsUUFBUSxHQUFJLElBQUksZUFBZSxFQUFFLENBQUM7WUFDdEQsQ0FBQztZQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRWEscUJBQUssR0FBbkI7UUFFSSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBYUQsc0JBQVcsc0NBQVM7YUFBcEI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsS0FBaUI7WUFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BTEE7SUFPTSw4QkFBSSxHQUFYLFVBQVksMEJBQXVEO1FBRS9ELDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBeENjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQXlDcEQsc0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLHVCQUFlLGtCQTJDM0IsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPScuLi8uLi90eXBpbmdzL21haW4uZC50cycvPlxyXG5pbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHQgXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1cnJlbnQoKTogU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9ICBuZXcgU2VjdXJpdHlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLlByaW5jaXBhbCA9IG5ldyBQcmluY2lwYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAge1xyXG4gICAgICAgIElzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBQcmluY2lwYWwoKTogSVByaW5jaXBhbCBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJpbmNpcGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKVxyXG4gICAge1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
