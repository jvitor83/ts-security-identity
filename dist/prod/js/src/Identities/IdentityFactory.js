(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identity_1 = require("./Identity");
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
                for (var _i = 0, _a = Object.keys(token); _i < _a.length; _i++) {
                    var chave = _a[_i];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQ0EsdUNBQW9DO0lBSXBDO1FBQUE7UUEwREEsQ0FBQztRQXhEZ0IsMkJBQVcsR0FBMUIsVUFBZ0QsS0FFL0M7WUFDQyxNQUFNLENBQWEsS0FBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDakQsQ0FBQztRQUVhLHNCQUFNLEdBQXBCLFVBQTBDLGNBRXpDLEVBQUUsTUFBYztZQUNmLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZFLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsUUFBUSxHQUFHLGNBQWMsQ0FBQztvQkFFMUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTSxDQUFJLFFBQVEsQ0FBQztRQUNyQixDQUFDO1FBRWMsb0NBQW9CLEdBQW5DLFVBQW9DLE1BQWE7WUFDL0MsTUFBTSxHQUFHLE1BQU0sWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBTSxpQkFBaUIsR0FBcUMsSUFBSSxLQUFLLEVBQTZCLENBQUM7WUFFbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFnQixVQUFrQixFQUFsQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO29CQUFqQyxJQUFNLEtBQUssU0FBQTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQixJQUFNLFFBQVEsR0FBRzs0QkFDZixHQUFHLEVBQUUsS0FBSzs0QkFDVixLQUFLLEVBQUUsS0FBSzt5QkFDYixDQUFDO3dCQUVGLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04saUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDO29CQUNILENBQUM7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQTFEQSxBQTBEQyxJQUFBO0lBMURxQiwwQ0FBZSIsImZpbGUiOiJJZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4vSWRlbnRpdHknO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHlGYWN0b3J5O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElkZW50aXR5RmFjdG9yeSB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGlzSUlkZW50aXR5PFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHZhbG9yOiBJSWRlbnRpdHkgfCB7XHJcbiAgICBuZXcoQ2xhaW1zOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9Pik6IFRcclxuICB9KTogdmFsb3IgaXMgSUlkZW50aXR5IHtcclxuICAgIHJldHVybiAoPElJZGVudGl0eT52YWxvcikuQ2xhaW1zICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIENyZWF0ZTxUIGV4dGVuZHMgSUlkZW50aXR5Pih1c2VyT3JVc2VyVHlwZT86IFQgfCB7XHJcbiAgICBuZXcoQ2xhaW1zOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9Pik6IFRcclxuICB9LCB0b2tlbnM/OiBhbnlbXSk6IFQge1xyXG4gICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICBjb25zdCBrZXlWYWx1ZVBhaXJBcnJheSA9IElkZW50aXR5RmFjdG9yeS5HZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnMpO1xyXG5cclxuICAgIGxldCBpZGVudGl0eTogSUlkZW50aXR5ID0gbnVsbDtcclxuICAgIGlmICh1c2VyT3JVc2VyVHlwZSA9PSBudWxsKSB7XHJcbiAgICAgIGlkZW50aXR5ID0gbmV3IElkZW50aXR5KGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChJZGVudGl0eUZhY3RvcnkuaXNJSWRlbnRpdHkodXNlck9yVXNlclR5cGUpKSB7XHJcbiAgICAgICAgaWRlbnRpdHkgPSB1c2VyT3JVc2VyVHlwZTtcclxuXHJcbiAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkuZm9yRWFjaCgoa2V5VmFsdWVQYWlyKSA9PiB7XHJcbiAgICAgICAgICBpZGVudGl0eS5DbGFpbXMucHVzaChrZXlWYWx1ZVBhaXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlkZW50aXR5ID0gbmV3IHVzZXJPclVzZXJUeXBlKGtleVZhbHVlUGFpckFycmF5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8VD5pZGVudGl0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIEdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2VuczogYW55W10pOiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiB7XHJcbiAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG5cclxuICAgIGNvbnN0IGtleVZhbHVlUGFpckFycmF5OiBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PiA9IG5ldyBBcnJheTx7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9PigpO1xyXG5cclxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGNoYXZlIG9mIE9iamVjdC5rZXlzKHRva2VuKSkge1xyXG4gICAgICAgIGlmICh0b2tlbi5oYXNPd25Qcm9wZXJ0eShjaGF2ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbG9yID0gdG9rZW5bY2hhdmVdO1xyXG4gICAgICAgICAgY29uc3Qgbm92b0l0ZW0gPSB7XHJcbiAgICAgICAgICAgIGtleTogY2hhdmUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxvclxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKHZhbG9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2gobm92b0l0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGtleVZhbHVlUGFpckFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuIl19
