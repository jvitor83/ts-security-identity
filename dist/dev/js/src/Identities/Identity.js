(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    //export default Identity;
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
                    for (var claim in Claims) {
                        arrayClaims.push({ key: claim, value: Claims[claim] });
                    }
                    this._Claims = arrayClaims;
                }
            }
            else {
                this.isAuthenticated = false;
                var arrayClaims = new Array();
                this._Claims = arrayClaims;
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
            var valoresFiltrados = itensFiltrados.map(function (item) { return item.value; });
            return valoresFiltrados;
        };
        Identity.prototype.findFirst = function (key) {
            var valoresFiltrados = this.find(key);
            var item = valoresFiltrados[0];
            return item;
        };
        Identity.prototype.has = function (key) {
            var containItem = this.Claims.some(function (item) { return item.key === key; });
            return containItem;
        };
        Object.defineProperty(Identity.prototype, "Name", {
            get: function () {
                var name = this.findFirst('name');
                return name;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUVBLDBCQUEwQjtJQUUxQjtRQVFJLGtCQUFZLE1BQWlELEVBQVUsZUFBc0I7WUFBOUIsK0JBQThCLEdBQTlCLHNCQUE4QjtZQUF0QixvQkFBZSxHQUFmLGVBQWUsQ0FBTztZQUV6RixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQ2xCLENBQUM7Z0JBQ0csRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUN6QixDQUFDO29CQUNHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FDbkMsQ0FBQztvQkFDRyxJQUFJLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBK0IsQ0FBQztvQkFDM0QsR0FBRyxDQUFBLENBQUMsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLENBQ3hCLENBQUM7d0JBQ0csV0FBVyxDQUFDLElBQUksQ0FBRSxFQUFFLEdBQUcsRUFBRyxLQUFLLEVBQUUsS0FBSyxFQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFFLENBQUM7b0JBQy9ELENBQUM7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0csSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksV0FBVyxHQUFHLElBQUksS0FBSyxFQUErQixDQUFDO2dCQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUMvQixDQUFDO1FBR0wsQ0FBQztRQS9CRCxzQkFBVyw0QkFBTTtpQkFBakI7Z0JBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsQ0FBQzs7O1dBQUE7UUE4QkQsdUJBQUksR0FBSixVQUFRLEdBQVU7WUFFZCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDcEUsSUFBSSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDNUIsQ0FBQztRQUVELDRCQUFTLEdBQVQsVUFBYSxHQUFVO1lBRW5CLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxzQkFBRyxHQUFILFVBQUksR0FBVTtZQUVWLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxzQkFBVywwQkFBSTtpQkFBZjtnQkFFSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFTLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcscUNBQWU7aUJBQTFCO2dCQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM1QixxRkFBcUY7Z0JBQ3JGLDhCQUE4QjtZQUNsQyxDQUFDOzs7V0FBQTtRQUNMLGVBQUM7SUFBRCxDQXBFQSxBQW9FQyxJQUFBO0lBcEVZLGdCQUFRLFdBb0VwQixDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL0lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHk7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxueyBcclxuICAgIHByb3RlY3RlZCBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKENsYWltcz86IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gfCBhbnksIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZSkgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoQ2xhaW1zICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KENsYWltcykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0NsYWltcyA9IENsYWltczsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgQ2xhaW1zID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5Q2xhaW1zID0gbmV3IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgY2xhaW0gaW4gQ2xhaW1zKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheUNsYWltcy5wdXNoKCB7IGtleSA6IGNsYWltLCB2YWx1ZSA6IENsYWltc1tjbGFpbV0gfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fQ2xhaW1zID0gYXJyYXlDbGFpbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGFycmF5Q2xhaW1zID0gbmV3IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4oKTtcclxuICAgICAgICAgICAgdGhpcy5fQ2xhaW1zID0gYXJyYXlDbGFpbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmluZDxUPihrZXk6c3RyaW5nKTogQXJyYXk8VD5cclxuICAgIHtcclxuICAgICAgICBsZXQgaXRlbnNGaWx0cmFkb3MgPSB0aGlzLkNsYWltcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gaXRlbnNGaWx0cmFkb3MubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsb3Jlc0ZpbHRyYWRvcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmluZEZpcnN0PFQ+KGtleTpzdHJpbmcpOlRcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IHRoaXMuZmluZDxUPihrZXkpO1xyXG4gICAgICAgIGxldCBpdGVtID0gdmFsb3Jlc0ZpbHRyYWRvc1swXTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFzKGtleTpzdHJpbmcpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGFpbkl0ZW0gPSB0aGlzLkNsYWltcy5zb21lKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbkl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgTmFtZSgpIDogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgICAgIC8vIGxldCBjb250YWluc0FjY2Vzc1Rva2VuID0gdGhpcy5DbGFpbXMuc29tZShjbGFpbSA9PiBjbGFpbS5rZXkgPT09ICdhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICAvLyByZXR1cm4gY29udGFpbnNBY2Nlc3NUb2tlbjtcclxuICAgIH1cclxufSJdfQ==
