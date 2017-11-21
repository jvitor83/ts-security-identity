(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SecurityContext", "./SecurityContextEncodedTokenInitializer", "./SecurityContextInitializer", "./SecurityContextTokenInitializer", "./Identities/Identity", "./Identities/IdentityFactory", "./Identities/Identity", "./Identities/OAuthIdentity", "./Identities/IPrincipal", "./Identities/Principal", "./Tokens/Parsers/TokenParsed", "./Tokens/Parsers/TokenParser"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./SecurityContext"));
    __export(require("./SecurityContextEncodedTokenInitializer"));
    __export(require("./SecurityContextInitializer"));
    __export(require("./SecurityContextTokenInitializer"));
    __export(require("./Identities/Identity"));
    __export(require("./Identities/IdentityFactory"));
    __export(require("./Identities/Identity"));
    __export(require("./Identities/OAuthIdentity"));
    __export(require("./Identities/IPrincipal"));
    __export(require("./Identities/Principal"));
    __export(require("./Tokens/Parsers/TokenParsed"));
    __export(require("./Tokens/Parsers/TokenParser"));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUNBLHVDQUFrQztJQUNsQyw4REFBeUQ7SUFDekQsa0RBQTZDO0lBQzdDLHVEQUFrRDtJQUVsRCwyQ0FBc0M7SUFDdEMsa0RBQTZDO0lBQzdDLDJDQUFzQztJQUN0QyxnREFBMkM7SUFDM0MsNkNBQXdDO0lBQ3hDLDRDQUF1QztJQVd2QyxrREFBNkM7SUFDN0Msa0RBQTZDIiwiZmlsZSI6InNyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5cclxuLy9leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JVG9rZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JVG9rZW5Db250ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvSVRva2VuSGVhZGVyJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0FjY2Vzc1Rva2VuL0lBY2Nlc3NUb2tlbkNvbnRlbnQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvSWRlbnRpdHlUb2tlbi9JSWRlbnRpdHlUb2tlbkNvbnRlbnQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9JVG9rZW5QYXJzZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcblxyXG4iXX0=
