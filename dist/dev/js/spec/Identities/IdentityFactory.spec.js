var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../src/Identities/IdentityFactory", "../../src/Identities/Identity", "../../src/Identities/OAuthIdentity", "../../src/Tokens/Parsers/TokenParser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IdentityFactory_1 = require("../../src/Identities/IdentityFactory");
    var Identity_1 = require("../../src/Identities/Identity");
    var OAuthIdentity_1 = require("../../src/Identities/OAuthIdentity");
    var TokenParser_1 = require("../../src/Tokens/Parsers/TokenParser");
    describe('IdentityFactory', function () {
        //   beforeEach(() => {
        //     });
        it('Should create a new User', function () {
            var someToken = { name: 'Joao Vitor' };
            var usuario = IdentityFactory_1.IdentityFactory.Create(null, [someToken]);
            expect(usuario).toBeDefined();
        });
        it('Should use a existing User and add news values', function () {
            var someToken = { name: 'Joao Vitor' };
            var IdentityCustomized = /** @class */ (function (_super) {
                __extends(IdentityCustomized, _super);
                function IdentityCustomized() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(IdentityCustomized.prototype, "Cpf", {
                    get: function () {
                        var name = this.findFirst('cpf');
                        return name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return IdentityCustomized;
            }(Identity_1.Identity));
            var usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
            var usuarioRetornado = IdentityFactory_1.IdentityFactory.Create(usuario, [someToken]);
            expect(usuarioRetornado.Cpf).toBe('0123456789');
            expect(usuarioRetornado.Name).toBe('Joao Vitor');
        });
        it('Should validate IsAuthenticated if has access_token claim', function () {
            var someToken = { name: 'Joao Vitor', access_token: 'whatever' };
            var usuario = new OAuthIdentity_1.OAuthIdentity(someToken);
            var usuarioRetornado = IdentityFactory_1.IdentityFactory.Create(usuario);
            expect(usuarioRetornado.IsAuthenticated).toBe(true);
            expect(usuarioRetornado.AccessToken).toBe(someToken.access_token);
            expect(usuarioRetornado.Name).toBe(someToken.name);
        });
        it('Should use a existing User and add news values from a token', function () {
            var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
            var tokenParser = new TokenParser_1.TokenParser(accessToken);
            var tokenParsed = tokenParser.Parse();
            var someToken = tokenParsed.contentObject();
            var IdentityCustomized = /** @class */ (function (_super) {
                __extends(IdentityCustomized, _super);
                function IdentityCustomized() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(IdentityCustomized.prototype, "Cpf", {
                    get: function () {
                        var name = this.findFirst('cpf');
                        return name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return IdentityCustomized;
            }(Identity_1.Identity));
            var usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
            var usuarioRetornado = IdentityFactory_1.IdentityFactory.Create(usuario, [someToken]);
            var cpf = usuarioRetornado.Cpf;
            var client_id = usuarioRetornado.findFirst('client_id');
            expect(cpf).toBe('0123456789');
            expect(client_id).toBe("2380");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSx3RUFBcUU7SUFFckUsMERBQXVEO0lBQ3ZELG9FQUFpRTtJQUNqRSxvRUFBaUU7SUFHakUsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBRTVCLHVCQUF1QjtRQUV2QixVQUFVO1FBRU4sRUFBRSxDQUFDLDBCQUEwQixFQUFFO1lBQzNCLElBQUksU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBQyxDQUFDO1lBQ3JDLElBQUksT0FBTyxHQUFhLGlDQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFO1lBQ2pELElBQUksU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBQyxDQUFDO1lBRXJDO2dCQUFpQyxzQ0FBUTtnQkFBekM7O2dCQU9BLENBQUM7Z0JBTEcsc0JBQVcsbUNBQUc7eUJBQWQ7d0JBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBUyxLQUFLLENBQUMsQ0FBQzt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQzs7O21CQUFBO2dCQUNMLHlCQUFDO1lBQUQsQ0FQQSxBQU9DLENBUGdDLG1CQUFRLEdBT3hDO1lBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzdFLElBQUksZ0JBQWdCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVwRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsMkRBQTJELEVBQUU7WUFDNUQsSUFBSSxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUMsQ0FBQztZQUUvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLDZCQUFhLENBQUUsU0FBUyxDQUFFLENBQUM7WUFDN0MsSUFBSSxnQkFBZ0IsR0FBRyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1lBRTlELElBQU0sV0FBVyxHQUFVLGc0Q0FBZzRDLENBQUM7WUFFNTVDLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdEMsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTVDO2dCQUFpQyxzQ0FBUTtnQkFBekM7O2dCQU9BLENBQUM7Z0JBTEcsc0JBQVcsbUNBQUc7eUJBQWQ7d0JBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBUyxLQUFLLENBQUMsQ0FBQzt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQzs7O21CQUFBO2dCQUNMLHlCQUFDO1lBQUQsQ0FQQSxBQU9DLENBUGdDLG1CQUFRLEdBT3hDO1lBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzlFLElBQUksZ0JBQWdCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVwRSxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFTLFdBQVcsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuLi8uLi9zcmMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSUlkZW50aXR5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5pbXBvcnQge09BdXRoSWRlbnRpdHl9IGZyb20gJy4uLy4uL3NyYy9JZGVudGl0aWVzL09BdXRoSWRlbnRpdHknO1xyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuLi8uLi9zcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXInO1xyXG5cclxuXHJcbmRlc2NyaWJlKCdJZGVudGl0eUZhY3RvcnknLCAoKSA9PiB7XHJcbiAgICBcclxuLy8gICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgXHJcbi8vICAgICB9KTtcclxuXHJcbiAgICBpdCgnU2hvdWxkIGNyZWF0ZSBhIG5ldyBVc2VyJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB7IG5hbWU6J0pvYW8gVml0b3InfTtcclxuICAgICAgICBsZXQgdXN1YXJpbzpJSWRlbnRpdHkgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKG51bGwsW3NvbWVUb2tlbl0pO1xyXG4gICAgICAgIGV4cGVjdCh1c3VhcmlvKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdTaG91bGQgdXNlIGEgZXhpc3RpbmcgVXNlciBhbmQgYWRkIG5ld3MgdmFsdWVzJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB7IG5hbWU6J0pvYW8gVml0b3InfTtcclxuICAgICAgICBcclxuICAgICAgICBjbGFzcyBJZGVudGl0eUN1c3RvbWl6ZWQgZXh0ZW5kcyBJZGVudGl0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIGdldCBDcGYoKSA6IHN0cmluZyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCdjcGYnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c3VhcmlvID0gbmV3IElkZW50aXR5Q3VzdG9taXplZCggW3sga2V5OiAnY3BmJywgdmFsdWU6JzAxMjM0NTY3ODknIH1dICk7XHJcbiAgICAgICAgbGV0IHVzdWFyaW9SZXRvcm5hZG8gPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKHVzdWFyaW8sIFtzb21lVG9rZW5dKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QodXN1YXJpb1JldG9ybmFkby5DcGYpLnRvQmUoJzAxMjM0NTY3ODknKTtcclxuICAgICAgICBleHBlY3QodXN1YXJpb1JldG9ybmFkby5OYW1lKS50b0JlKCdKb2FvIFZpdG9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnU2hvdWxkIHZhbGlkYXRlIElzQXV0aGVudGljYXRlZCBpZiBoYXMgYWNjZXNzX3Rva2VuIGNsYWltJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB7IG5hbWU6J0pvYW8gVml0b3InLCBhY2Nlc3NfdG9rZW46ICd3aGF0ZXZlcid9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c3VhcmlvID0gbmV3IE9BdXRoSWRlbnRpdHkoIHNvbWVUb2tlbiApO1xyXG4gICAgICAgIGxldCB1c3VhcmlvUmV0b3JuYWRvID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZSh1c3VhcmlvKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QodXN1YXJpb1JldG9ybmFkby5Jc0F1dGhlbnRpY2F0ZWQpLnRvQmUodHJ1ZSk7XHJcbiAgICAgICAgZXhwZWN0KHVzdWFyaW9SZXRvcm5hZG8uQWNjZXNzVG9rZW4pLnRvQmUoc29tZVRva2VuLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgZXhwZWN0KHVzdWFyaW9SZXRvcm5hZG8uTmFtZSkudG9CZShzb21lVG9rZW4ubmFtZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ1Nob3VsZCB1c2UgYSBleGlzdGluZyBVc2VyIGFuZCBhZGQgbmV3cyB2YWx1ZXMgZnJvbSBhIHRva2VuJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOnN0cmluZyA9IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0lzSW5nMWRDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0o5LmV5SnBjM01pT2lKb2RIUndjem92TDNCcWJYUnpkSE12SWl3aVlYVmtJam9pYUhSMGNITTZMeTl3YW0xMGMzUnpMM0psYzI5MWNtTmxjeUlzSW1WNGNDSTZNVFEyTVRnNE5qSXpOU3dpYm1KbUlqb3hORFl4T0RneU5qTTFMQ0pqYkdsbGJuUmZhV1FpT2lJeU16Z3dJaXdpYzJOdmNHVWlPbHNpYjNCbGJtbGtJaXdpY0hKdlptbHNaU0lzSW1WdFlXbHNJaXdpY0dwdGRGOXdjbTltYVd4bElpd2ljR1Z5YldsemMyRnZYekl6T0RBaVhTd2ljM1ZpSWpvaU1UWTRORE1pTENKaGRYUm9YM1JwYldVaU9qRTBOakV4TmpRNU16SXNJbWxrY0NJNkltbGtjM0oySWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprSWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGtScGRtVnljMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGxOdlluSmxJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBieTVTWld4aGRHOXlhVzlEY21saFkyRnZJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBiM011VW1Wc1lYUnZjbWx2UVdObGMzTnZjeUk2V3lKQlkyVnpjMjhpTENKQmJIUmxjbUZ5SWl3aVJYaGpiSFZwY2lJc0lrNXZkbThpWFN3aWNHVnliV2x6YzJGdmZESXpPREE2U0c5dFpTSTZJa0ZqWlhOemJ5SXNJbkJsY20xcGMzTmhiM3d5TXpnd09rNXZkR2xqYVdGeklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlVtVnNZWFJ2Y21sdmN5STZJa0ZqWlhOemJ5SXNJbUZ0Y2lJNld5SndZWE56ZDI5eVpDSmRmUS5FZy1iZFBBSEtNSURsVk1pR05KeEVKOXpxdGgyVW1VLWswRWsxQkl0aEM2V0tuZnlGT1E3RVFYSWJRR0JyTGhtNENIcl9zaXdyZ1RoQUw1TnEzR0pBbzBfd3hmamdkZ3Q5NjVGSFpMTzBYYS1RUlR2Zldkd0NVN19qSFlqbHd1eUo4SURpRXBRZjZ5NmVlVUlNeFJJMEpaYS1hSXJ0NU10TUNyTU1lY1RkVVJYRjkxYlhCRmROREpTR0xwcXJmNjg3SHV6VUNIcnJ6bkJyNndPLTUtNVkyNHJucFRiRWNsUzlLREpZdVRab0JRQTYtVGtjeV9YQkhnNGMxd2h3d09SZjlOZnYxYzhfVjZaak1MMWVpcWRsSzdNRGpxbXNaYkFaa1Njckp6Wm14cG9CTWt2QU1ESWhrbUI4WlZzR2tyWUlDcXRyQVI2Qkl1VGsyYUszejhsb3dcIjtcclxuXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSB0b2tlblBhcnNlci5QYXJzZSgpO1xyXG5cclxuICAgICAgICBsZXQgc29tZVRva2VuID0gdG9rZW5QYXJzZWQuY29udGVudE9iamVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsYXNzIElkZW50aXR5Q3VzdG9taXplZCBleHRlbmRzIElkZW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IENwZigpIDogc3RyaW5nIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ2NwZicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzdWFyaW8gPSBuZXcgSWRlbnRpdHlDdXN0b21pemVkKCBbeyBrZXk6ICdjcGYnLCB2YWx1ZTogJzAxMjM0NTY3ODknIH1dICk7XHJcbiAgICAgICAgbGV0IHVzdWFyaW9SZXRvcm5hZG8gPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKHVzdWFyaW8sIFtzb21lVG9rZW5dKTtcclxuXHJcbiAgICAgICAgbGV0IGNwZiA9IHVzdWFyaW9SZXRvcm5hZG8uQ3BmO1xyXG4gICAgICAgIGxldCBjbGllbnRfaWQgPSB1c3VhcmlvUmV0b3JuYWRvLmZpbmRGaXJzdDxzdHJpbmc+KCdjbGllbnRfaWQnKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGNwZikudG9CZSgnMDEyMzQ1Njc4OScpO1xyXG4gICAgICAgIGV4cGVjdChjbGllbnRfaWQpLnRvQmUoXCIyMzgwXCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG59KTtcclxuIl19
