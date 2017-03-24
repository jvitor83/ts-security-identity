(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    // export default IPrincipal;
    var IPrincipal = (function () {
        function IPrincipal() {
        }
        return IPrincipal;
    }());
    exports.IPrincipal = IPrincipal;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lQcmluY2lwYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBRUEsNkJBQTZCO0lBRTdCO1FBQUE7UUFNQSxDQUFDO1FBQUQsaUJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLGtCQUFVLGFBTXRCLENBQUEiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvSVByaW5jaXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJUHJpbmNpcGFsO1xyXG5cclxuZXhwb3J0IGNsYXNzIElQcmluY2lwYWwge1xyXG5cclxuICBJZGVudGl0eTogSUlkZW50aXR5O1xyXG5cclxuICBJc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgQXV0aGVudGljYXRpb25UeXBlOiBzdHJpbmc7XHJcbn1cclxuIl19
