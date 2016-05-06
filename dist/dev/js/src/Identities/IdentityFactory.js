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
            //export default IdentityFactory;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBLGlDQUFpQztZQUVqQztnQkFBQTtnQkF5RUEsQ0FBQztnQkF0RWtCLDJCQUFXLEdBQTFCLFVBQWdELEtBQXdFO29CQUVwSCxNQUFNLENBQWEsS0FBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7Z0JBQ25ELENBQUM7Z0JBRWEsc0JBQU0sR0FBcEIsVUFBMEMsY0FBMEUsRUFBRSxNQUFjO29CQUVoSSxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFckQsSUFBSSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBR3JFLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQztvQkFDL0IsRUFBRSxDQUFBLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDO3dCQUNHLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0MsQ0FBQztvQkFDRCxJQUFJLENBQ0osQ0FBQzt3QkFDRyxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQy9DLENBQUM7NEJBQ0csUUFBUSxHQUFHLGNBQWMsQ0FBQzt3QkFDOUIsQ0FBQzt3QkFDRCxJQUFJLENBQ0osQ0FBQzs0QkFDRyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDckQsQ0FBQztvQkFDTCxDQUFDO29CQUVELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBRW5DLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUksUUFBUSxDQUFDO2dCQUN2QixDQUFDO2dCQUVjLG9DQUFvQixHQUFuQyxVQUFvQyxNQUFhO29CQUU3QyxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFHckQsSUFBSSxpQkFBaUIsR0FBa0MsSUFBSSxLQUFLLEVBQTBCLENBQUM7b0JBRTNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO3dCQUVqQixHQUFHLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FDdkIsQ0FBQzs0QkFDRyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQy9CLENBQUM7Z0NBQ0csSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUN6QixJQUFJLFFBQVEsR0FBRztvQ0FDWCxHQUFHLEVBQUcsS0FBSztvQ0FDWCxLQUFLLEVBQUcsS0FBSztpQ0FDaEIsQ0FBQztnQ0FFRixFQUFFLENBQUEsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQzFCLENBQUM7b0NBQ0csaUJBQWlCLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO2dDQUNwQyxDQUFDO2dDQUNELElBQUksQ0FDSixDQUFDO29DQUNHLGlCQUFpQixDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQztnQ0FDdkMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixDQUFDO2dCQUNMLHNCQUFDO1lBQUQsQ0F6RUEsQUF5RUMsSUFBQTtZQXpFRCw2Q0F5RUMsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHlGYWN0b3J5O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElkZW50aXR5RmFjdG9yeVxyXG57XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIGlzSUlkZW50aXR5PFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHZhbG9yOiBJSWRlbnRpdHkgfCB7IG5ldyhDbGFpbXM6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9Pik6IFQgfSk6IHZhbG9yIGlzIElJZGVudGl0eSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKDxJSWRlbnRpdHk+dmFsb3IpLkNsYWltcyAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHVzZXJPclVzZXJUeXBlPyA6VCB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9LCB0b2tlbnM/IDphbnlbXSk6VFxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGtleVZhbHVlUGFpckFycmF5ID0gSWRlbnRpdHlGYWN0b3J5LkdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2Vucyk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBpZGVudGl0eSA6SUlkZW50aXR5ID0gbnVsbDtcclxuICAgICAgICBpZih1c2VyT3JVc2VyVHlwZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihJZGVudGl0eUZhY3RvcnkuaXNJSWRlbnRpdHkodXNlck9yVXNlclR5cGUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IHVzZXJPclVzZXJUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBuZXcgdXNlck9yVXNlclR5cGUoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkZW50aXR5LkNsYWltcy5wdXNoKGtleVZhbHVlUGFpcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8VD5pZGVudGl0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zIDphbnlbXSk6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PlxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA6QXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4gPSBuZXcgQXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4oKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjaGF2ZSBpbiB0b2tlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm92b0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA6IGNoYXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggdmFsb3IgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggbm92b0l0ZW0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleVZhbHVlUGFpckFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
