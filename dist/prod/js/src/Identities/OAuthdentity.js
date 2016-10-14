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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvT0F1dGhkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQUdwQztJQUFtQyxpQ0FBUTtJQUV2Qyx1QkFBWSxNQUFpRDtRQUV6RCxrQkFBTSxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQVcsMENBQWU7YUFBMUI7WUFFSSxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsS0FBSyxjQUFjLEVBQTVCLENBQTRCLENBQUMsQ0FBQztZQUNsRixNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFDTCxvQkFBQztBQUFELENBWkEsQUFZQyxDQVprQyxtQkFBUSxHQVkxQztBQVpZLHFCQUFhLGdCQVl6QixDQUFBIiwiZmlsZSI6IklkZW50aXRpZXMvT0F1dGhkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9BdXRoSWRlbnRpdHkgZXh0ZW5kcyBJZGVudGl0eVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IHwgYW55KSBcclxuICAgIHtcclxuICAgICAgICBzdXBlcihDbGFpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5zQWNjZXNzVG9rZW4gPSB0aGlzLkNsYWltcy5zb21lKGNsYWltID0+IGNsYWltLmtleSA9PT0gJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluc0FjY2Vzc1Rva2VuO1xyXG4gICAgfVxyXG59Il19
