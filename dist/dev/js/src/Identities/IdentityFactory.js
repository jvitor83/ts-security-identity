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
    // export default IdentityFactory;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFDQSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7SUFFcEMsa0NBQWtDO0lBRWxDO1FBQUE7UUEwREEsQ0FBQztRQXhEZ0IsMkJBQVcsR0FBMUIsVUFBZ0QsS0FFL0M7WUFDQyxNQUFNLENBQWEsS0FBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDakQsQ0FBQztRQUVhLHNCQUFNLEdBQXBCLFVBQTBDLGNBRXpDLEVBQUUsTUFBYztZQUNmLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZFLElBQUksUUFBUSxHQUFjLElBQUksQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsUUFBUSxHQUFHLGNBQWMsQ0FBQztvQkFFMUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTSxDQUFJLFFBQVEsQ0FBQztRQUNyQixDQUFDO1FBRWMsb0NBQW9CLEdBQW5DLFVBQW9DLE1BQWE7WUFDL0MsTUFBTSxHQUFHLE1BQU0sWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBTSxpQkFBaUIsR0FBcUMsSUFBSSxLQUFLLEVBQTZCLENBQUM7WUFFbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFnQixVQUFrQixFQUFsQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLENBQUM7b0JBQWxDLElBQU0sS0FBSyxTQUFBO29CQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzNCLElBQU0sUUFBUSxHQUFHOzRCQUNmLEdBQUcsRUFBRSxLQUFLOzRCQUNWLEtBQUssRUFBRSxLQUFLO3lCQUNiLENBQUM7d0JBRUYsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzNCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ25DLENBQUM7b0JBQ0gsQ0FBQztpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDSCxzQkFBQztJQUFELENBMURBLEFBMERDLElBQUE7SUExRHFCLHVCQUFlLGtCQTBEcEMsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi9JSWRlbnRpdHknO1xyXG5pbXBvcnQge0lkZW50aXR5fSBmcm9tICcuL0lkZW50aXR5JztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IElkZW50aXR5RmFjdG9yeTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZGVudGl0eUZhY3Rvcnkge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpc0lJZGVudGl0eTxUIGV4dGVuZHMgSUlkZW50aXR5Pih2YWxvcjogSUlkZW50aXR5IHwge1xyXG4gICAgbmV3KENsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4pOiBUXHJcbiAgfSk6IHZhbG9yIGlzIElJZGVudGl0eSB7XHJcbiAgICByZXR1cm4gKDxJSWRlbnRpdHk+dmFsb3IpLkNsYWltcyAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElJZGVudGl0eT4odXNlck9yVXNlclR5cGU/OiBUIHwge1xyXG4gICAgbmV3KENsYWltczogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4pOiBUXHJcbiAgfSwgdG9rZW5zPzogYW55W10pOiBUIHtcclxuICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgY29uc3Qga2V5VmFsdWVQYWlyQXJyYXkgPSBJZGVudGl0eUZhY3RvcnkuR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zKTtcclxuXHJcbiAgICBsZXQgaWRlbnRpdHk6IElJZGVudGl0eSA9IG51bGw7XHJcbiAgICBpZiAodXNlck9yVXNlclR5cGUgPT0gbnVsbCkge1xyXG4gICAgICBpZGVudGl0eSA9IG5ldyBJZGVudGl0eShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoSWRlbnRpdHlGYWN0b3J5LmlzSUlkZW50aXR5KHVzZXJPclVzZXJUeXBlKSkge1xyXG4gICAgICAgIGlkZW50aXR5ID0gdXNlck9yVXNlclR5cGU7XHJcblxyXG4gICAgICAgIGtleVZhbHVlUGFpckFycmF5LmZvckVhY2goKGtleVZhbHVlUGFpcikgPT4ge1xyXG4gICAgICAgICAgaWRlbnRpdHkuQ2xhaW1zLnB1c2goa2V5VmFsdWVQYWlyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZGVudGl0eSA9IG5ldyB1c2VyT3JVc2VyVHlwZShrZXlWYWx1ZVBhaXJBcnJheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFQ+aWRlbnRpdHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBHZW5lcmF0ZUtleVZhbHVlUGFpcih0b2tlbnM6IGFueVtdKTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4ge1xyXG4gICAgdG9rZW5zID0gdG9rZW5zIGluc3RhbmNlb2YgQXJyYXkgPyB0b2tlbnMgOiBbdG9rZW5zXTtcclxuXHJcbiAgICBjb25zdCBrZXlWYWx1ZVBhaXJBcnJheTogQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4gPSBuZXcgQXJyYXk8e2tleTogc3RyaW5nLCB2YWx1ZTogYW55fT4oKTtcclxuXHJcbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcclxuICAgICAgZm9yIChjb25zdCBjaGF2ZSBvZiBPYmplY3Qua2V5cyh0b2tlbikpIHtcclxuICAgICAgICBpZiAodG9rZW4uaGFzT3duUHJvcGVydHkoY2hhdmUpKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWxvciA9IHRva2VuW2NoYXZlXTtcclxuICAgICAgICAgIGNvbnN0IG5vdm9JdGVtID0ge1xyXG4gICAgICAgICAgICBrZXk6IGNoYXZlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsb3JcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaCh2YWxvcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5wdXNoKG5vdm9JdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBrZXlWYWx1ZVBhaXJBcnJheTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
