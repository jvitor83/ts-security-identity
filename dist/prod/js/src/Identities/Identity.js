"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBUUksa0JBQVksTUFBMEM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQVJELHNCQUFXLDRCQUFNO2FBQWpCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFPRCx1QkFBSSxHQUFKLFVBQVEsR0FBVTtRQUVkLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUNwRSxJQUFJLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFhLEdBQVU7UUFFbkIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxHQUFVO1FBRVYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FDM0IsQ0FBQztZQUNHLEVBQUUsQ0FBQSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztnQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQVcsMEJBQUk7YUFBZjtZQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsTUFBTSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUNMLGVBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLGdCQUFRLFdBNkNwQixDQUFBIiwiZmlsZSI6IklkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eVxyXG57XHJcbiAgICBwcml2YXRlIF9DbGFpbXMgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+O1xyXG4gICAgcHVibGljIGdldCBDbGFpbXMoKSA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoQ2xhaW1zOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmQ8VD4oa2V5OnN0cmluZyk6IEFycmF5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmRGaXJzdDxUPihrZXk6c3RyaW5nKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgICAgICBsZXQgaXRlbSA9IHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhcyhrZXk6c3RyaW5nKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcyAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW5zRmlsdHJhZG9zLmxlbmd0aCA+IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgTmFtZSgpIDogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG59Il19
