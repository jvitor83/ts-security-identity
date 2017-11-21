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
            },
            enumerable: true,
            configurable: true
        });
        return Identity;
    }());
    exports.Identity = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQU1FLGtCQUFZLE1BQStDLEVBQVUsZUFBc0I7WUFBdEIsZ0NBQUEsRUFBQSxzQkFBc0I7WUFBdEIsb0JBQWUsR0FBZixlQUFlLENBQU87WUFDekYsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQTZCLENBQUM7b0JBQzNELEdBQUcsQ0FBQyxDQUFnQixVQUFtQixFQUFuQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CO3dCQUFsQyxJQUFNLEtBQUssU0FBQTt3QkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztxQkFDdEQ7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQTZCLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFuQkQsc0JBQVcsNEJBQU07aUJBQWpCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLENBQUM7OztXQUFBO1FBbUJELHVCQUFJLEdBQUosVUFBUSxHQUFXO1lBQ2pCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELDRCQUFTLEdBQVQsVUFBYSxHQUFXO1lBQ3RCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELHNCQUFHLEdBQUgsVUFBSSxHQUFXO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQsc0JBQVcsMEJBQUk7aUJBQWY7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQVMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBVyxxQ0FBZTtpQkFBMUI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFHOUIsQ0FBQzs7O1dBQUE7UUFDSCxlQUFDO0lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtJQTlDWSw0QkFBUSIsImZpbGUiOiJJZGVudGl0aWVzL0lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aXR5IGltcGxlbWVudHMgSUlkZW50aXR5IHtcclxuICBwcm90ZWN0ZWQgX0NsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT47XHJcbiAgcHVibGljIGdldCBDbGFpbXMoKTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHwgYW55LCBwcml2YXRlIGlzQXV0aGVudGljYXRlZCA9IHRydWUpIHtcclxuICAgIGlmIChDbGFpbXMgIT0gbnVsbCkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShDbGFpbXMpKSB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDbGFpbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXlDbGFpbXMgPSBuZXcgQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNsYWltIG9mIE9iamVjdC5rZXlzKENsYWltcykpIHtcclxuICAgICAgICAgIGFycmF5Q2xhaW1zLnB1c2goe2tleTogY2xhaW0sIHZhbHVlOiBDbGFpbXNbY2xhaW1dfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0NsYWltcyA9IGFycmF5Q2xhaW1zO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9DbGFpbXMgPSBuZXcgQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmQ8VD4oa2V5OiBzdHJpbmcpOiBBcnJheTxUPiB7XHJcbiAgICBjb25zdCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICByZXR1cm4gaXRlbnNGaWx0cmFkb3MubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZpbmRGaXJzdDxUPihrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgdmFsb3Jlc0ZpbHRyYWRvcyA9IHRoaXMuZmluZDxUPihrZXkpO1xyXG4gICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgfVxyXG5cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLkNsYWltcy5zb21lKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgLy8gbGV0IGNvbnRhaW5zQWNjZXNzVG9rZW4gPSB0aGlzLkNsYWltcy5zb21lKGNsYWltID0+IGNsYWltLmtleSA9PT0gJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgLy8gcmV0dXJuIGNvbnRhaW5zQWNjZXNzVG9rZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
