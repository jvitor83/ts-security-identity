System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Identity;
    return {
        setters:[],
        execute: function() {
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
            exports_1("Identity", Identity);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFSTtnQkFRSSxrQkFBWSxNQUEwQztvQkFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQzFCLENBQUM7Z0JBUkQsc0JBQVcsNEJBQU07eUJBQWpCO3dCQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN4QixDQUFDOzs7bUJBQUE7Z0JBT0QsdUJBQUksR0FBSixVQUFRLEdBQVU7b0JBRWQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDO29CQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsNEJBQVMsR0FBVCxVQUFhLEdBQVU7b0JBRW5CLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsQ0FBQztvQkFDekMsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQVU7b0JBRVYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO29CQUNwRSxFQUFFLENBQUEsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQzNCLENBQUM7d0JBQ0csRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELHNCQUFXLDBCQUFJO3lCQUFmO3dCQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsTUFBTSxDQUFDLENBQUM7d0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7OzttQkFBQTtnQkFDTCxlQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCwrQkE2Q0MsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9JZGVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIElkZW50aXR5IGltcGxlbWVudHMgSUlkZW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgICAgICBwdWJsaWMgZ2V0IENsYWltcygpIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKENsYWltczogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZpbmQ8VD4oa2V5OnN0cmluZyk6IEFycmF5PFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbnNGaWx0cmFkb3MgPSB0aGlzLkNsYWltcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFzKGtleTpzdHJpbmcpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW5zRmlsdHJhZG9zICE9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcy5sZW5ndGggPiAtMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQgTmFtZSgpIDogc3RyaW5nIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCduYW1lJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0=
