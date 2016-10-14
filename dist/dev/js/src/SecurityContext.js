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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHlCQUF1Qix1QkFBdUIsQ0FBQyxDQUFBO0FBRy9DLGlDQUFpQztBQUVqQztJQWtCSTtRQU1RLGVBQVUsR0FBZSxJQUFJLENBQUM7UUFKbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxCRCxzQkFBa0IsMEJBQU87YUFBekI7WUFFSSxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUNyQyxDQUFDO2dCQUNHLGVBQWUsQ0FBQyxRQUFRLEdBQUksSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUN0RCxDQUFDO1lBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFYSxxQkFBSyxHQUFuQjtRQUVJLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFVRCxzQkFBVyxzQ0FBUzthQUFwQjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFxQixLQUFpQjtZQUVsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FMQTtJQU9NLDhCQUFJLEdBQVgsVUFBWSwwQkFBdUQ7UUFFL0QsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFyQ2Msd0JBQVEsR0FBb0IsSUFBSSxDQUFDO0lBc0NwRCxzQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksdUJBQWUsa0JBd0MzQixDQUFBIiwiZmlsZSI6InNyYy9TZWN1cml0eUNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHQ7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0IFxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudDogU2VjdXJpdHlDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCBcclxuICAgIHtcclxuICAgICAgICBpZihTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSAgbmV3IFNlY3VyaXR5Q29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlc2V0KClcclxuICAgIHtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlkZW50aXR5ID0gbmV3IElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKGlkZW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgUHJpbmNpcGFsKCk6IElQcmluY2lwYWwgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFByaW5jaXBhbCh2YWx1ZTogSVByaW5jaXBhbCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fUHJpbmNpcGFsID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOklTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcilcclxuICAgIHtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5Jbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG59Il19
