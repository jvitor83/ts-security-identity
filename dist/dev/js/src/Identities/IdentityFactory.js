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
    // export default IdentityFactory;
    var IdentityFactory = /** @class */ (function () {
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
            var keyValuePairArray = [];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUNBLHVDQUFvQztJQUVwQyxrQ0FBa0M7SUFFbEM7UUFBQTtRQTBEQSxDQUFDO1FBeERnQiwyQkFBVyxHQUExQixVQUFnRCxLQUUvQztZQUNDLE1BQU0sQ0FBYSxLQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztRQUNqRCxDQUFDO1FBRWEsc0JBQU0sR0FBcEIsVUFBMEMsY0FFekMsRUFBRSxNQUFjO1lBQ2YsTUFBTSxHQUFHLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRCxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2RSxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELFFBQVEsR0FBRyxjQUFjLENBQUM7b0JBRTFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBQ3JDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sQ0FBSSxRQUFRLENBQUM7UUFDckIsQ0FBQztRQUVjLG9DQUFvQixHQUFuQyxVQUFvQyxNQUFhO1lBQy9DLE1BQU0sR0FBRyxNQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBTSxpQkFBaUIsR0FBcUMsRUFBRSxDQUFDO1lBRS9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNuQixHQUFHLENBQUMsQ0FBZ0IsVUFBa0IsRUFBbEIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtvQkFBakMsSUFBTSxLQUFLLFNBQUE7b0JBQ2QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0IsSUFBTSxRQUFRLEdBQUc7NEJBQ2YsR0FBRyxFQUFFLEtBQUs7NEJBQ1YsS0FBSyxFQUFFLEtBQUs7eUJBQ2IsQ0FBQzt3QkFFRixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQztvQkFDSCxDQUFDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNILHNCQUFDO0lBQUQsQ0ExREEsQUEwREMsSUFBQTtJQTFEcUIsMENBQWUiLCJmaWxlIjoic3JjL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi9JZGVudGl0eSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJZGVudGl0eUZhY3Rvcnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWRlbnRpdHlGYWN0b3J5IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaXNJSWRlbnRpdHk8VCBleHRlbmRzIElJZGVudGl0eT4odmFsb3I6IElJZGVudGl0eSB8IHtcclxuICAgIG5ldyhDbGFpbXM6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+KTogVFxyXG4gIH0pOiB2YWxvciBpcyBJSWRlbnRpdHkge1xyXG4gICAgcmV0dXJuICg8SUlkZW50aXR5PnZhbG9yKS5DbGFpbXMgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgQ3JlYXRlPFQgZXh0ZW5kcyBJSWRlbnRpdHk+KHVzZXJPclVzZXJUeXBlPzogVCB8IHtcclxuICAgIG5ldyhDbGFpbXM6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+KTogVFxyXG4gIH0sIHRva2Vucz86IGFueVtdKTogVCB7XHJcbiAgICB0b2tlbnMgPSB0b2tlbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRva2VucyA6IFt0b2tlbnNdO1xyXG5cclxuICAgIGNvbnN0IGtleVZhbHVlUGFpckFycmF5ID0gSWRlbnRpdHlGYWN0b3J5LkdlbmVyYXRlS2V5VmFsdWVQYWlyKHRva2Vucyk7XHJcblxyXG4gICAgbGV0IGlkZW50aXR5OiBJSWRlbnRpdHkgPSBudWxsO1xyXG4gICAgaWYgKHVzZXJPclVzZXJUeXBlID09IG51bGwpIHtcclxuICAgICAgaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKElkZW50aXR5RmFjdG9yeS5pc0lJZGVudGl0eSh1c2VyT3JVc2VyVHlwZSkpIHtcclxuICAgICAgICBpZGVudGl0eSA9IHVzZXJPclVzZXJUeXBlO1xyXG5cclxuICAgICAgICBrZXlWYWx1ZVBhaXJBcnJheS5mb3JFYWNoKChrZXlWYWx1ZVBhaXIpID0+IHtcclxuICAgICAgICAgIGlkZW50aXR5LkNsYWltcy5wdXNoKGtleVZhbHVlUGFpcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWRlbnRpdHkgPSBuZXcgdXNlck9yVXNlclR5cGUoa2V5VmFsdWVQYWlyQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxUPmlkZW50aXR5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgR2VuZXJhdGVLZXlWYWx1ZVBhaXIodG9rZW5zOiBhbnlbXSk6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+IHtcclxuICAgIHRva2VucyA9IHRva2VucyBpbnN0YW5jZW9mIEFycmF5ID8gdG9rZW5zIDogW3Rva2Vuc107XHJcblxyXG4gICAgY29uc3Qga2V5VmFsdWVQYWlyQXJyYXk6IEFycmF5PHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0+ID0gW107XHJcblxyXG4gICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgY2hhdmUgb2YgT2JqZWN0LmtleXModG9rZW4pKSB7XHJcbiAgICAgICAgaWYgKHRva2VuLmhhc093blByb3BlcnR5KGNoYXZlKSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsb3IgPSB0b2tlbltjaGF2ZV07XHJcbiAgICAgICAgICBjb25zdCBub3ZvSXRlbSA9IHtcclxuICAgICAgICAgICAga2V5OiBjaGF2ZSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbG9yXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGtleVZhbHVlUGFpckFycmF5LnB1c2godmFsb3IpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAga2V5VmFsdWVQYWlyQXJyYXkucHVzaChub3ZvSXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ga2V5VmFsdWVQYWlyQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
