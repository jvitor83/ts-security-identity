(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './SecurityContext', './SecurityContextEncodedTokenInitializer', './SecurityContextInitializer', './SecurityContextTokenInitializer', './Identities/Identity', './Identities/IdentityFactory', './Identities/Identity', './Identities/OAuthIdentity', './Identities/IPrincipal', './Identities/Principal', './Tokens/Parsers/TokenParsed', './Tokens/Parsers/TokenParser'], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(require('./SecurityContext'));
    __export(require('./SecurityContextEncodedTokenInitializer'));
    __export(require('./SecurityContextInitializer'));
    __export(require('./SecurityContextTokenInitializer'));
    __export(require('./Identities/Identity'));
    __export(require('./Identities/IdentityFactory'));
    __export(require('./Identities/Identity'));
    __export(require('./Identities/OAuthIdentity'));
    __export(require('./Identities/IPrincipal'));
    __export(require('./Identities/Principal'));
    __export(require('./Tokens/Parsers/TokenParsed'));
    __export(require('./Tokens/Parsers/TokenParser'));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBLGlCQUFjLG1CQUFtQixDQUFDLEVBQUE7SUFDbEMsaUJBQWMsMENBQTBDLENBQUMsRUFBQTtJQUN6RCxpQkFBYyw4QkFBOEIsQ0FBQyxFQUFBO0lBQzdDLGlCQUFjLG1DQUFtQyxDQUFDLEVBQUE7SUFFbEQsaUJBQWMsdUJBQXVCLENBQUMsRUFBQTtJQUN0QyxpQkFBYyw4QkFBOEIsQ0FBQyxFQUFBO0lBQzdDLGlCQUFjLHVCQUF1QixDQUFDLEVBQUE7SUFDdEMsaUJBQWMsNEJBQTRCLENBQUMsRUFBQTtJQUMzQyxpQkFBYyx5QkFBeUIsQ0FBQyxFQUFBO0lBQ3hDLGlCQUFjLHdCQUF3QixDQUFDLEVBQUE7SUFXdkMsaUJBQWMsOEJBQThCLENBQUMsRUFBQTtJQUM3QyxpQkFBYyw4QkFBOEIsQ0FBQyxFQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0lkZW50aXRpZXMvT0F1dGhJZGVudGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9JZGVudGl0aWVzL1ByaW5jaXBhbCc7XHJcblxyXG4vL2V4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lUb2tlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL0lUb2tlbkNvbnRlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JVG9rZW5IZWFkZXInO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbnMvQWNjZXNzVG9rZW4vSUFjY2Vzc1Rva2VuQ29udGVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9JZGVudGl0eVRva2VuL0lJZGVudGl0eVRva2VuQ29udGVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL0lUb2tlblBhcnNlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuXHJcbiJdfQ==
