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
    var Identity = /** @class */ (function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRUEsMkJBQTJCO0lBRTNCO1FBTUUsa0JBQVksTUFBK0MsRUFBVSxlQUFzQjtZQUF0QixnQ0FBQSxFQUFBLHNCQUFzQjtZQUF0QixvQkFBZSxHQUFmLGVBQWUsQ0FBTztZQUN6RixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLEdBQUcsQ0FBQyxDQUFnQixVQUFtQixFQUFuQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CO3dCQUFsQyxJQUFNLEtBQUssU0FBQTt3QkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztxQkFDdEQ7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDO1FBbkJELHNCQUFXLDRCQUFNO2lCQUFqQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQW1CRCx1QkFBSSxHQUFKLFVBQVEsR0FBVztZQUNqQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCw0QkFBUyxHQUFULFVBQWEsR0FBVztZQUN0QixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxzQkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELHNCQUFXLDBCQUFJO2lCQUFmO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFTLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7OztXQUFBO1FBRUQsc0JBQVcscUNBQWU7aUJBQTFCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM1QixxRkFBcUY7Z0JBQ3JGLDhCQUE4QjtZQUNoQyxDQUFDOzs7V0FBQTtRQUNILGVBQUM7SUFBRCxDQTlDQSxBQThDQyxJQUFBO0lBOUNZLDRCQUFRIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL0lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aXR5IGltcGxlbWVudHMgSUlkZW50aXR5IHtcclxuICBwcm90ZWN0ZWQgX0NsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT47XHJcbiAgcHVibGljIGdldCBDbGFpbXMoKTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHwgYW55LCBwcml2YXRlIGlzQXV0aGVudGljYXRlZCA9IHRydWUpIHtcclxuICAgIGlmIChDbGFpbXMgIT0gbnVsbCkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShDbGFpbXMpKSB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDbGFpbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXlDbGFpbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNsYWltIG9mIE9iamVjdC5rZXlzKENsYWltcykpIHtcclxuICAgICAgICAgIGFycmF5Q2xhaW1zLnB1c2goe2tleTogY2xhaW0sIHZhbHVlOiBDbGFpbXNbY2xhaW1dfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0NsYWltcyA9IGFycmF5Q2xhaW1zO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9DbGFpbXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmQ8VD4oa2V5OiBzdHJpbmcpOiBBcnJheTxUPiB7XHJcbiAgICBjb25zdCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICByZXR1cm4gaXRlbnNGaWx0cmFkb3MubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZpbmRGaXJzdDxUPihrZXk6IHN0cmluZyk6IFQge1xyXG4gICAgY29uc3QgdmFsb3Jlc0ZpbHRyYWRvcyA9IHRoaXMuZmluZDxUPihrZXkpO1xyXG4gICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgfVxyXG5cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLkNsYWltcy5zb21lKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgLy8gbGV0IGNvbnRhaW5zQWNjZXNzVG9rZW4gPSB0aGlzLkNsYWltcy5zb21lKGNsYWltID0+IGNsYWltLmtleSA9PT0gJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgLy8gcmV0dXJuIGNvbnRhaW5zQWNjZXNzVG9rZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
