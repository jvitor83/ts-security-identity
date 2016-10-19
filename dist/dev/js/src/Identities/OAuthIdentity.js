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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7SUFHcEM7UUFBbUMsaUNBQVE7UUFFdkMsdUJBQVksTUFBaUQ7WUFFekQsa0JBQU0sTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELHNCQUFXLDBDQUFlO2lCQUExQjtnQkFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QixJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsc0NBQVc7aUJBQXRCO2dCQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsY0FBYyxDQUFDLENBQUM7Z0JBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQzs7O1dBQUE7UUFDTCxvQkFBQztJQUFELENBbkJBLEFBbUJDLENBbkJrQyxtQkFBUSxHQW1CMUM7SUFuQlkscUJBQWEsZ0JBbUJ6QixDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT0F1dGhJZGVudGl0eSBleHRlbmRzIElkZW50aXR5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gfCBhbnkpIFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKENsYWltcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLkFjY2Vzc1Rva2VuO1xyXG4gICAgICAgIGxldCBoYXNWYWx1ZSA9IHZhbHVlICE9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGhhc1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQWNjZXNzVG9rZW4oKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCdhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=
