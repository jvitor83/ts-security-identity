(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var IPrincipal = (function () {
        function IPrincipal() {
        }
        return IPrincipal;
    }());
    exports.IPrincipal = IPrincipal;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSVByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQUFBO1FBT0EsQ0FBQztRQUFELGlCQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxrQkFBVSxhQU90QixDQUFBIiwiZmlsZSI6IklkZW50aXRpZXMvSVByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IElQcmluY2lwYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgSVByaW5jaXBhbFxyXG57XHJcbiAgICBcclxuICAgIElkZW50aXR5OiBJSWRlbnRpdHk7XHJcbiAgICBcclxuICAgIElzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xyXG59Il19
