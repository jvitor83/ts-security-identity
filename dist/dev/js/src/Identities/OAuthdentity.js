"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Identity_1 = require('./Identity');
var OAuthIdentity = (function (_super) {
    __extends(OAuthIdentity, _super);
    function OAuthIdentity(Claims) {
        _super.call(this, Claims);
    }
    Object.defineProperty(OAuthIdentity.prototype, "IsAuthenticated", {
        get: function () {
            var containsAccessToken = this.Claims.some(function (claim) { return claim.key === 'access_token'; });
            return containsAccessToken;
        },
        enumerable: true,
        configurable: true
    });
    return OAuthIdentity;
}(Identity_1.Identity));
exports.OAuthIdentity = OAuthIdentity;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL09BdXRoZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFHcEM7SUFBbUMsaUNBQVE7SUFFdkMsdUJBQVksTUFBaUQ7UUFFekQsa0JBQU0sTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDBDQUFlO2FBQTFCO1lBRUksSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLEtBQUssY0FBYyxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFDbEYsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0wsb0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0Faa0MsbUJBQVEsR0FZMUM7QUFaWSxxQkFBYSxnQkFZekIsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9PQXV0aGRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT0F1dGhJZGVudGl0eSBleHRlbmRzIElkZW50aXR5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gfCBhbnkpIFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKENsYWltcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGFpbnNBY2Nlc3NUb2tlbiA9IHRoaXMuQ2xhaW1zLnNvbWUoY2xhaW0gPT4gY2xhaW0ua2V5ID09PSAnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zQWNjZXNzVG9rZW47XHJcbiAgICB9XHJcbn0iXX0=
