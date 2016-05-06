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
            exports_1("default",IdentityFactory);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBLG9CQUFlLGVBQWUsRUFBQztZQUUvQjtnQkFBQTtnQkF5RUEsQ0FBQztnQkF0RWtCLDJCQUFXLEdBQTFCLFVBQWdELEtBQXdFO29CQUVwSCxNQUFNLENBQWEsS0FBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7Z0JBQ25ELENBQUM7Z0JBRWEsc0JBQU0sR0FBcEIsVUFBMEMsY0FBMEUsRUFBRSxNQUFjO29CQUVoSSxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFckQsSUFBSSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBR3JFLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQztvQkFDL0IsRUFBRSxDQUFBLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDO3dCQUNHLFFBQVEsR0FBRyxJQUFJLGtCQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0MsQ0FBQztvQkFDRCxJQUFJLENBQ0osQ0FBQzt3QkFDRyxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQy9DLENBQUM7NEJBQ0csUUFBUSxHQUFHLGNBQWMsQ0FBQzt3QkFDOUIsQ0FBQzt3QkFDRCxJQUFJLENBQ0osQ0FBQzs0QkFDRyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDckQsQ0FBQztvQkFDTCxDQUFDO29CQUVELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBRW5DLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUksUUFBUSxDQUFDO2dCQUN2QixDQUFDO2dCQUVjLG9DQUFvQixHQUFuQyxVQUFvQyxNQUFhO29CQUU3QyxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFHckQsSUFBSSxpQkFBaUIsR0FBa0MsSUFBSSxLQUFLLEVBQTBCLENBQUM7b0JBRTNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO3dCQUVqQixHQUFHLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FDdkIsQ0FBQzs0QkFDRyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQy9CLENBQUM7Z0NBQ0csSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUN6QixJQUFJLFFBQVEsR0FBRztvQ0FDWCxHQUFHLEVBQUcsS0FBSztvQ0FDWCxLQUFLLEVBQUcsS0FBSztpQ0FDaEIsQ0FBQztnQ0FFRixFQUFFLENBQUEsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQzFCLENBQUM7b0NBQ0csaUJBQWlCLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO2dDQUNwQyxDQUFDO2dDQUNELElBQUksQ0FDSixDQUFDO29DQUNHLGlCQUFpQixDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQztnQ0FDdkMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixDQUFDO2dCQUNMLHNCQUFDO1lBQUQsQ0F6RUEsQUF5RUMsSUFBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUlkZW50aXR5IGZyb20gJy4vSUlkZW50aXR5JztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHlGYWN0b3J5O1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgSWRlbnRpdHlGYWN0b3J5XHJcbntcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9KTogdmFsb3IgaXMgSUlkZW50aXR5IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/IDpUIHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0sIHRva2Vucz8gOmFueVtdKTpUXHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlkZW50aXR5IDpJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHVzZXJPclVzZXJUeXBlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkuZm9yRWFjaCgoa2V5VmFsdWVQYWlyKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWRlbnRpdHkuQ2xhaW1zLnB1c2goa2V5VmFsdWVQYWlyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxUPmlkZW50aXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMgOmFueVtdKTpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+XHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGtleVZhbHVlUGFpckFycmF5IDpBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PiA9IG5ldyBBcnJheTx7a2V5OnN0cmluZyx2YWx1ZTphbnl9PigpOyBcclxuICAgICAgICBcclxuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGNoYXZlIGluIHRva2VuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0b2tlbi5oYXNPd25Qcm9wZXJ0eShjaGF2ZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbG9yID0gdG9rZW5bY2hhdmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3ZvSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5IDogY2hhdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogdmFsb3JcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCB2YWxvciApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKCBub3ZvSXRlbSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWVQYWlyQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
