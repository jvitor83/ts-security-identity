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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvT0F1dGhJZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFBLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtJQUVwQztRQUFtQyxpQ0FBUTtRQUN6Qyx1QkFBWSxNQUErQztZQUN6RCxrQkFBTSxNQUFNLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBRUQsc0JBQVcsMENBQWU7aUJBQTFCO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQ3ZCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsc0NBQVc7aUJBQXRCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFTLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7OztXQUFBO1FBQ0gsb0JBQUM7SUFBRCxDQWJBLEFBYUMsQ0Fia0MsbUJBQVEsR0FhMUM7SUFiWSxxQkFBYSxnQkFhekIsQ0FBQSIsImZpbGUiOiJJZGVudGl0aWVzL09BdXRoSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBPQXV0aElkZW50aXR5IGV4dGVuZHMgSWRlbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHwgYW55KSB7XHJcbiAgICBzdXBlcihDbGFpbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuQWNjZXNzVG9rZW47XHJcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQWNjZXNzVG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCdhY2Nlc3NfdG9rZW4nKTtcclxuICB9XHJcbn1cclxuIl19
