var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identity_1 = require("./Identity");
    var OAuthIdentity = (function (_super) {
        __extends(OAuthIdentity, _super);
        function OAuthIdentity(Claims) {
            return _super.call(this, Claims) || this;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsdUNBQW9DO0lBRXBDO1FBQW1DLGlDQUFRO1FBQ3pDLHVCQUFZLE1BQStDO21CQUN6RCxrQkFBTSxNQUFNLENBQUM7UUFDZixDQUFDO1FBRUQsc0JBQVcsMENBQWU7aUJBQTFCO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQ3ZCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsc0NBQVc7aUJBQXRCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFTLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7OztXQUFBO1FBQ0gsb0JBQUM7SUFBRCxDQWJBLEFBYUMsQ0Fia0MsbUJBQVEsR0FhMUM7SUFiWSxzQ0FBYSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9PQXV0aElkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgT0F1dGhJZGVudGl0eSBleHRlbmRzIElkZW50aXR5IHtcclxuICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiB8IGFueSkge1xyXG4gICAgc3VwZXIoQ2xhaW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLkFjY2Vzc1Rva2VuO1xyXG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IEFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignYWNjZXNzX3Rva2VuJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
