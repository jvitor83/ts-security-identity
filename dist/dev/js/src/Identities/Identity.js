"use strict";
//export default Identity;
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
exports.Identity = Identity;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwwQkFBMEI7QUFFMUI7SUFRSSxrQkFBWSxNQUEwQztRQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBUkQsc0JBQVcsNEJBQU07YUFBakI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU9ELHVCQUFJLEdBQUosVUFBUSxHQUFVO1FBRWQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3BFLElBQUksZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQWEsR0FBVTtRQUVuQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQVU7UUFFVixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDcEUsRUFBRSxDQUFBLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUMzQixDQUFDO1lBQ0csRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO2dCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQkFBVywwQkFBSTthQUFmO1lBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBUyxNQUFNLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBQ0wsZUFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE3Q1ksZ0JBQVEsV0E2Q3BCLENBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eVxyXG57XHJcbiAgICBwcml2YXRlIF9DbGFpbXMgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+O1xyXG4gICAgcHVibGljIGdldCBDbGFpbXMoKSA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoQ2xhaW1zOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmQ8VD4oa2V5OnN0cmluZyk6IEFycmF5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmRGaXJzdDxUPihrZXk6c3RyaW5nKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgICAgICBsZXQgaXRlbSA9IHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhcyhrZXk6c3RyaW5nKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcyAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW5zRmlsdHJhZG9zLmxlbmd0aCA+IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgTmFtZSgpIDogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG59Il19
