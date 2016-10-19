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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUNBLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtJQUlwQztRQUFBO1FBeUVBLENBQUM7UUF0RWtCLDJCQUFXLEdBQTFCLFVBQWdELEtBQXdFO1lBRXBILE1BQU0sQ0FBYSxLQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztRQUNuRCxDQUFDO1FBRWEsc0JBQU0sR0FBcEIsVUFBMEMsY0FBMEUsRUFBRSxNQUFjO1lBRWhJLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELElBQUksaUJBQWlCLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBR3JFLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQztZQUMvQixFQUFFLENBQUEsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQzFCLENBQUM7Z0JBQ0csUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFDRCxJQUFJLENBQ0osQ0FBQztnQkFDRyxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQy9DLENBQUM7b0JBQ0csUUFBUSxHQUFHLGNBQWMsQ0FBQztvQkFFMUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFFbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsSUFBSSxDQUNKLENBQUM7b0JBQ0csUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3JELENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFJLFFBQVEsQ0FBQztRQUN2QixDQUFDO1FBRWMsb0NBQW9CLEdBQW5DLFVBQW9DLE1BQWE7WUFFN0MsTUFBTSxHQUFHLE1BQU0sWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHckQsSUFBSSxpQkFBaUIsR0FBa0MsSUFBSSxLQUFLLEVBQTBCLENBQUM7WUFFM0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBRWpCLEdBQUcsQ0FBQSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUN2QixDQUFDO29CQUNHLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0IsQ0FBQzt3QkFDRyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pCLElBQUksUUFBUSxHQUFHOzRCQUNYLEdBQUcsRUFBRyxLQUFLOzRCQUNYLEtBQUssRUFBRyxLQUFLO3lCQUNoQixDQUFDO3dCQUVGLEVBQUUsQ0FBQSxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FDMUIsQ0FBQzs0QkFDRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7d0JBQ3BDLENBQUM7d0JBQ0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csaUJBQWlCLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO3dCQUN2QyxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQzdCLENBQUM7UUFDTCxzQkFBQztJQUFELENBekVBLEFBeUVDLElBQUE7SUF6RXFCLHVCQUFlLGtCQXlFcEMsQ0FBQSIsImZpbGUiOiJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJZGVudGl0eUZhY3Rvcnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWRlbnRpdHlGYWN0b3J5XHJcbntcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHsgbmV3KENsYWltczpBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KTogVCB9KTogdmFsb3IgaXMgSUlkZW50aXR5IFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/IDpUIHwgeyBuZXcoQ2xhaW1zOkFycmF5PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkgfT4pOiBUIH0sIHRva2Vucz8gOmFueVtdKTpUXHJcbiAgICB7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlkZW50aXR5IDpJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmKHVzZXJPclVzZXJUeXBlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5DbGFpbXMucHVzaChrZXlWYWx1ZVBhaXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8VD5pZGVudGl0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zIDphbnlbXSk6QXJyYXk8eyBrZXk6IHN0cmluZywgdmFsdWU6IGFueSB9PlxyXG4gICAge1xyXG4gICAgICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBrZXlWYWx1ZVBhaXJBcnJheSA6QXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4gPSBuZXcgQXJyYXk8e2tleTpzdHJpbmcsdmFsdWU6YW55fT4oKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjaGF2ZSBpbiB0b2tlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm92b0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA6IGNoYXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggdmFsb3IgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCggbm92b0l0ZW0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleVZhbHVlUGFpckFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
