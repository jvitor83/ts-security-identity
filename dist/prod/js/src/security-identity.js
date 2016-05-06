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
            exports_2("default",IPrincipal);
            IPrincipal = (function () {
                function IPrincipal() {
                }
                return IPrincipal;
            }());
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
            exports_3("default",Principal);
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
            exports_4("default",SecurityContext);
            SecurityContext = (function () {
                function SecurityContext() {
                    this._Principal = {
                        IsAuthenticated: false,
                        Identity: null
                    };
                    this.Principal = new Principal_1.default();
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
            exports_10("default",TokenParsed);
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
            exports_11("default",Base64);
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
            exports_12("default",TokenParser);
            TokenParser = (function () {
                function TokenParser(token) {
                    this.token = token;
                }
                TokenParser.prototype.Parse = function () {
                    var accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
                    var encodedHeader = accessTokenSplitted[0];
                    var encodedContent = accessTokenSplitted[1];
                    var encodedSignature = accessTokenSplitted[2];
                    var header = Base64_1.default.Decode(encodedHeader);
                    var content = Base64_1.default.Decode(encodedContent);
                    var signature = Base64_1.default.Decode(encodedSignature);
                    var tokenParsed = new TokenParsed_1.default(header, content, signature);
                    return tokenParsed;
                };
                TokenParser.TOKEN_SEPARATOR = ".";
                return TokenParser;
            }());
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
            exports_13("default",Identity);
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
            exports_14("default",IdentityFactory);
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
                        identity = new Identity_1.default(keyValuePairArray);
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
            exports_15("default",SecurityContextEncodedTokenInitializer);
            SecurityContextEncodedTokenInitializer = (function () {
                function SecurityContextEncodedTokenInitializer(encodedTokens) {
                    this.encodedTokens = encodedTokens;
                }
                SecurityContextEncodedTokenInitializer.prototype.Initialize = function (securityContext) {
                    var decodedTokensContent = this.encodedTokens.map(function (encodedToken) {
                        var tokenParser = new TokenParser_1.default(encodedToken);
                        var tokenParsed = tokenParser.Parse();
                        var tokenContent = tokenParsed.contentJSON;
                        return tokenContent;
                    });
                    var userCreated = IdentityFactory_1.default.Create(Identity_2.default, decodedTokensContent);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextEncodedTokenInitializer;
            }());
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
            exports_16("default",SecurityContextTokenInitializer);
            SecurityContextTokenInitializer = (function () {
                function SecurityContextTokenInitializer(tokens) {
                    this.tokens = tokens;
                }
                SecurityContextTokenInitializer.prototype.Initialize = function (securityContext) {
                    var userCreated = IdentityFactory_2.default.Create(Identity_3.default, this.tokens);
                    securityContext.Principal.Identity = userCreated;
                };
                return SecurityContextTokenInitializer;
            }());
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
            exports_17("default",SecurityContextInitializer);
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
                    var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.default, tokens);
                    SecurityContext_1.default.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.default.Current;
                };
                SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
                    var securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer_1.default, encodedTokens);
                    SecurityContext_1.default.Current.Init(securityContextTokenInitializer);
                    return SecurityContext_1.default.Current;
                };
                return SecurityContextInitializer;
            }());
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSVByaW5jaXBhbC50cyIsIklkZW50aXRpZXMvUHJpbmNpcGFsLnRzIiwiU2VjdXJpdHlDb250ZXh0LnRzIiwiVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQudHMiLCJVdGlscy9CYXNlNjQudHMiLCJUb2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlci50cyIsIklkZW50aXRpZXMvSWRlbnRpdHkudHMiLCJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyIsIlNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyLnRzIiwiU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci50cyIsIlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxvQkFBZSxVQUFVLEVBQUM7WUFFMUI7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFBRCxpQkFBQztZQUFELENBUEEsQUFPQyxJQUFBOzs7Ozs7Ozs7OztZQ1JELG9CQUFlLFNBQVMsRUFBQztZQUV6QjtnQkFFSSxtQkFBbUIsUUFBb0IsRUFBUyxrQkFBc0M7b0JBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7b0JBQW5FLGFBQVEsR0FBUixRQUFRLENBQVk7b0JBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtnQkFHdEYsQ0FBQztnQkFFRCxzQkFBVyxzQ0FBZTt5QkFBMUI7d0JBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FDMUIsQ0FBQzs0QkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNoQixDQUFDO3dCQUNELElBQUksQ0FDSixDQUFDOzRCQUNHLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLENBQUM7b0JBQ0wsQ0FBQzs7O21CQUFBO2dCQUNMLGdCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTs7Ozs7Ozs7Ozs7Ozs7O1lDbkJELG9CQUFlLGVBQWUs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Z0JBQUE7Z0JBc0JBLENBQUM7Z0JBcEJpQixpQ0FBTSxHQUFwQixVQUE0RCxnQ0FBcUQ7b0JBQUUsY0FBTzt5QkFBUCxXQUFPLENBQVAsc0JBQU8sQ0FBUCxJQUFPO3dCQUFQLDZCQUFPOztvQkFFdEgsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1RSxJQUFJLGdDQUFnQyxHQUFNLDBCQUEwQixDQUFDO29CQUNyRSxNQUFNLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRWEsK0NBQW9CLEdBQWxDLFVBQW1DLE1BQWE7b0JBRTVDLElBQUksK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLHlDQUErQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqSCx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLHlCQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVhLHNEQUEyQixHQUF6QyxVQUEwQyxhQUF1QjtvQkFFN0QsSUFBSSwrQkFBK0IsR0FBRywwQkFBMEIsQ0FBQyxNQUFNLENBQUMseUNBQStCLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3hILHlCQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMseUJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0wsaUNBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6InNlY3VyaXR5LWlkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElJZGVudGl0eSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJUHJpbmNpcGFsO1xyXG5cclxuY2xhc3MgSVByaW5jaXBhbFxyXG57XHJcbiAgICBcclxuICAgIElkZW50aXR5OiBJSWRlbnRpdHk7XHJcbiAgICBcclxuICAgIElzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIEF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xyXG59IiwiaW1wb3J0IElQcmluY2lwYWwgZnJvbSAnLi9JUHJpbmNpcGFsJztcclxuaW1wb3J0IElJZGVudGl0eSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmluY2lwYWw7XHJcblxyXG5jbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBJZGVudGl0eT8gOklJZGVudGl0eSwgcHVibGljIEF1dGhlbnRpY2F0aW9uVHlwZSA6c3RyaW5nID0gXCJHZW5lcmljXCIpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IElzQXV0aGVudGljYXRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuSWRlbnRpdHkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IElQcmluY2lwYWwgZnJvbSAnLi9JZGVudGl0aWVzL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQgUHJpbmNpcGFsIGZyb20gJy4vSWRlbnRpdGllcy9QcmluY2lwYWwnO1xyXG5pbXBvcnQgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dDtcclxuXHJcbmNsYXNzIFNlY3VyaXR5Q29udGV4dCBcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IFNlY3VyaXR5Q29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3VycmVudCgpOiBTZWN1cml0eUNvbnRleHQgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gIG5ldyBTZWN1cml0eUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1ByaW5jaXBhbDogSVByaW5jaXBhbCA9IDxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgSXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICBJZGVudGl0eTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFByaW5jaXBhbCgpOiBJUHJpbmNpcGFsIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBQcmluY2lwYWwodmFsdWU6IElQcmluY2lwYWwpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX1ByaW5jaXBhbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDpJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuSW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJVG9rZW5QYXJzZWQgZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQgSVRva2VuSGVhZGVyIGZyb20gJy4uL0lUb2tlbkhlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlblBhcnNlZDtcclxuXHJcbmNsYXNzIFRva2VuUGFyc2VkIGltcGxlbWVudHMgSVRva2VuUGFyc2VkXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6c3RyaW5nLCBwdWJsaWMgY29udGVudDpzdHJpbmcsIHB1YmxpYyBzaWduYXR1cmU6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaGVhZGVySlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5oZWFkZXJKU09OO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGNvbnRlbnRKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuY29udGVudEpTT047XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cclxuY2xhc3MgQmFzZTY0XHJcbntcclxuICAgIHN0YXRpYyBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEVuY29kZSh2YWx1ZSA6c3RyaW5nKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxyXG4gICAgICAgIGxldCBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IHRoaXMuY2hhcnM7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxyXG4gICAgICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXHJcbiAgICAgICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xyXG4gICAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XHJcbiAgICAgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcclxuICAgICAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMy80KTtcclxuICAgICAgICAgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2J0b2EnIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgTGF0aW4xIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLz0rJC8sICcnKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXHJcbiAgICAgICAgbGV0IGJjID0gMCwgYnMsIGJ1ZmZlciwgaWR4ID0gMDtcclxuICAgICAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcclxuICAgICAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcclxuICAgICAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XHJcbiAgICAgICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxyXG4gICAgICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IElUb2tlblBhcnNlZCBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCBUb2tlblBhcnNlZCBmcm9tICcuL1Rva2VuUGFyc2VkJztcclxuaW1wb3J0IEJhc2U2NCBmcm9tICcuLi8uLi9VdGlscy9CYXNlNjQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZXI7XHJcblxyXG5jbGFzcyBUb2tlblBhcnNlclxyXG57XHJcbiAgICBzdGF0aWMgVE9LRU5fU0VQQVJBVE9SIDpzdHJpbmcgPSBcIi5cIjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbiA6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBQYXJzZTxUIGV4dGVuZHMgSVRva2VuUGFyc2VkPigpOlRcclxuICAgIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5TcGxpdHRlZCA9IHRoaXMudG9rZW4uc3BsaXQoVG9rZW5QYXJzZXIuVE9LRU5fU0VQQVJBVE9SKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZW5jb2RlZEhlYWRlciA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMF07XHJcbiAgICAgICAgbGV0IGVuY29kZWRDb250ZW50ID0gYWNjZXNzVG9rZW5TcGxpdHRlZFsxXTtcclxuICAgICAgICBsZXQgZW5jb2RlZFNpZ25hdHVyZSA9IGFjY2Vzc1Rva2VuU3BsaXR0ZWRbMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IEJhc2U2NC5EZWNvZGUoZW5jb2RlZEhlYWRlcik7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBCYXNlNjQuRGVjb2RlKGVuY29kZWRDb250ZW50KTtcclxuICAgICAgICBsZXQgc2lnbmF0dXJlID0gQmFzZTY0LkRlY29kZShlbmNvZGVkU2lnbmF0dXJlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSBuZXcgVG9rZW5QYXJzZWQoaGVhZGVyLCBjb250ZW50LCBzaWduYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiA8VD50b2tlblBhcnNlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSUlkZW50aXR5IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElkZW50aXR5O1xyXG5cclxuY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxue1xyXG4gICAgcHJpdmF0ZSBfQ2xhaW1zIDogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PjtcclxuICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DbGFpbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKENsYWltczogQXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PikgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fQ2xhaW1zID0gQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kPFQ+KGtleTpzdHJpbmcpOiBBcnJheTxUPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgbGV0IHZhbG9yZXNGaWx0cmFkb3MgPSBpdGVuc0ZpbHRyYWRvcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWxvcmVzRmlsdHJhZG9zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5kRmlyc3Q8VD4oa2V5OnN0cmluZyk6VFxyXG4gICAge1xyXG4gICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gdGhpcy5maW5kPFQ+KGtleSk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWxvcmVzRmlsdHJhZG9zWzBdO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MgIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpdGVuc0ZpbHRyYWRvcy5sZW5ndGggPiAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IE5hbWUoKSA6IHN0cmluZyBcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufSIsImltcG9ydCBJSWRlbnRpdHkgZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJZGVudGl0eUZhY3Rvcnk7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBJZGVudGl0eUZhY3Rvcnlcclxue1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc0lJZGVudGl0eTxUIGV4dGVuZHMgSUlkZW50aXR5Pih2YWxvcjogSUlkZW50aXR5IHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0pOiB2YWxvciBpcyBJSWRlbnRpdHkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICg8SUlkZW50aXR5PnZhbG9yKS5DbGFpbXMgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSUlkZW50aXR5Pih1c2VyT3JVc2VyVHlwZT8gOlQgfCB7IG5ldyhDbGFpbXM6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9Pik6IFQgfSwgdG9rZW5zPyA6YW55W10pOlRcclxuICAgIHtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA9IElkZW50aXR5RmFjdG9yeS5HZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMpOyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaWRlbnRpdHkgOklJZGVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgaWYodXNlck9yVXNlclR5cGUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkZW50aXR5ID0gbmV3IElkZW50aXR5KGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoSWRlbnRpdHlGYWN0b3J5LmlzSUlkZW50aXR5KHVzZXJPclVzZXJUeXBlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkgPSB1c2VyT3JVc2VyVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gbmV3IHVzZXJPclVzZXJUeXBlKGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5mb3JFYWNoKChrZXlWYWx1ZVBhaXIpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eS5DbGFpbXMucHVzaChrZXlWYWx1ZVBhaXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPFQ+aWRlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIEdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2VucyA6YW55W10pOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT5cclxuICAgIHtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgOkFycmF5PHtrZXk6c3RyaW5nLHZhbHVlOmFueX0+ID0gbmV3IEFycmF5PHtrZXk6c3RyaW5nLHZhbHVlOmFueX0+KCk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgY2hhdmUgaW4gdG9rZW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRva2VuLmhhc093blByb3BlcnR5KGNoYXZlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsb3IgPSB0b2tlbltjaGF2ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdm9JdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgOiBjaGF2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiB2YWxvclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2goIHZhbG9yICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2goIG5vdm9JdGVtICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlWYWx1ZVBhaXJBcnJheTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFNlY3VyaXR5Q29udGV4dCBmcm9tICcuL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IFRva2VuUGFyc2VyIGZyb20gJy4vVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXInO1xyXG5pbXBvcnQgSWRlbnRpdHlGYWN0b3J5IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyO1xyXG5cclxuY2xhc3MgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuY29kZWRUb2tlbnMgOnN0cmluZ1tdKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXRpYWxpemUoc2VjdXJpdHlDb250ZXh0IDpTZWN1cml0eUNvbnRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRlY29kZWRUb2tlbnNDb250ZW50ID0gdGhpcy5lbmNvZGVkVG9rZW5zLm1hcCgoZW5jb2RlZFRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGVuY29kZWRUb2tlbik7XHJcbiAgICAgICAgICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbkNvbnRlbnQgPSB0b2tlblBhcnNlZC5jb250ZW50SlNPTjtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuQ29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCBkZWNvZGVkVG9rZW5zQ29udGVudCk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTZWN1cml0eUNvbnRleHQgZnJvbSAnLi9TZWN1cml0eUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IElkZW50aXR5RmFjdG9yeSBmcm9tICcuL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyO1xyXG5cclxuY2xhc3MgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciBpbXBsZW1lbnRzIFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXJcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRva2VucyA6YW55W10pIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdGlhbGl6ZShzZWN1cml0eUNvbnRleHQgOlNlY3VyaXR5Q29udGV4dClcclxuICAgIHtcclxuICAgICAgICBsZXQgdXNlckNyZWF0ZWQgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKElkZW50aXR5LCB0aGlzLnRva2Vucyk7XHJcbiAgICAgICAgc2VjdXJpdHlDb250ZXh0LlByaW5jaXBhbC5JZGVudGl0eSA9IHVzZXJDcmVhdGVkO1xyXG4gICAgfVxyXG59XHJcbiAgICAiLCJpbXBvcnQgU2VjdXJpdHlDb250ZXh0IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuaW1wb3J0IElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciBmcm9tICcuL0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyPih0eXBlT2ZTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA6eyBuZXcoLi4uYXJncyk6IFQgfSwgLi4uYXJncyk6IFRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgdHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIoYXJncyk7XHJcbiAgICAgICAgbGV0IGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gPFQ+c2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcbiAgICAgICAgcmV0dXJuIGNhc3RlZFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoVG9rZW5zKHRva2VuczogYW55W10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCB0b2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEluaXRpYWxpemVXaXRoRW5jb2RlZFRva2VucyhlbmNvZGVkVG9rZW5zOiBzdHJpbmdbXSk6IFNlY3VyaXR5Q29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyID0gU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIuQ3JlYXRlKFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIsIGVuY29kZWRUb2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcik7XHJcbiAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
