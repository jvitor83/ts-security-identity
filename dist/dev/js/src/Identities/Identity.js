(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export default Identity;
    var Identity = (function () {
        function Identity(Claims, isAuthenticated) {
            if (isAuthenticated === void 0) { isAuthenticated = true; }
            this.isAuthenticated = isAuthenticated;
            if (Claims != null) {
                if (Array.isArray(Claims)) {
                    this._Claims = Claims;
                }
                else if (typeof Claims === 'object') {
                    var arrayClaims = new Array();
                    for (var _i = 0, _a = Object.keys(Claims); _i < _a.length; _i++) {
                        var claim = _a[_i];
                        arrayClaims.push({ key: claim, value: Claims[claim] });
                    }
                    this._Claims = arrayClaims;
                }
            }
            else {
                this.isAuthenticated = false;
                this._Claims = new Array();
            }
        }
        Object.defineProperty(Identity.prototype, "Claims", {
            get: function () {
                return this._Claims;
            },
            enumerable: true,
            configurable: true
        });
        Identity.prototype.find = function (key) {
            var itensFiltrados = this.Claims.filter(function (item) { return item.key === key; });
            return itensFiltrados.map(function (item) { return item.value; });
        };
        Identity.prototype.findFirst = function (key) {
            var valoresFiltrados = this.find(key);
            return valoresFiltrados[0];
        };
        Identity.prototype.has = function (key) {
            return this.Claims.some(function (item) { return item.key === key; });
        };
        Object.defineProperty(Identity.prototype, "Name", {
            get: function () {
                return this.findFirst('name');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Identity.prototype, "IsAuthenticated", {
            get: function () {
                return this.isAuthenticated;
                // let containsAccessToken = this.Claims.some(claim => claim.key === 'access_token');
                // return containsAccessToken;
            },
            enumerable: true,
            configurable: true
        });
        return Identity;
    }());
    exports.Identity = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRUEsMkJBQTJCO0lBRTNCO1FBTUUsa0JBQVksTUFBK0MsRUFBVSxlQUFzQjtZQUF0QixnQ0FBQSxFQUFBLHNCQUFzQjtZQUF0QixvQkFBZSxHQUFmLGVBQWUsQ0FBTztZQUN6RixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxJQUFNLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBNkIsQ0FBQztvQkFDM0QsR0FBRyxDQUFDLENBQWdCLFVBQW1CLEVBQW5CLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUI7d0JBQWxDLElBQU0sS0FBSyxTQUFBO3dCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUN0RDtvQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBNkIsQ0FBQztZQUN4RCxDQUFDO1FBQ0gsQ0FBQztRQW5CRCxzQkFBVyw0QkFBTTtpQkFBakI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsQ0FBQzs7O1dBQUE7UUFtQkQsdUJBQUksR0FBSixVQUFRLEdBQVc7WUFDakIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsNEJBQVMsR0FBVCxVQUFhLEdBQVc7WUFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQVc7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRCxzQkFBVywwQkFBSTtpQkFBZjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBUyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFXLHFDQUFlO2lCQUExQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDNUIscUZBQXFGO2dCQUNyRiw4QkFBOEI7WUFDaEMsQ0FBQzs7O1dBQUE7UUFDSCxlQUFDO0lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtJQTlDWSw0QkFBUSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9JZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJZGVudGl0eTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eSB7XHJcbiAgcHJvdGVjdGVkIF9DbGFpbXM6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+O1xyXG4gIHB1YmxpYyBnZXQgQ2xhaW1zKCk6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHtcclxuICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiB8IGFueSwgcHJpdmF0ZSBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlKSB7XHJcbiAgICBpZiAoQ2xhaW1zICE9IG51bGwpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoQ2xhaW1zKSkge1xyXG4gICAgICAgIHRoaXMuX0NsYWltcyA9IENsYWltcztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ2xhaW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5Q2xhaW1zID0gbmV3IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjbGFpbSBvZiBPYmplY3Qua2V5cyhDbGFpbXMpKSB7XHJcbiAgICAgICAgICBhcnJheUNsYWltcy5wdXNoKHtrZXk6IGNsYWltLCB2YWx1ZTogQ2xhaW1zW2NsYWltXX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9DbGFpbXMgPSBhcnJheUNsYWltcztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fQ2xhaW1zID0gbmV3IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kPFQ+KGtleTogc3RyaW5nKTogQXJyYXk8VD4ge1xyXG4gICAgY29uc3QgaXRlbnNGaWx0cmFkb3MgPSB0aGlzLkNsYWltcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgcmV0dXJuIGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmaW5kRmlyc3Q8VD4oa2V5OiBzdHJpbmcpOiBUIHtcclxuICAgIGNvbnN0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gIH1cclxuXHJcbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5DbGFpbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IE5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCduYW1lJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZDtcclxuICAgIC8vIGxldCBjb250YWluc0FjY2Vzc1Rva2VuID0gdGhpcy5DbGFpbXMuc29tZShjbGFpbSA9PiBjbGFpbS5rZXkgPT09ICdhY2Nlc3NfdG9rZW4nKTtcclxuICAgIC8vIHJldHVybiBjb250YWluc0FjY2Vzc1Rva2VuO1xyXG4gIH1cclxufVxyXG4iXX0=
