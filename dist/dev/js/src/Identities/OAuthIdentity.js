var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var Identity_1 = require('./Identity');
    var OAuthIdentity = (function (_super) {
        __extends(OAuthIdentity, _super);
        function OAuthIdentity(Claims) {
            _super.call(this, Claims);
        }
        Object.defineProperty(OAuthIdentity.prototype, "IsAuthenticated", {
            get: function () {
                var value = this.AccessToken;
                return value != null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OAuthIdentity.prototype, "AccessToken", {
            get: function () {
                return this.findFirst('access_token');
            },
            enumerable: true,
            configurable: true
        });
        return OAuthIdentity;
    }(Identity_1.Identity));
    exports.OAuthIdentity = OAuthIdentity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7SUFFcEM7UUFBbUMsaUNBQVE7UUFDekMsdUJBQVksTUFBK0M7WUFDekQsa0JBQU0sTUFBTSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUVELHNCQUFXLDBDQUFlO2lCQUExQjtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvQixNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUN2QixDQUFDOzs7V0FBQTtRQUVELHNCQUFXLHNDQUFXO2lCQUF0QjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBUyxjQUFjLENBQUMsQ0FBQztZQUNoRCxDQUFDOzs7V0FBQTtRQUNILG9CQUFDO0lBQUQsQ0FiQSxBQWFDLENBYmtDLG1CQUFRLEdBYTFDO0lBYlkscUJBQWEsZ0JBYXpCLENBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvT0F1dGhJZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9BdXRoSWRlbnRpdHkgZXh0ZW5kcyBJZGVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoQ2xhaW1zPzogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4gfCBhbnkpIHtcclxuICAgIHN1cGVyKENsYWltcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5BY2Nlc3NUb2tlbjtcclxuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBBY2Nlc3NUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ2FjY2Vzc190b2tlbicpO1xyXG4gIH1cclxufVxyXG4iXX0=
