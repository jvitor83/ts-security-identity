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
    var Identity = (function () {
        function Identity(Claims, isAuthenticated) {
            if (isAuthenticated === void 0) { isAuthenticated = true; }
            this.isAuthenticated = isAuthenticated;
            if (Claims != null) {
                if (Array.isArray(Claims)) {
                    this._Claims = Claims;
                }
                else if (typeof Claims === 'object') {
                    var arrayClaims = [];
                    for (var _i = 0, _a = Object.keys(Claims); _i < _a.length; _i++) {
                        var claim = _a[_i];
                        arrayClaims.push({ key: claim, value: Claims[claim] });
                    }
                    this._Claims = arrayClaims;
                }
            }
            else {
                this.isAuthenticated = false;
                this._Claims = [];
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
            },
            enumerable: true,
            configurable: true
        });
        return Identity;
    }());
    exports.Identity = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQU1FLGtCQUFZLE1BQStDLEVBQVUsZUFBc0I7WUFBdEIsZ0NBQUEsRUFBQSxzQkFBc0I7WUFBdEIsb0JBQWUsR0FBZixlQUFlLENBQU87WUFDekYsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN2QixHQUFHLENBQUMsQ0FBZ0IsVUFBbUIsRUFBbkIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixjQUFtQixFQUFuQixJQUFtQjt3QkFBbEMsSUFBTSxLQUFLLFNBQUE7d0JBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQ3REO29CQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQztRQW5CRCxzQkFBVyw0QkFBTTtpQkFBakI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsQ0FBQzs7O1dBQUE7UUFtQkQsdUJBQUksR0FBSixVQUFRLEdBQVc7WUFDakIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsNEJBQVMsR0FBVCxVQUFhLEdBQVc7WUFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQVc7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRCxzQkFBVywwQkFBSTtpQkFBZjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBUyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFXLHFDQUFlO2lCQUExQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUc5QixDQUFDOzs7V0FBQTtRQUNILGVBQUM7SUFBRCxDQTlDQSxBQThDQyxJQUFBO0lBOUNZLDRCQUFRIiwiZmlsZSI6IklkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHk7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHkge1xyXG4gIHByb3RlY3RlZCBfQ2xhaW1zOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PjtcclxuICBwdWJsaWMgZ2V0IENsYWltcygpOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fQ2xhaW1zO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQ2xhaW1zPzogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4gfCBhbnksIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZSkge1xyXG4gICAgaWYgKENsYWltcyAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KENsYWltcykpIHtcclxuICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIENsYWltcyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjb25zdCBhcnJheUNsYWltcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY2xhaW0gb2YgT2JqZWN0LmtleXMoQ2xhaW1zKSkge1xyXG4gICAgICAgICAgYXJyYXlDbGFpbXMucHVzaCh7a2V5OiBjbGFpbSwgdmFsdWU6IENsYWltc1tjbGFpbV19KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gYXJyYXlDbGFpbXM7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX0NsYWltcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluZDxUPihrZXk6IHN0cmluZyk6IEFycmF5PFQ+IHtcclxuICAgIGNvbnN0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgIHJldHVybiBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZmluZEZpcnN0PFQ+KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICBjb25zdCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICByZXR1cm4gdmFsb3Jlc0ZpbHRyYWRvc1swXTtcclxuICB9XHJcblxyXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuQ2xhaW1zLnNvbWUoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAvLyBsZXQgY29udGFpbnNBY2Nlc3NUb2tlbiA9IHRoaXMuQ2xhaW1zLnNvbWUoY2xhaW0gPT4gY2xhaW0ua2V5ID09PSAnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAvLyByZXR1cm4gY29udGFpbnNBY2Nlc3NUb2tlbjtcclxuICB9XHJcbn1cclxuIl19
