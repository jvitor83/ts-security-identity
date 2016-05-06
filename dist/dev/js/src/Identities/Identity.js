System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Identity;
    return {
        setters:[],
        execute: function() {
            exports_1("default",Identity);
            Identity = (function () {
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFQSxvQkFBZSxRQUFRLEVBQUM7WUFFeEI7Z0JBUUksa0JBQVksTUFBMEM7b0JBRWxELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixDQUFDO2dCQVJELHNCQUFXLDRCQUFNO3lCQUFqQjt3QkFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDeEIsQ0FBQzs7O21CQUFBO2dCQU9ELHVCQUFJLEdBQUosVUFBUSxHQUFVO29CQUVkLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQztvQkFDaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM1QixDQUFDO2dCQUVELDRCQUFTLEdBQVQsVUFBYSxHQUFVO29CQUVuQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLENBQUM7b0JBQ3pDLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELHNCQUFHLEdBQUgsVUFBSSxHQUFVO29CQUVWLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFDcEUsRUFBRSxDQUFBLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUMzQixDQUFDO3dCQUNHLEVBQUUsQ0FBQSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDOUIsQ0FBQzs0QkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNoQixDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxzQkFBVywwQkFBSTt5QkFBZjt3QkFFSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFTLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDOzs7bUJBQUE7Z0JBQ0wsZUFBQztZQUFELENBN0NBLEFBNkNDLElBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUlkZW50aXR5IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxue1xyXG4gICAgcHJpdmF0ZSBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKENsYWltczogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PikgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcy5sZW5ndGggPiAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufSJdfQ==
