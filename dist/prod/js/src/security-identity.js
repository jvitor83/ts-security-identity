"use strict";

"use strict";
var IPrincipal = (function () {
    function IPrincipal() {
    }
    return IPrincipal;
}());
exports.IPrincipal = IPrincipal;

"use strict";
var Principal = (function () {
    function Principal(Identity, AuthenticationType) {
        if (AuthenticationType === void 0) { AuthenticationType = "Generic"; }
        this.Identity = Identity;
        this.AuthenticationType = AuthenticationType;
    }
    Object.defineProperty(Principal.prototype, "IsAuthenticated", {
        get: function () {
            if (this.Identity != null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Principal;
}());
exports.Principal = Principal;

"use strict";
var Principal_1 = require('./Identities/Principal');
var SecurityContext = (function () {
    function SecurityContext() {
        this._Principal = {
            IsAuthenticated: false,
            Identity: null
        };
        this.Principal = new Principal_1.Principal();
    }
    Object.defineProperty(SecurityContext, "Current", {
        get: function () {
            if (SecurityContext._current === null) {
                SecurityContext._current = new SecurityContext();
            }
            return SecurityContext._current;
        },
        enumerable: true,
        configurable: true
    });
    SecurityContext.Reset = function () {
        SecurityContext._current = null;
    };
    Object.defineProperty(SecurityContext.prototype, "Principal", {
        get: function () {
            return this._Principal;
        },
        set: function (value) {
            this._Principal = value;
        },
        enumerable: true,
        configurable: true
    });
    SecurityContext.prototype.Init = function (securityContextInitializer) {
        securityContextInitializer.Initialize(this);
    };
    SecurityContext._current = null;
    return SecurityContext;
}());
exports.SecurityContext = SecurityContext;

"use strict";

"use strict";

"use strict";

"use strict";

"use strict";

"use strict";
var TokenParsed = (function () {
    function TokenParsed(header, content, signature) {
        this.header = header;
        this.content = content;
        this.signature = signature;
    }
    Object.defineProperty(TokenParsed.prototype, "headerJSON", {
        get: function () {
            return JSON.parse(this.header);
        },
        enumerable: true,
        configurable: true
    });
    TokenParsed.prototype.headerObject = function () {
        return this.headerJSON;
    };
    Object.defineProperty(TokenParsed.prototype, "contentJSON", {
        get: function () {
            return JSON.parse(this.content);
        },
        enumerable: true,
        configurable: true
    });
    TokenParsed.prototype.contentObject = function () {
        return this.contentJSON;
    };
    return TokenParsed;
}());
exports.TokenParsed = TokenParsed;

"use strict";
var Base64 = (function () {
    function Base64() {
    }
    Base64.Encode = function (value) {
        var str = String(value);
        var output = '';
        for (var block = void 0, charCode = void 0, idx = 0, map = this.chars; str.charAt(idx | 0) || (map = '=', idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
            charCode = str.charCodeAt(idx += 3 / 4);
            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }
            block = block << 8 | charCode;
        }
        return output;
    };
    Base64.Decode = function (value) {
        var output = '';
        var str = String(value).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (var bc = 0, bs = void 0, buffer = void 0, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = this.chars.indexOf(buffer);
        }
        return output;
    };
    Base64.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return Base64;
}());
exports.Base64 = Base64;

"use strict";
var TokenParsed_1 = require('./TokenParsed');
var Base64_1 = require('../../Utils/Base64');
var TokenParser = (function () {
    function TokenParser(token) {
        this.token = token;
    }
    TokenParser.prototype.Parse = function () {
        var accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
        var encodedHeader = accessTokenSplitted[0];
        var encodedContent = accessTokenSplitted[1];
        var encodedSignature = accessTokenSplitted[2];
        var header = Base64_1.Base64.Decode(encodedHeader);
        var content = Base64_1.Base64.Decode(encodedContent);
        var signature = Base64_1.Base64.Decode(encodedSignature);
        var tokenParsed = new TokenParsed_1.TokenParsed(header, content, signature);
        return tokenParsed;
    };
    TokenParser.TOKEN_SEPARATOR = ".";
    return TokenParser;
}());
exports.TokenParser = TokenParser;

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

"use strict";
var Identity_1 = require('./Identity');
var IdentityFactory = (function () {
    function IdentityFactory() {
    }
    IdentityFactory.isIIdentity = function (valor) {
        return valor.Claims !== undefined;
    };
    IdentityFactory.Create = function (userOrUserType, tokens) {
        tokens = tokens instanceof Array ? tokens : [tokens];
        var keyValuePairArray = IdentityFactory.GenerateKeyValuePair(tokens);
        var identity = null;
        if (userOrUserType == null) {
            identity = new Identity_1.Identity(keyValuePairArray);
        }
        else {
            if (IdentityFactory.isIIdentity(userOrUserType)) {
                identity = userOrUserType;
            }
            else {
                identity = new userOrUserType(keyValuePairArray);
            }
        }
        keyValuePairArray.forEach(function (keyValuePair) {
            identity.Claims.push(keyValuePair);
        });
        return identity;
    };
    IdentityFactory.GenerateKeyValuePair = function (tokens) {
        tokens = tokens instanceof Array ? tokens : [tokens];
        var keyValuePairArray = new Array();
        tokens.forEach(function (token) {
            for (var chave in token) {
                if (token.hasOwnProperty(chave)) {
                    var valor = token[chave];
                    var novoItem = {
                        key: chave,
                        value: valor
                    };
                    if (token instanceof Array) {
                        keyValuePairArray.push(valor);
                    }
                    else {
                        keyValuePairArray.push(novoItem);
                    }
                }
            }
        });
        return keyValuePairArray;
    };
    return IdentityFactory;
}());
exports.IdentityFactory = IdentityFactory;

"use strict";
var TokenParser_1 = require('./Tokens/Parsers/TokenParser');
var IdentityFactory_1 = require('./Identities/IdentityFactory');
var Identity_1 = require('./Identities/Identity');
var SecurityContextEncodedTokenInitializer = (function () {
    function SecurityContextEncodedTokenInitializer(encodedTokens) {
        this.encodedTokens = encodedTokens;
    }
    SecurityContextEncodedTokenInitializer.prototype.Initialize = function (securityContext) {
        var decodedTokensContent = this.encodedTokens.map(function (encodedToken) {
            var tokenParser = new TokenParser_1.TokenParser(encodedToken);
            var tokenParsed = tokenParser.Parse();
            var tokenContent = tokenParsed.contentJSON;
            return tokenContent;
        });
        var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, decodedTokensContent);
        securityContext.Principal.Identity = userCreated;
    };
    return SecurityContextEncodedTokenInitializer;
}());
exports.SecurityContextEncodedTokenInitializer = SecurityContextEncodedTokenInitializer;

"use strict";
var IdentityFactory_1 = require('./Identities/IdentityFactory');
var Identity_1 = require('./Identities/Identity');
var SecurityContextTokenInitializer = (function () {
    function SecurityContextTokenInitializer(tokens) {
        this.tokens = tokens;
    }
    SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
        var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_1.Identity, this.tokens);
        securityContext.Principal.Identity = userCreated;
    };
    return SecurityContextTokenInitializer;
}());
exports.SecurityContextTokenInitializer = SecurityContextTokenInitializer;

"use strict";
var SecurityContext_1 = require('./SecurityContext');
var SecurityContextTokenInitializer_1 = require('./SecurityContextTokenInitializer');
var SecurityContextInitializer = (function () {
    function SecurityContextInitializer() {
    }
    SecurityContextInitializer.Create = function (typeOfSecurityContextInitializer) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var securityContextInitializer = new typeOfSecurityContextInitializer(args);
        var castedSecurityContextInitializer = securityContextInitializer;
        return castedSecurityContextInitializer;
    };
    SecurityContextInitializer.InitializeWithTokens = function (tokens) {
        var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, tokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
        var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.SecurityContextTokenInitializer, encodedTokens);
        SecurityContext_1.SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext_1.SecurityContext.Current;
    };
    return SecurityContextInitializer;
}());
exports.SecurityContextInitializer = SecurityContextInitializer;

