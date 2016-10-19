(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
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
            },
            enumerable: true,
            configurable: true
        });
        return Identity;
    }());
    exports.Identity = Identity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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IklkZW50aXRpZXMvSWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eVxyXG57IFxyXG4gICAgcHJvdGVjdGVkIF9DbGFpbXMgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+O1xyXG4gICAgcHVibGljIGdldCBDbGFpbXMoKSA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoQ2xhaW1zPzogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PiB8IGFueSwgcHJpdmF0ZSBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlKSBcclxuICAgIHtcclxuICAgICAgICBpZihDbGFpbXMgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoQ2xhaW1zKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBDbGFpbXMgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlDbGFpbXMgPSBuZXcgQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PigpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjbGFpbSBpbiBDbGFpbXMpIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5Q2xhaW1zLnB1c2goIHsga2V5IDogY2xhaW0sIHZhbHVlIDogQ2xhaW1zW2NsYWltXSB9ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9DbGFpbXMgPSBhcnJheUNsYWltcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlDbGFpbXMgPSBuZXcgQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PigpO1xyXG4gICAgICAgICAgICB0aGlzLl9DbGFpbXMgPSBhcnJheUNsYWltcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb250YWluSXRlbSA9IHRoaXMuQ2xhaW1zLnNvbWUoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluSXRlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBOYW1lKCkgOiBzdHJpbmcgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCduYW1lJyk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgLy8gbGV0IGNvbnRhaW5zQWNjZXNzVG9rZW4gPSB0aGlzLkNsYWltcy5zb21lKGNsYWltID0+IGNsYWltLmtleSA9PT0gJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgICAgIC8vIHJldHVybiBjb250YWluc0FjY2Vzc1Rva2VuO1xyXG4gICAgfVxyXG59Il19
