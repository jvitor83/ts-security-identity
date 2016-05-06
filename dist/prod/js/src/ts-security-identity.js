System.register("Identities/IIdentity", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Identities/IPrincipal", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var IPrincipal;
    return {
        setters:[],
        execute: function() {
            IPrincipal = (function () {
                function IPrincipal() {
                }
                return IPrincipal;
            }());
            exports_2("IPrincipal", IPrincipal);
        }
    }
});
System.register("Identities/Principal", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Principal;
    return {
        setters:[],
        execute: function() {
            Principal = (function () {
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
            exports_3("Principal", Principal);
        }
    }
});
System.register("SecurityContext", ["Identities/Principal"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Principal_1;
    var SecurityContext;
    return {
        setters:[
            function (Principal_1_1) {
                Principal_1 = Principal_1_1;
            }],
        execute: function() {
            SecurityContext = (function () {
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
            exports_4("SecurityContext", SecurityContext);
        }
    }
});
System.register("ISecurityContextInitializer", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/IToken", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/ITokenHeader", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/ITokenContent", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/Parsers/ITokenParsed", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/Parsers/TokenParsed", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var TokenParsed;
    return {
        setters:[],
        execute: function() {
            TokenParsed = (function () {
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
            exports_10("TokenParsed", TokenParsed);
        }
    }
});
System.register("Utils/Base64", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Base64;
    return {
        setters:[],
        execute: function() {
            Base64 = (function () {
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
            exports_11("Base64", Base64);
        }
    }
});
System.register("Tokens/Parsers/TokenParser", ["Tokens/Parsers/TokenParsed", "Utils/Base64"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var TokenParsed_1, Base64_1;
    var TokenParser;
    return {
        setters:[
            function (TokenParsed_1_1) {
                TokenParsed_1 = TokenParsed_1_1;
            },
            function (Base64_1_1) {
                Base64_1 = Base64_1_1;
            }],
        execute: function() {
            TokenParser = (function () {
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
            exports_12("TokenParser", TokenParser);
        }
    }
});
System.register("Identities/Identity", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
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
            exports_13("Identity", Identity);
        }
    }
});
System.register("Identities/IdentityFactory", ["Identities/Identity"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var Identity_1;
    var IdentityFactory;
    return {
        setters:[
            function (Identity_1_1) {
                Identity_1 = Identity_1_1;
            }],
        execute: function() {
            IdentityFactory = (function () {
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
            exports_14("IdentityFactory", IdentityFactory);
        }
    }
});
System.register("SecurityContextEncodedTokenInitializer", ["Tokens/Parsers/TokenParser", "Identities/IdentityFactory", "Identities/Identity"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var TokenParser_1, IdentityFactory_1, Identity_2;
    var SecurityContextEncodedTokenInitializer;
    return {
        setters:[
            function (TokenParser_1_1) {
                TokenParser_1 = TokenParser_1_1;
            },
            function (IdentityFactory_1_1) {
                IdentityFactory_1 = IdentityFactory_1_1;
            },
            function (Identity_2_1) {
                Identity_2 = Identity_2_1;
            }],
        execute: function() {
            SecurityContextEncodedTokenInitializer = (function () {
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
                    var userCreated = IdentityFactory_1.IdentityFactory.Create(Identity_2.Identity, decodedTokensContent);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextEncodedTokenInitializer;
            }());
            exports_15("SecurityContextEncodedTokenInitializer", SecurityContextEncodedTokenInitializer);
        }
    }
});
System.register("SecurityContextTokenInitializer", ["Identities/IdentityFactory", "Identities/Identity"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var IdentityFactory_2, Identity_3;
    var SecurityContextTokenInitializer;
    return {
        setters:[
            function (IdentityFactory_2_1) {
                IdentityFactory_2 = IdentityFactory_2_1;
            },
            function (Identity_3_1) {
                Identity_3 = Identity_3_1;
            }],
        execute: function() {
            SecurityContextTokenInitializer = (function () {
                function SecurityContextTokenInitializer(tokens) {
                    this.tokens = tokens;
                }
                SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
                    var userCreated = IdentityFactory_2.IdentityFactory.Create(Identity_3.Identity, this.tokens);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextTokenInitializer;
            }());
            exports_16("SecurityContextTokenInitializer", SecurityContextTokenInitializer);
        }
    }
});
System.register("SecurityContextInitializer", ["SecurityContext", "SecurityContextTokenInitializer"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var SecurityContext_1, SecurityContextTokenInitializer_1;
    var SecurityContextInitializer;
    return {
        setters:[
            function (SecurityContext_1_1) {
                SecurityContext_1 = SecurityContext_1_1;
            },
            function (SecurityContextTokenInitializer_1_1) {
                SecurityContextTokenInitializer_1 = SecurityContextTokenInitializer_1_1;
            }],
        execute: function() {
            SecurityContextInitializer = (function () {
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
            exports_17("SecurityContextInitializer", SecurityContextInitializer);
        }
    }
});
System.register("Tokens/AccessToken/IAccessTokenContent", [], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("Tokens/IdentityToken/IIdentityTokenContent", [], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSVByaW5jaXBhbC50cyIsIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIiwiU2VjdXJpdHlDb250ZXh0LnRzIiwiVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQudHMiLCJVdGlscy9CYXNlNjQudHMiLCJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyIsIklkZW50aXRpZXMvSWRlbnRpdHkudHMiLCJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyIsIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIiwiU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci50cyIsIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFPQSxDQUFDO2dCQUFELGlCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxtQ0FPQyxDQUFBOzs7Ozs7Ozs7OztZQ05EO2dCQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztvQkFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztvQkFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtvQkFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO2dCQUd0RixDQUFDO2dCQUVELHNCQUFXLHNDQUFlO3lCQUExQjt3QkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBQ0wsZ0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELGlDQWtCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNqQkQ7Z0JBa0JJO29CQUtRLGVBQVUsR0FD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QVAsc0JBQU8sQ0FBUCxJQUFPO3dCQUFQLDZCQUFPOztvQkFFdEgsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1RSxJQUFJLGdDQUFnQyxHQUFNLDBCQUEwQixDQUFDO29CQUNyRSxNQUFNLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRWEsK0NBQW9CLEdBQWxDLFVBQW1DLE1BQWE7b0JBRTVDLElBQUksK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLGlFQUErQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqSCxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVhLHNEQUEyQixHQUF6QyxVQUEwQyxhQUF1QjtvQkFFN0QsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsaUVBQStCLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3hILGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0wsaUNBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELG9FQXNCQyxDQUFBIiwiZmlsZSI6InRzLXNlY3VyaXR5LWlkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSVByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBJUHJpbmNpcGFsXHJcbntcclxuICAgIFxyXG4gICAgSWRlbnRpdHk6IElJZGVudGl0eTtcclxuICAgIFxyXG4gICAgSXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgQXV0aGVudGljYXRpb25UeXBlOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eT8gOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuSWRlbnRpdHkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dCBcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IFNlY3VyaXR5Q29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3VycmVudCgpOiBTZWN1cml0eUNvbnRleHQgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1ByaW5jaXBhbDogSVByaW5jaXBhbCA9IDxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICBJZGVudGl0eTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBQcmluY2lwYWwodmFsdWU6IElQcmluY2lwYWwpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDpJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuSW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2U2NFxyXG57XHJcbiAgICBzdGF0aWMgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBFbmNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcclxuICAgICAgICBsZXQgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSB0aGlzLmNoYXJzO1xyXG4gICAgICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcclxuICAgICAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxyXG4gICAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcclxuICAgICAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xyXG4gICAgICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XHJcbiAgICAgICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMvNCk7XHJcbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIididG9hJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlIExhdGluMSByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb2RlKHZhbHVlIDpzdHJpbmcpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICAgIGxldCBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDA7XHJcbiAgICAgICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXHJcbiAgICAgICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XHJcbiAgICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xyXG4gICAgICAgIH5idWZmZXIgJiYgKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcixcclxuICAgICAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5jaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7VG9rZW5QYXJzZWR9IGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vLi4vVXRpbHMvQmFzZTY0JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZXJcclxue1xyXG4gICAgc3RhdGljIFRPS0VOX1NFUEFSQVRPUiA6c3RyaW5nID0gXCIuXCI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW4gOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUGFyc2U8VCBleHRlbmRzIElUb2tlblBhcnNlZD4oKTpUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuU3BsaXR0ZWQgPSB0aGlzLnRva2VuLnNwbGl0KFRva2VuUGFyc2VyLlRPS0VOX1NFUEFSQVRPUik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVuY29kZWRIZWFkZXIgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzBdO1xyXG4gICAgICAgIGxldCBlbmNvZGVkQ29udGVudCA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMV07XHJcbiAgICAgICAgbGV0IGVuY29kZWRTaWduYXR1cmUgPSBhY2Nlc3NUb2tlblNwbGl0dGVkWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRIZWFkZXIpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gQmFzZTY0LkRlY29kZShlbmNvZGVkQ29udGVudCk7XHJcbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZFNpZ25hdHVyZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gbmV3IFRva2VuUGFyc2VkKGhlYWRlciwgY29udGVudCwgc2lnbmF0dXJlKTtcclxuICAgICAgICByZXR1cm4gPFQ+dG9rZW5QYXJzZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHk7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxue1xyXG4gICAgcHJpdmF0ZSBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKENsYWltczogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PikgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcy5sZW5ndGggPiAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eUZhY3Rvcnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWRlbnRpdHlGYWN0b3J5XHJcbntcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9KTogdmFsb3IgaXMgSUlkZW50aXR5IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/IDpUIHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0sIHRva2Vucz8gOmFueVtdKTpUXHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlkZW50aXR5IDpJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHVzZXJPclVzZXJUeXBlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkuZm9yRWFjaCgoa2V5VmFsdWVQYWlyKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRlbnRpdHkuQ2xhaW1zLnB1c2goa2V5VmFsdWVQYWlyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxUPmlkZW50aXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMgOmFueVtdKTpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+XHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGtleVZhbHVlUGFpckFycmF5IDpBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PiA9IG5ldyBBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PigpOyBcclxuICAgICAgICBcclxuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGNoYXZlIGluIHRva2VuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0b2tlbi5oYXNPd25Qcm9wZXJ0eShjaGF2ZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbG9yID0gdG9rZW5bY2hhdmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3ZvSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5IDogY2hhdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogdmFsb3JcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCB2YWxvciApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCBub3ZvSXRlbSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWVQYWlyQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuaW1wb3J0IHtJZGVudGl0eUZhY3Rvcnl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplciBpbXBsZW1lbnRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplclxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5jb2RlZFRva2VucyA6c3RyaW5nW10pIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdGlhbGl6ZShzZWN1cml0eUNvbnRleHQgOlNlY3VyaXR5Q29udGV4dClcclxuICAgIHtcclxuICAgICAgICBsZXQgZGVjb2RlZFRva2Vuc0NvbnRlbnQgPSB0aGlzLmVuY29kZWRUb2tlbnMubWFwKChlbmNvZGVkVG9rZW4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5QYXJzZXIgPSBuZXcgVG9rZW5QYXJzZXIoZW5jb2RlZFRva2VuKTtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gdG9rZW5QYXJzZXIuUGFyc2UoKTtcclxuICAgICAgICAgICAgbGV0IHRva2VuQ29udGVudCA9IHRva2VuUGFyc2VkLmNvbnRlbnRKU09OO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5Db250ZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c2VyQ3JlYXRlZCA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUoSWRlbnRpdHksIGRlY29kZWRUb2tlbnNDb250ZW50KTtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHQuUHJpbmNpcGFsLklkZW50aXR5ID0gdXNlckNyZWF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuXHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyIGltcGxlbWVudHMgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplclxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zIDphbnlbXSkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBJbml0aWFsaXplKHNlY3VyaXR5Q29udGV4dCA6U2VjdXJpdHlDb250ZXh0KVxyXG4gICAge1xyXG4gICAgICAgIGxldCB1c2VyQ3JlYXRlZCA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUoSWRlbnRpdHksIHRoaXMudG9rZW5zKTtcclxuICAgICAgICBzZWN1cml0eUNvbnRleHQuUHJpbmNpcGFsLklkZW50aXR5ID0gdXNlckNyZWF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuICAgICIsImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7SVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyfSBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXJ9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI+KHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDp7IG5ldyguLi5hcmdzKTogVCB9LCAuLi5hcmdzKTogVFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyB0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcihhcmdzKTtcclxuICAgICAgICBsZXQgY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSA8VD5zZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgICAgICByZXR1cm4gY2FzdGVkU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhUb2tlbnModG9rZW5zOiBhbnlbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIHRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdGlhbGl6ZVdpdGhFbmNvZGVkVG9rZW5zKGVuY29kZWRUb2tlbnM6IHN0cmluZ1tdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgZW5jb2RlZFRva2Vucyk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyKTtcclxuICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19