"use strict";

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSUlkZW50aXR5LmpzIiwiSWRlbnRpdGllcy9JUHJpbmNpcGFsLnRzIiwiSWRlbnRpdGllcy9QcmluY2lwYWwudHMiLCJTZWN1cml0eUNvbnRleHQudHMiLCJJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuanMiLCJUb2tlbnMvSVRva2VuLmpzIiwiVG9rZW5zL0lUb2tlbkhlYWRlci5qcyIsIlRva2Vucy9JVG9rZW5Db250ZW50LmpzIiwiVG9rZW5zL1BhcnNlcnMvSVRva2VuUGFyc2VkLmpzIiwiVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQudHMiLCJVdGlscy9CYXNlNjQudHMiLCJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyIsIklkZW50aXRpZXMvSWRlbnRpdHkudHMiLCJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyIsIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIiwiU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci50cyIsIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIiwiVG9rZW5zL0FjY2Vzc1Rva2VuL0lBY2Nlc3NUb2tlbkNvbnRlbnQuanMiLCJUb2tlbnMvSWRlbnRpdHlUb2tlbi9JSWRlbnRpdHlUb2tlbkNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUNDQTtJQUFBO0lBTUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxrQkFBVSxhQU10QixDQUFBOzs7QUNMRDtJQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztRQUE3QyxrQ0FBNkMsR0FBN0MsOEJBQTZDO1FBQW5FLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBR3RGLENBQUM7SUFFRCxzQkFBVyxzQ0FBZTthQUExQjtZQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFR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O0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCcUIsa0NBQTBCLDZCQXNCL0MsQ0FBQTs7QUMzQkQ7QUFDQTtBQ0RBO0FBQ0EiLCJmaWxlIjoic2VjdXJpdHktaWRlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCB7IElJZGVudGl0eSB9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJUHJpbmNpcGFsXHJcbntcclxuICAgIElkZW50aXR5OiBJSWRlbnRpdHk7XHJcbiAgICBcclxuICAgIElzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IElQcmluY2lwYWwgfSBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQgeyBJSWRlbnRpdHkgfSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgSVByaW5jaXBhbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk/IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLklkZW50aXR5ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vdHlwaW5ncy9tYWluLmQudHMnLz5cclxuaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0IFxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudDogU2VjdXJpdHlDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCBcclxuICAgIHtcclxuICAgICAgICBpZihTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSAgbmV3IFNlY3VyaXR5Q29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlc2V0KClcclxuICAgIHtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfUHJpbmNpcGFsOiBJUHJpbmNpcGFsID0gPGFueT5cclxuICAgIHtcclxuICAgICAgICBJc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIElkZW50aXR5OiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgUHJpbmNpcGFsKCk6IElQcmluY2lwYWwgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFByaW5jaXBhbCh2YWx1ZTogSVByaW5jaXBhbCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fUHJpbmNpcGFsID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOklTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcilcclxuICAgIHtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5Jbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCJpbXBvcnQge0lUb2tlblBhcnNlZH0gZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0lUb2tlbkhlYWRlcn0gZnJvbSAnLi4vSVRva2VuSGVhZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBCYXNlNjRcclxue1xyXG4gICAgc3RhdGljIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgRW5jb2RlKHZhbHVlIDpzdHJpbmcpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXHJcbiAgICAgICAgbGV0IGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gdGhpcy5jaGFycztcclxuICAgICAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XHJcbiAgICAgICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcclxuICAgICAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXHJcbiAgICAgICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcclxuICAgICAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxyXG4gICAgICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzLzQpO1xyXG4gICAgICAgICAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInYnRvYScgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29kZSh2YWx1ZSA6c3RyaW5nKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvPSskLywgJycpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoICUgNCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcclxuICAgICAgICBsZXQgYmMgPSAwLCBicywgYnVmZmVyLCBpZHggPSAwO1xyXG4gICAgICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgICAgIGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspO1xyXG4gICAgICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgICAgICB+YnVmZmVyICYmIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXHJcbiAgICAgICAgICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgIGJjKysgJSA0KSA/IG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIGJzID4+ICgtMiAqIGJjICYgNikpIDogMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuY2hhcnMuaW5kZXhPZihidWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lUb2tlblBhcnNlZH0gZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge1Rva2VuUGFyc2VkfSBmcm9tICcuL1Rva2VuUGFyc2VkJztcclxuaW1wb3J0IHtCYXNlNjR9IGZyb20gJy4uLy4uL1V0aWxzL0Jhc2U2NCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXJcclxue1xyXG4gICAgc3RhdGljIFRPS0VOX1NFUEFSQVRPUiA6c3RyaW5nID0gXCIuXCI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW4gOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUGFyc2U8VCBleHRlbmRzIElUb2tlblBhcnNlZD4oKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVuY29kZWRIZWFkZXIgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzBdO1xyXG4gICAgICAgIGxldCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICAgICAgbGV0IGVuY29kZWRTaWduYXR1cmUgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gQmFzZTY0LkRlY29kZShlbmNvZGVkQ29udGVudCk7XHJcbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZFNpZ25hdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gbmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICAgICAgICByZXR1cm4gPFQ+dG9rZW5QYXJzZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eVxyXG57XHJcbiAgICBwcml2YXRlIF9DbGFpbXMgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+O1xyXG4gICAgcHVibGljIGdldCBDbGFpbXMoKSA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoQ2xhaW1zOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9DbGFpbXMgPSBDbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmQ8VD4oa2V5OnN0cmluZyk6IEFycmF5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IGl0ZW5zRmlsdHJhZG9zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmRGaXJzdDxUPihrZXk6c3RyaW5nKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSB0aGlzLmZpbmQ8VD4oa2V5KTtcclxuICAgICAgICBsZXQgaXRlbSA9IHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhcyhrZXk6c3RyaW5nKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcyAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW5zRmlsdHJhZG9zLmxlbmd0aCA+IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgTmFtZSgpIDogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZGVudGl0eUZhY3Rvcnlcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9KTogdmFsb3IgaXMgSUlkZW50aXR5IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/IDpUIHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0sIHRva2Vucz8gOmFueVtdKTpUXHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlkZW50aXR5IDpJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHVzZXJPclVzZXJUeXBlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkuZm9yRWFjaCgoa2V5VmFsdWVQYWlyKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRlbnRpdHkuQ2xhaW1zLnB1c2goa2V5VmFsdWVQYWlyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxUPmlkZW50aXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMgOmFueVtdKTpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+XHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGtleVZhbHVlUGFpckFycmF5IDpBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PiA9IG5ldyBBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PigpOyBcclxuICAgICAgICBcclxuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGNoYXZlIGluIHRva2VuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0b2tlbi5oYXNPd25Qcm9wZXJ0eShjaGF2ZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbG9yID0gdG9rZW5bY2hhdmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3ZvSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5IDogY2hhdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogdmFsb3JcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCB2YWxvciApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCBub3ZvSXRlbSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWVQYWlyQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQgeyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmNvZGVkVG9rZW5zIDpzdHJpbmdbXSkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dCA6U2VjdXJpdHlDb250ZXh0KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkZWNvZGVkVG9rZW5zQ29udGVudCA9IHRoaXMuZW5jb2RlZFRva2Vucy5tYXAoKGVuY29kZWRUb2tlbikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlciA9IG5ldyBUb2tlblBhcnNlcihlbmNvZGVkVG9rZW4pO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSB0b2tlblBhcnNlci5QYXJzZSgpO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5Db250ZW50ID0gdG9rZW5QYXJzZWQuY29udGVudEpTT047XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbkNvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgZGVjb2RlZFRva2Vuc0NvbnRlbnQpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTZWN1cml0eUNvbnRleHQgfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7IElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciB9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnMgOmFueVtdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI+KHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDp7IG5ldyguLi5hcmdzKTogVCB9LCAuLi5hcmdzKTogVFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyB0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcihhcmdzKTtcclxuICAgICAgICBsZXQgY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSA8VD5zZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgICAgICByZXR1cm4gY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhUb2tlbnModG9rZW5zOiBhbnlbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIHRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhFbmNvZGVkVG9rZW5zKGVuY29kZWRUb2tlbnM6IHN0cmluZ1tdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgZW5jb2RlZFRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbn0iLG51bGwsbnVsbF19
