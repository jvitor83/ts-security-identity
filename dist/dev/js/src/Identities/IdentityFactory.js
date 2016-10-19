(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './Identity'], factory);
    }
})(function (require, exports) {
    "use strict";
    var Identity_1 = require('./Identity');
    //export default IdentityFactory;
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
                    keyValuePairArray.forEach(function (keyValuePair) {
                        identity.Claims.push(keyValuePair);
                    });
                }
                else {
                    identity = new userOrUserType(keyValuePairArray);
                }
            }
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFDQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7SUFFcEMsaUNBQWlDO0lBRWpDO1FBQUE7UUF5RUEsQ0FBQztRQXRFa0IsMkJBQVcsR0FBMUIsVUFBZ0QsS0FBd0U7WUFFcEgsTUFBTSxDQUFhLEtBQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1FBQ25ELENBQUM7UUFFYSxzQkFBTSxHQUFwQixVQUEwQyxjQUEwRSxFQUFFLE1BQWM7WUFFaEksTUFBTSxHQUFHLE1BQU0sWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBSSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHckUsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDO1lBQy9CLEVBQUUsQ0FBQSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsQ0FDMUIsQ0FBQztnQkFDRyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNHLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztvQkFDRyxRQUFRLEdBQUcsY0FBYyxDQUFDO29CQUUxQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO3dCQUVuQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxJQUFJLENBQ0osQ0FBQztvQkFDRyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDckQsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUksUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFFYyxvQ0FBb0IsR0FBbkMsVUFBb0MsTUFBYTtZQUU3QyxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUdyRCxJQUFJLGlCQUFpQixHQUFrQyxJQUFJLEtBQUssRUFBMEIsQ0FBQztZQUUzRixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFFakIsR0FBRyxDQUFBLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLENBQ3ZCLENBQUM7b0JBQ0csRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQixDQUFDO3dCQUNHLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxRQUFRLEdBQUc7NEJBQ1gsR0FBRyxFQUFHLEtBQUs7NEJBQ1gsS0FBSyxFQUFHLEtBQUs7eUJBQ2hCLENBQUM7d0JBRUYsRUFBRSxDQUFBLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUMxQixDQUFDOzRCQUNHLGlCQUFpQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQzt3QkFDcEMsQ0FBQzt3QkFDRCxJQUFJLENBQ0osQ0FBQzs0QkFDRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFFLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDN0IsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0F6RUEsQUF5RUMsSUFBQTtJQXpFcUIsdUJBQWUsa0JBeUVwQyxDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eUZhY3Rvcnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWRlbnRpdHlGYWN0b3J5XHJcbntcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9KTogdmFsb3IgaXMgSUlkZW50aXR5IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/IDpUIHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0sIHRva2Vucz8gOmFueVtdKTpUXHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlkZW50aXR5IDpJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHVzZXJPclVzZXJUeXBlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5DbGFpbXMucHVzaChrZXlWYWx1ZVBhaXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8VD5pZGVudGl0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zIDphbnlbXSk6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PlxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA6QXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4gPSBuZXcgQXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4oKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjaGF2ZSBpbiB0b2tlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm92b0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA6IGNoYXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggdmFsb3IgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggbm92b0l0ZW0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleVZhbHVlUGFpckFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
