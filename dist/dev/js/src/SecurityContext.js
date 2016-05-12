"use strict";
var Principal_1 = require('./Identities/Principal');
//export default SecurityContext;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBR2pELGlDQUFpQztBQUVqQztJQWtCSTtRQUtRLGVBQVUsR0FDbEI7WUFDSSxlQUFlLEVBQUUsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBUEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBakJELHNCQUFrQiwwQkFBTzthQUF6QjtZQUVJLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQ3JDLENBQUM7Z0JBQ0csZUFBZSxDQUFDLFFBQVEsR0FBSSxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBQ3RELENBQUM7WUFDRCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVhLHFCQUFLLEdBQW5CO1FBRUksZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQWFELHNCQUFXLHNDQUFTO2FBQXBCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXFCLEtBQWlCO1lBRWxDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUxBO0lBT00sOEJBQUksR0FBWCxVQUFZLDBCQUF1RDtRQUUvRCwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXhDYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7SUF5Q3BELHNCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSx1QkFBZSxrQkEyQzNCLENBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQge1ByaW5jaXBhbH0gZnJvbSAnLi9JZGVudGl0aWVzL1ByaW5jaXBhbCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dDtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHQgXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1cnJlbnQoKTogU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9ICBuZXcgU2VjdXJpdHlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLlByaW5jaXBhbCA9IG5ldyBQcmluY2lwYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAge1xyXG4gICAgICAgIElzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBQcmluY2lwYWwoKTogSVByaW5jaXBhbCBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJpbmNpcGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKVxyXG4gICAge1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=
