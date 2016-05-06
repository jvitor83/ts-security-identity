"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Identity;
var Identity = (function () {
    function Identity(Claims) {
        this._Claims = Claims;
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
        var itensFiltrados = this.Claims.filter(function (item) { return item.key === key; });
        if (itensFiltrados !== null) {
            if (itensFiltrados.length > -1) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(Identity.prototype, "Name", {
        get: function () {
            var name = this.findFirst('name');
            return name;
        },
        enumerable: true,
        configurable: true
    });
    return Identity;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtrQkFBZSxRQUFRLENBQUM7QUFFeEI7SUFRSSxrQkFBWSxNQUEwQztRQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBUkQsc0JBQVcsNEJBQU07YUFBakI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU9ELHVCQUFJLEdBQUosVUFBUSxHQUFVO1FBRWQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3BFLElBQUksZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQWEsR0FBVTtRQUVuQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQVU7UUFFVixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDcEUsRUFBRSxDQUFBLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUMzQixDQUFDO1lBQ0csRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO2dCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQkFBVywwQkFBSTthQUFmO1lBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBUyxNQUFNLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBQ0wsZUFBQztBQUFELENBN0NBLEFBNkNDLElBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUlkZW50aXR5IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxue1xyXG4gICAgcHJpdmF0ZSBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKENsYWltczogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PikgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcy5sZW5ndGggPiAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufSJdfQ==
