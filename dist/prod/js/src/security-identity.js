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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSVByaW5jaXBhbC50cyIsIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIiwiU2VjdXJpdHlDb250ZXh0LnRzIiwiVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQudHMiLCJVdGlscy9CYXNlNjQudHMiLCJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyIsIklkZW50aXRpZXMvSWRlbnRpdHkudHMiLCJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyIsIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIiwiU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci50cyIsIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFSTtnQkFBQTtnQkFPQSxDQUFDO2dCQUFELGlCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxtQ0FPQyxDQUFBOzs7Ozs7Ozs7OztZQ0xEO2dCQUVJLG1CQUFtQixRQUFvQixFQUFTLGtCQUFzQztvQkFBN0Msa0NBQTZDLEdBQTdDLDhCQUE2QztvQkFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtvQkFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO2dCQUd0RixDQUFDO2dCQUVELHNCQUFXLHNDQUFlO3lCQUExQjt3QkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBQ0wsZ0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELGlDQWtCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNqQkQ7Z0JBa0JJO29CQUtRLGVBQVUsR0FD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QVAsc0JBQU8sQ0FBUCxJQUFPO3dCQUFQLDZCQUFPOztvQkFFdEgsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1RSxJQUFJLGdDQUFnQyxHQUFNLDBCQUEwQixDQUFDO29CQUNyRSxNQUFNLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRWEsK0NBQW9CLEdBQWxDLFVBQW1DLE1BQWE7b0JBRTVDLElBQUksK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLGlFQUErQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqSCxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVhLHNEQUEyQixHQUF6QyxVQUEwQyxhQUF1QjtvQkFFN0QsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsaUVBQStCLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3hILGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0wsaUNBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELG9FQXNCQyxDQUFBIiwiZmlsZSI6InNlY3VyaXR5LWlkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSVByaW5jaXBhbFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIElkZW50aXR5OiBJSWRlbnRpdHk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xyXG4gICAgfSIsImltcG9ydCB7SVByaW5jaXBhbH0gZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWxcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSWRlbnRpdHk/IDpJSWRlbnRpdHksIHB1YmxpYyBBdXRoZW50aWNhdGlvblR5cGUgOnN0cmluZyA9IFwiR2VuZXJpY1wiKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5JZGVudGl0eSAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9JUHJpbmNpcGFsJztcclxuaW1wb3J0IHtQcmluY2lwYWx9IGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0IFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBTZWN1cml0eUNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBDdXJyZW50KCk6IFNlY3VyaXR5Q29udGV4dCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9PT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFJlc2V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5QcmluY2lwYWwgPSBuZXcgUHJpbmNpcGFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9QcmluY2lwYWw6IElQcmluY2lwYWwgPSA8YW55PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgSWRlbnRpdHk6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1ByaW5jaXBhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgUHJpbmNpcGFsKHZhbHVlOiBJUHJpbmNpcGFsKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOklTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSIsImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUGFyc2VkIGltcGxlbWVudHMgSVRva2VuUGFyc2VkXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6c3RyaW5nLCBwdWJsaWMgY29udGVudDpzdHJpbmcsIHB1YmxpYyBzaWduYXR1cmU6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaGVhZGVySlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5oZWFkZXJKU09OO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGNvbnRlbnRKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuY29udGVudEpTT047XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJhc2U2NFxyXG57XHJcbiAgICBzdGF0aWMgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBFbmNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcclxuICAgICAgICBsZXQgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSB0aGlzLmNoYXJzO1xyXG4gICAgICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcclxuICAgICAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxyXG4gICAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcclxuICAgICAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xyXG4gICAgICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XHJcbiAgICAgICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMvNCk7XHJcbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIididG9hJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlIExhdGluMSByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb2RlKHZhbHVlIDpzdHJpbmcpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICAgIGxldCBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDA7XHJcbiAgICAgICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXHJcbiAgICAgICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XHJcbiAgICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xyXG4gICAgICAgIH5idWZmZXIgJiYgKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcixcclxuICAgICAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5jaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7VG9rZW5QYXJzZWR9IGZyb20gJy4vVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnLi4vLi4vVXRpbHMvQmFzZTY0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlblBhcnNlclxyXG57XHJcbiAgICBzdGF0aWMgVE9LRU5fU0VQQVJBVE9SIDpzdHJpbmcgPSBcIi5cIjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbiA6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOlRcclxuICAgIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5TcGxpdHRlZCA9IHRoaXMudG9rZW4uc3BsaXQoVG9rZW5QYXJzZXIuVE9LRU5fU0VQQVJBVE9SKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICAgICAgbGV0IGVuY29kZWRDb250ZW50ID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsxXTtcclxuICAgICAgICBsZXQgZW5jb2RlZFNpZ25hdHVyZSA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZEhlYWRlcik7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRDb250ZW50KTtcclxuICAgICAgICBsZXQgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSBuZXcgVG9rZW5QYXJzZWQoaGVhZGVyLCBjb250ZW50LCBzaWduYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiA8VD50b2tlblBhcnNlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJZGVudGl0eSBpbXBsZW1lbnRzIElJZGVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX0NsYWltcyA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT47XHJcbiAgICAgICAgcHVibGljIGdldCBDbGFpbXMoKSA6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fQ2xhaW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3RvcihDbGFpbXM6IEFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsb3Jlc0ZpbHRyYWRvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmluZEZpcnN0PFQ+KGtleTpzdHJpbmcpOlRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdmFsb3Jlc0ZpbHRyYWRvc1swXTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhcyhrZXk6c3RyaW5nKTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbnNGaWx0cmFkb3MgPSB0aGlzLkNsYWltcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcyAhPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MubGVuZ3RoID4gLTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignbmFtZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9IiwiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElkZW50aXR5RmFjdG9yeVxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc0lJZGVudGl0eTxUIGV4dGVuZHMgSUlkZW50aXR5Pih2YWxvcjogSUlkZW50aXR5IHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0pOiB2YWxvciBpcyBJSWRlbnRpdHkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICg8SUlkZW50aXR5PnZhbG9yKS5DbGFpbXMgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSUlkZW50aXR5Pih1c2VyT3JVc2VyVHlwZT8gOlQgfCB7IG5ldyhDbGFpbXM6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9Pik6IFQgfSwgdG9rZW5zPyA6YW55W10pOlRcclxuICAgIHtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA9IElkZW50aXR5RmFjdG9yeS5HZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMpOyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaWRlbnRpdHkgOklJZGVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgaWYodXNlck9yVXNlclR5cGUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkZW50aXR5ID0gbmV3IElkZW50aXR5KGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoSWRlbnRpdHlGYWN0b3J5LmlzSUlkZW50aXR5KHVzZXJPclVzZXJUeXBlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkgPSB1c2VyT3JVc2VyVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gbmV3IHVzZXJPclVzZXJUeXBlKGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5mb3JFYWNoKChrZXlWYWx1ZVBhaXIpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eS5DbGFpbXMucHVzaChrZXlWYWx1ZVBhaXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPFQ+aWRlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIEdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2VucyA6YW55W10pOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT5cclxuICAgIHtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgOkFycmF5PHtrZXk6c3RyaW5nLHZhbHVlOmFueX0+ID0gbmV3IEFycmF5PHtrZXk6c3RyaW5nLHZhbHVlOmFueX0+KCk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgY2hhdmUgaW4gdG9rZW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRva2VuLmhhc093blByb3BlcnR5KGNoYXZlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsb3IgPSB0b2tlbltjaGF2ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdm9JdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgOiBjaGF2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiB2YWxvclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2goIHZhbG9yICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2goIG5vdm9JdGVtICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlWYWx1ZVBhaXJBcnJheTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHsgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIH0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtUb2tlblBhcnNlcn0gZnJvbSAnLi9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuY29kZWRUb2tlbnMgOnN0cmluZ1tdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRlY29kZWRUb2tlbnNDb250ZW50ID0gdGhpcy5lbmNvZGVkVG9rZW5zLm1hcCgoZW5jb2RlZFRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGVuY29kZWRUb2tlbik7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbkNvbnRlbnQgPSB0b2tlblBhcnNlZC5jb250ZW50SlNPTjtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuQ29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCBkZWNvZGVkVG9rZW5zQ29udGVudCk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7U2VjdXJpdHlDb250ZXh0fSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcblxyXG5pbXBvcnQge0lkZW50aXR5RmFjdG9yeX0gZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnMgOmFueVtdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVzZXJDcmVhdGVkID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShJZGVudGl0eSwgdGhpcy50b2tlbnMpO1xyXG4gICAgICAgIHNlY3VyaXR5Q29udGV4dC5QcmluY2lwYWwuSWRlbnRpdHkgPSB1c2VyQ3JlYXRlZDtcclxuICAgIH1cclxufVxyXG4gICAgIiwiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmltcG9ydCB7U2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcn0gZnJvbSAnLi9TZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcj4odHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOnsgbmV3KC4uLmFyZ3MpOiBUIH0sIC4uLmFyZ3MpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKGFyZ3MpO1xyXG4gICAgICAgIGxldCBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IDxUPnNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgICAgIHJldHVybiBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aFRva2Vucyh0b2tlbnM6IGFueVtdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciwgdG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aEVuY29kZWRUb2tlbnMoZW5jb2RlZFRva2Vuczogc3RyaW5nW10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCBlbmNvZGVkVG9rZW5zKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxufVxyXG4iXX0=
