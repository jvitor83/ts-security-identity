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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUNBLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtJQUlwQztRQUFBO1FBMERBLENBQUM7UUF4RGdCLDJCQUFXLEdBQTFCLFVBQWdELEtBRS9DO1lBQ0MsTUFBTSxDQUFhLEtBQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1FBQ2pELENBQUM7UUFFYSxzQkFBTSxHQUFwQixVQUEwQyxjQUV6QyxFQUFFLE1BQWM7WUFDZixNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRCxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2RSxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELFFBQVEsR0FBRyxjQUFjLENBQUM7b0JBRTFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBQ3JDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sQ0FBSSxRQUFRLENBQUM7UUFDckIsQ0FBQztRQUVjLG9DQUFvQixHQUFuQyxVQUFvQyxNQUFhO1lBQy9DLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELElBQU0saUJBQWlCLEdBQXFDLElBQUksS0FBSyxFQUE2QixDQUFDO1lBRW5HLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNuQixHQUFHLENBQUMsQ0FBZ0IsVUFBa0IsRUFBbEIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFsQixjQUFrQixFQUFsQixJQUFrQixDQUFDO29CQUFsQyxJQUFNLEtBQUssU0FBQTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQixJQUFNLFFBQVEsR0FBRzs0QkFDZixHQUFHLEVBQUUsS0FBSzs0QkFDVixLQUFLLEVBQUUsS0FBSzt5QkFDYixDQUFDO3dCQUVGLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04saUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDO29CQUNILENBQUM7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQTFEQSxBQTBEQyxJQUFBO0lBMURxQix1QkFBZSxrQkEwRHBDLENBQUEiLCJmaWxlIjoiSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IElkZW50aXR5RmFjdG9yeTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZGVudGl0eUZhY3Rvcnkge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpc0lJZGVudGl0eTxUIGV4dGVuZHMgSUlkZW50aXR5Pih2YWxvcjogSUlkZW50aXR5IHwge1xyXG4gICAgbmV3KENsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4pOiBUXHJcbiAgfSk6IHZhbG9yIGlzIElJZGVudGl0eSB7XHJcbiAgICByZXR1cm4gKDxJSWRlbnRpdHk+dmFsb3IpLkNsYWltcyAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/OiBUIHwge1xyXG4gICAgbmV3KENsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4pOiBUXHJcbiAgfSwgdG9rZW5zPzogYW55W10pOiBUIHtcclxuICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgY29uc3Qga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTtcclxuXHJcbiAgICBsZXQgaWRlbnRpdHk6IElJZGVudGl0eSA9IG51bGw7XHJcbiAgICBpZiAodXNlck9yVXNlclR5cGUgPT0gbnVsbCkge1xyXG4gICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoSWRlbnRpdHlGYWN0b3J5LmlzSUlkZW50aXR5KHVzZXJPclVzZXJUeXBlKSkge1xyXG4gICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcblxyXG4gICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT4ge1xyXG4gICAgICAgICAgaWRlbnRpdHkuQ2xhaW1zLnB1c2goa2V5VmFsdWVQYWlyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFQ+aWRlbnRpdHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnM6IGFueVtdKTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4ge1xyXG4gICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICBjb25zdCBrZXlWYWx1ZVBhaXJBcnJheTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4gPSBuZXcgQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4oKTtcclxuXHJcbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcclxuICAgICAgZm9yIChjb25zdCBjaGF2ZSBvZiBPYmplY3Qua2V5cyh0b2tlbikpIHtcclxuICAgICAgICBpZiAodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgIGNvbnN0IG5vdm9JdGVtID0ge1xyXG4gICAgICAgICAgICBrZXk6IGNoYXZlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsb3JcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCh2YWxvcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKG5vdm9JdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBrZXlWYWx1ZVBhaXJBcnJheTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
