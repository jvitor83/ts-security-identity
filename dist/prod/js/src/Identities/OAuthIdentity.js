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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvT0F1dGhJZGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSx1Q0FBb0M7SUFFcEM7UUFBbUMsaUNBQVE7UUFDekMsdUJBQVksTUFBK0M7bUJBQ3pELGtCQUFNLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFFRCxzQkFBVywwQ0FBZTtpQkFBMUI7Z0JBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDdkIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBVyxzQ0FBVztpQkFBdEI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQVMsY0FBYyxDQUFDLENBQUM7WUFDaEQsQ0FBQzs7O1dBQUE7UUFDSCxvQkFBQztJQUFELENBYkEsQUFhQyxDQWJrQyxtQkFBUSxHQWExQztJQWJZLHNDQUFhIiwiZmlsZSI6IklkZW50aXRpZXMvT0F1dGhJZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9BdXRoSWRlbnRpdHkgZXh0ZW5kcyBJZGVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoQ2xhaW1zPzogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4gfCBhbnkpIHtcclxuICAgIHN1cGVyKENsYWltcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5BY2Nlc3NUb2tlbjtcclxuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBBY2Nlc3NUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ2FjY2Vzc190b2tlbicpO1xyXG4gIH1cclxufVxyXG4iXX0=
