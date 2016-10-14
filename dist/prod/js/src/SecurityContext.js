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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQXdCLHdCQUF3QixDQUFDLENBQUE7QUFDakQseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7QUFLL0M7SUFrQkk7UUFNUSxlQUFVLEdBQWUsSUFBSSxDQUFDO1FBSmxDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFsQkQsc0JBQWtCLDBCQUFPO2FBQXpCO1lBRUksRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FDckMsQ0FBQztnQkFDRyxlQUFlLENBQUMsUUFBUSxHQUFJLElBQUksZUFBZSxFQUFFLENBQUM7WUFDdEQsQ0FBQztZQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRWEscUJBQUssR0FBbkI7UUFFSSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBVUQsc0JBQVcsc0NBQVM7YUFBcEI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsS0FBaUI7WUFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BTEE7SUFPTSw4QkFBSSxHQUFYLFVBQVksMEJBQXVEO1FBRS9ELDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBckNjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQXNDcEQsc0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLHVCQUFlLGtCQXdDM0IsQ0FBQSIsImZpbGUiOiJTZWN1cml0eUNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHQ7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0IFxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudDogU2VjdXJpdHlDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCBcclxuICAgIHtcclxuICAgICAgICBpZihTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSAgbmV3IFNlY3VyaXR5Q29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlc2V0KClcclxuICAgIHtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlkZW50aXR5ID0gbmV3IElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKGlkZW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgUHJpbmNpcGFsKCk6IElQcmluY2lwYWwgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFByaW5jaXBhbCh2YWx1ZTogSVByaW5jaXBhbCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fUHJpbmNpcGFsID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOklTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcilcclxuICAgIHtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5Jbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG59Il19
