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
            var value = this.AccessToken;
            var hasValue = value != null;
            return hasValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthIdentity.prototype, "AccessToken", {
        get: function () {
            var value = this.findFirst('access_token');
            return value;
        },
        enumerable: true,
        configurable: true
    });
    return OAuthIdentity;
}(Identity_1.Identity));
exports.OAuthIdentity = OAuthIdentity;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvT0F1dGhJZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFHcEM7SUFBbUMsaUNBQVE7SUFFdkMsdUJBQVksTUFBaUQ7UUFFekQsa0JBQU0sTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDBDQUFlO2FBQTFCO1lBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM3QixJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQ0FBVzthQUF0QjtZQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsY0FBYyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsQ0FuQmtDLG1CQUFRLEdBbUIxQztBQW5CWSxxQkFBYSxnQkFtQnpCLENBQUEiLCJmaWxlIjoiSWRlbnRpdGllcy9PQXV0aElkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9BdXRoSWRlbnRpdHkgZXh0ZW5kcyBJZGVudGl0eVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IHwgYW55KSBcclxuICAgIHtcclxuICAgICAgICBzdXBlcihDbGFpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5BY2Nlc3NUb2tlbjtcclxuICAgICAgICBsZXQgaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBoYXNWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEFjY2Vzc1Rva2VuKCkgOiBzdHJpbmcgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59Il19
