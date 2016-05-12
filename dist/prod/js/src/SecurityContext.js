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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlY3VyaXR5Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQXdCLHdCQUF3QixDQUFDLENBQUE7QUFLakQ7SUFrQkk7UUFLUSxlQUFVLEdBQ2xCO1lBQ0ksZUFBZSxFQUFFLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQVBFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQWpCRCxzQkFBa0IsMEJBQU87YUFBekI7WUFFSSxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUNyQyxDQUFDO2dCQUNHLGVBQWUsQ0FBQyxRQUFRLEdBQUksSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUN0RCxDQUFDO1lBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFYSxxQkFBSyxHQUFuQjtRQUVJLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFhRCxzQkFBVyxzQ0FBUzthQUFwQjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFxQixLQUFpQjtZQUVsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FMQTtJQU9NLDhCQUFJLEdBQVgsVUFBWSwwQkFBdUQ7UUFFL0QsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF4Q2Msd0JBQVEsR0FBb0IsSUFBSSxDQUFDO0lBeUNwRCxzQkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksdUJBQWUsa0JBMkMzQixDQUFBIiwiZmlsZSI6IlNlY3VyaXR5Q29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge1ByaW5jaXBhbH0gZnJvbSAnLi9JZGVudGl0aWVzL1ByaW5jaXBhbCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dDtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHQgXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1cnJlbnQoKTogU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9ICBuZXcgU2VjdXJpdHlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLlByaW5jaXBhbCA9IG5ldyBQcmluY2lwYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAge1xyXG4gICAgICAgIElzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBQcmluY2lwYWwoKTogSVByaW5jaXBhbCBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJpbmNpcGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKVxyXG4gICAge1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=
