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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvT0F1dGhJZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFBLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtJQUdwQztRQUFtQyxpQ0FBUTtRQUV2Qyx1QkFBWSxNQUFpRDtZQUV6RCxrQkFBTSxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBRUQsc0JBQVcsMENBQWU7aUJBQTFCO2dCQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBVyxzQ0FBVztpQkFBdEI7Z0JBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBUyxjQUFjLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDOzs7V0FBQTtRQUNMLG9CQUFDO0lBQUQsQ0FuQkEsQUFtQkMsQ0FuQmtDLG1CQUFRLEdBbUIxQztJQW5CWSxxQkFBYSxnQkFtQnpCLENBQUEiLCJmaWxlIjoiSWRlbnRpdGllcy9PQXV0aElkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9BdXRoSWRlbnRpdHkgZXh0ZW5kcyBJZGVudGl0eVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IHwgYW55KSBcclxuICAgIHtcclxuICAgICAgICBzdXBlcihDbGFpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5BY2Nlc3NUb2tlbjtcclxuICAgICAgICBsZXQgaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBoYXNWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEFjY2Vzc1Rva2VuKCkgOiBzdHJpbmcgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59Il19
