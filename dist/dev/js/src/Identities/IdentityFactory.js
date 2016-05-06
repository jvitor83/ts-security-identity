System.register(['./Identity'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("IdentityFactory", IdentityFactory);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQXlFQSxDQUFDO2dCQXRFa0IsMkJBQVcsR0FBMUIsVUFBZ0QsS0FBd0U7b0JBRXBILE1BQU0sQ0FBYSxLQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFYSxzQkFBTSxHQUFwQixVQUEwQyxjQUEwRSxFQUFFLE1BQWM7b0JBRWhJLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUVyRCxJQUFJLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFHckUsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDO29CQUMvQixFQUFFLENBQUEsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQzFCLENBQUM7d0JBQ0csUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUMvQyxDQUFDO29CQUNELElBQUksQ0FDSixDQUFDO3dCQUNHLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDL0MsQ0FBQzs0QkFDRyxRQUFRLEdBQUcsY0FBYyxDQUFDO3dCQUM5QixDQUFDO3dCQUNELElBQUksQ0FDSixDQUFDOzRCQUNHLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO29CQUNMLENBQUM7b0JBRUQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFFbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBSSxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRWMsb0NBQW9CLEdBQW5DLFVBQW9DLE1BQWE7b0JBRTdDLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUdyRCxJQUFJLGlCQUFpQixHQUFrQyxJQUFJLEtBQUssRUFBMEIsQ0FBQztvQkFFM0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7d0JBRWpCLEdBQUcsQ0FBQSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUN2QixDQUFDOzRCQUNHLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztnQ0FDRyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ3pCLElBQUksUUFBUSxHQUFHO29DQUNYLEdBQUcsRUFBRyxLQUFLO29DQUNYLEtBQUssRUFBRyxLQUFLO2lDQUNoQixDQUFDO2dDQUVGLEVBQUUsQ0FBQSxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FDMUIsQ0FBQztvQ0FDRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7Z0NBQ3BDLENBQUM7Z0NBQ0QsSUFBSSxDQUNKLENBQUM7b0NBQ0csaUJBQWlCLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO2dDQUN2QyxDQUFDOzRCQUNMLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0wsc0JBQUM7WUFBRCxDQXpFQSxBQXlFQyxJQUFBO1lBekVELDZDQXlFQyxDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElkZW50aXR5RmFjdG9yeVxyXG57XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIGlzSUlkZW50aXR5PFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHZhbG9yOiBJSWRlbnRpdHkgfCB7IG5ldyhDbGFpbXM6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9Pik6IFQgfSk6IHZhbG9yIGlzIElJZGVudGl0eSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKDxJSWRlbnRpdHk+dmFsb3IpLkNsYWltcyAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHVzZXJPclVzZXJUeXBlPyA6VCB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9LCB0b2tlbnM/IDphbnlbXSk6VFxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGtleVZhbHVlUGFpckFycmF5ID0gSWRlbnRpdHlGYWN0b3J5LkdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2Vucyk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBpZGVudGl0eSA6SUlkZW50aXR5ID0gbnVsbDtcclxuICAgICAgICBpZih1c2VyT3JVc2VyVHlwZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihJZGVudGl0eUZhY3RvcnkuaXNJSWRlbnRpdHkodXNlck9yVXNlclR5cGUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IHVzZXJPclVzZXJUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBuZXcgdXNlck9yVXNlclR5cGUoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkZW50aXR5LkNsYWltcy5wdXNoKGtleVZhbHVlUGFpcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8VD5pZGVudGl0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zIDphbnlbXSk6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PlxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA6QXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4gPSBuZXcgQXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4oKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjaGF2ZSBpbiB0b2tlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm92b0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA6IGNoYXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggdmFsb3IgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggbm92b0l0ZW0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleVZhbHVlUGFpckFycmF5O1xyXG4gICAgfVxyXG59Il19
