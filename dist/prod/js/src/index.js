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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsdUNBQWtDO0lBQ2xDLDhEQUF5RDtJQUN6RCxrREFBNkM7SUFDN0MsdURBQWtEO0lBRWxELDJDQUFzQztJQUN0QyxrREFBNkM7SUFDN0MsMkNBQXNDO0lBQ3RDLGdEQUEyQztJQUMzQyw2Q0FBd0M7SUFDeEMsNENBQXVDO0lBV3ZDLGtEQUE2QztJQUM3QyxrREFBNkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9PQXV0aElkZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuXHJcbi8vZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvSVRva2VuJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvSVRva2VuQ29udGVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lUb2tlbkhlYWRlcic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9BY2Nlc3NUb2tlbi9JQWNjZXNzVG9rZW5Db250ZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lkZW50aXR5VG9rZW4vSUlkZW50aXR5VG9rZW5Db250ZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL1BhcnNlcnMvSVRva2VuUGFyc2VkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXInO1xyXG5cclxuIl19
