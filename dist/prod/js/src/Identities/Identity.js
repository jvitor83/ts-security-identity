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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aXR5IGltcGxlbWVudHMgSUlkZW50aXR5XHJcbnsgXHJcbiAgICBwcm90ZWN0ZWQgX0NsYWltcyA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT47XHJcbiAgICBwdWJsaWMgZ2V0IENsYWltcygpIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihDbGFpbXM/OiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IHwgYW55LCBwcml2YXRlIGlzQXV0aGVudGljYXRlZCA9IHRydWUpIFxyXG4gICAge1xyXG4gICAgICAgIGlmKENsYWltcyAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShDbGFpbXMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIENsYWltcyA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUNsYWltcyA9IG5ldyBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGNsYWltIGluIENsYWltcykgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlDbGFpbXMucHVzaCggeyBrZXkgOiBjbGFpbSwgdmFsdWUgOiBDbGFpbXNbY2xhaW1dIH0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX0NsYWltcyA9IGFycmF5Q2xhaW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBhcnJheUNsYWltcyA9IG5ldyBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX0NsYWltcyA9IGFycmF5Q2xhaW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmQ8VD4oa2V5OnN0cmluZyk6IEFycmF5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmRGaXJzdDxUPihrZXk6c3RyaW5nKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgICAgICBsZXQgaXRlbSA9IHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhcyhrZXk6c3RyaW5nKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5JdGVtID0gdGhpcy5DbGFpbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5JdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZDtcclxuICAgICAgICAvLyBsZXQgY29udGFpbnNBY2Nlc3NUb2tlbiA9IHRoaXMuQ2xhaW1zLnNvbWUoY2xhaW0gPT4gY2xhaW0ua2V5ID09PSAnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbnRhaW5zQWNjZXNzVG9rZW47XHJcbiAgICB9XHJcbn0iXX0=
