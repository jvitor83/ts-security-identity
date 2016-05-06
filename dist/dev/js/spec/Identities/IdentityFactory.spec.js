System.register(['../../src/Identities/IdentityFactory', '../../src/Identities/Identity', '../../src/Tokens/Parsers/TokenParser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var IdentityFactory_1, Identity_1, TokenParser_1;
    return {
        setters:[
            function (IdentityFactory_1_1) {
                IdentityFactory_1 = IdentityFactory_1_1;
            },
            function (Identity_1_1) {
                Identity_1 = Identity_1_1;
            },
            function (TokenParser_1_1) {
                TokenParser_1 = TokenParser_1_1;
            }],
        execute: function() {
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
                    var IdentityCustomized = (function (_super) {
                        __extends(IdentityCustomized, _super);
                        function IdentityCustomized() {
                            _super.apply(this, arguments);
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
                it('Should use a existing User and add news values from a token', function () {
                    var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
                    var tokenParser = new TokenParser_1.TokenParser(accessToken);
                    var tokenParsed = tokenParser.Parse();
                    var someToken = tokenParsed.contentObject();
                    var IdentityCustomized = (function (_super) {
                        __extends(IdentityCustomized, _super);
                        function IdentityCustomized() {
                            _super.apply(this, arguments);
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7Z0JBRTVCLHVCQUF1QjtnQkFFdkIsVUFBVTtnQkFFTixFQUFFLENBQUMsMEJBQTBCLEVBQUU7b0JBQzNCLElBQUksU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBQyxDQUFDO29CQUNyQyxJQUFJLE9BQU8sR0FBYSxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTtvQkFDakQsSUFBSSxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUMsWUFBWSxFQUFDLENBQUM7b0JBRXJDO3dCQUFpQyxzQ0FBUTt3QkFBekM7NEJBQWlDLDhCQUFRO3dCQU96QyxDQUFDO3dCQUxHLHNCQUFXLG1DQUFHO2lDQUFkO2dDQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUM7Z0NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLENBQUM7OzsyQkFBQTt3QkFDTCx5QkFBQztvQkFBRCxDQVBBLEFBT0MsQ0FQZ0MsbUJBQVEsR0FPeEM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM3RSxJQUFJLGdCQUFnQixHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyw2REFBNkQsRUFBRTtvQkFFOUQsSUFBTSxXQUFXLEdBQVUsZzRDQUFnNEMsQ0FBQztvQkFFNTVDLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUV0QyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRTVDO3dCQUFpQyxzQ0FBUTt3QkFBekM7NEJBQWlDLDhCQUFRO3dCQU96QyxDQUFDO3dCQUxHLHNCQUFXLG1DQUFHO2lDQUFkO2dDQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUM7Z0NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLENBQUM7OzsyQkFBQTt3QkFDTCx5QkFBQztvQkFBRCxDQVBBLEFBT0MsQ0FQZ0MsbUJBQVEsR0FPeEM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM5RSxJQUFJLGdCQUFnQixHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztvQkFDL0IsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFTLFdBQVcsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztZQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzJyAvPlxyXG5pbXBvcnQge0lkZW50aXR5RmFjdG9yeX0gZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSWRlbnRpdHlGYWN0b3J5JztcclxuaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4uLy4uL3NyYy9JZGVudGl0aWVzL0lJZGVudGl0eSc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4uLy4uL3NyYy9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuaW1wb3J0IHtUb2tlblBhcnNlcn0gZnJvbSAnLi4vLi4vc3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuXHJcblxyXG5kZXNjcmliZSgnSWRlbnRpdHlGYWN0b3J5JywgKCkgPT4ge1xyXG4gICAgXHJcbi8vICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgIFxyXG4vLyAgICAgfSk7XHJcblxyXG4gICAgaXQoJ1Nob3VsZCBjcmVhdGUgYSBuZXcgVXNlcicsICgpID0+IHtcclxuICAgICAgICBsZXQgc29tZVRva2VuID0geyBuYW1lOidKb2FvIFZpdG9yJ307XHJcbiAgICAgICAgbGV0IHVzdWFyaW86SUlkZW50aXR5ID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZShudWxsLFtzb21lVG9rZW5dKTtcclxuICAgICAgICBleHBlY3QodXN1YXJpbykudG9CZURlZmluZWQoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdCgnU2hvdWxkIHVzZSBhIGV4aXN0aW5nIFVzZXIgYW5kIGFkZCBuZXdzIHZhbHVlcycsICgpID0+IHtcclxuICAgICAgICBsZXQgc29tZVRva2VuID0geyBuYW1lOidKb2FvIFZpdG9yJ307XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xhc3MgSWRlbnRpdHlDdXN0b21pemVkIGV4dGVuZHMgSWRlbnRpdHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXQgQ3BmKCkgOiBzdHJpbmcgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignY3BmJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXN1YXJpbyA9IG5ldyBJZGVudGl0eUN1c3RvbWl6ZWQoIFt7IGtleTogJ2NwZicsIHZhbHVlOicwMTIzNDU2Nzg5JyB9XSApO1xyXG4gICAgICAgIGxldCB1c3VhcmlvUmV0b3JuYWRvID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZSh1c3VhcmlvLCBbc29tZVRva2VuXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwZWN0KHVzdWFyaW9SZXRvcm5hZG8uQ3BmKS50b0JlKCcwMTIzNDU2Nzg5Jyk7XHJcbiAgICAgICAgZXhwZWN0KHVzdWFyaW9SZXRvcm5hZG8uTmFtZSkudG9CZSgnSm9hbyBWaXRvcicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdTaG91bGQgdXNlIGEgZXhpc3RpbmcgVXNlciBhbmQgYWRkIG5ld3MgdmFsdWVzIGZyb20gYSB0b2tlbicsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbjpzdHJpbmcgPSBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW1FemNrMVZaMDFHZGpsMFVHTnNUR0UyZVVZemVrRnJabkYxUlNJc0luZzFkQ0k2SW1FemNrMVZaMDFHZGpsMFVHTnNUR0UyZVVZemVrRnJabkYxUlNKOS5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzQnFiWFJ6ZEhNdklpd2lZWFZrSWpvaWFIUjBjSE02THk5d2FtMTBjM1J6TDNKbGMyOTFjbU5sY3lJc0ltVjRjQ0k2TVRRMk1UZzROakl6TlN3aWJtSm1Jam94TkRZeE9EZ3lOak0xTENKamJHbGxiblJmYVdRaU9pSXlNemd3SWl3aWMyTnZjR1VpT2xzaWIzQmxibWxrSWl3aWNISnZabWxzWlNJc0ltVnRZV2xzSWl3aWNHcHRkRjl3Y205bWFXeGxJaXdpY0dWeWJXbHpjMkZ2WHpJek9EQWlYU3dpYzNWaUlqb2lNVFk0TkRNaUxDSmhkWFJvWDNScGJXVWlPakUwTmpFeE5qUTVNeklzSW1sa2NDSTZJbWxrYzNKMklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0lqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5eklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5ekxrUnBkbVZ5YzI5eklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5ekxsTnZZbkpsSWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGxKbGJHRjBiM0pwYnk1U1pXeGhkRzl5YVc5RGNtbGhZMkZ2SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGxKbGJHRjBiM0pwYjNNdVVtVnNZWFJ2Y21sdlFXTmxjM052Y3lJNld5SkJZMlZ6YzI4aUxDSkJiSFJsY21GeUlpd2lSWGhqYkhWcGNpSXNJazV2ZG04aVhTd2ljR1Z5YldsemMyRnZmREl6T0RBNlNHOXRaU0k2SWtGalpYTnpieUlzSW5CbGNtMXBjM05oYjN3eU16Z3dPazV2ZEdsamFXRnpJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZVbVZzWVhSdmNtbHZjeUk2SWtGalpYTnpieUlzSW1GdGNpSTZXeUp3WVhOemQyOXlaQ0pkZlEuRWctYmRQQUhLTUlEbFZNaUdOSnhFSjl6cXRoMlVtVS1rMEVrMUJJdGhDNldLbmZ5Rk9RN0VRWEliUUdCckxobTRDSHJfc2l3cmdUaEFMNU5xM0dKQW8wX3d4ZmpnZGd0OTY1RkhaTE8wWGEtUVJUdmZXZHdDVTdfakhZamx3dXlKOElEaUVwUWY2eTZlZVVJTXhSSTBKWmEtYUlydDVNdE1Dck1NZWNUZFVSWEY5MWJYQkZkTkRKU0dMcHFyZjY4N0h1elVDSHJyem5CcjZ3Ty01LTVZMjRybnBUYkVjbFM5S0RKWXVUWm9CUUE2LVRrY3lfWEJIZzRjMXdod3dPUmY5TmZ2MWM4X1Y2WmpNTDFlaXFkbEs3TURqcW1zWmJBWmtTY3JKelpteHBvQk1rdkFNREloa21COFpWc0drcllJQ3F0ckFSNkJJdVRrMmFLM3o4bG93XCI7XHJcblxyXG4gICAgICAgIGxldCB0b2tlblBhcnNlciA9IG5ldyBUb2tlblBhcnNlcihhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VkID0gdG9rZW5QYXJzZXIuUGFyc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHNvbWVUb2tlbiA9IHRva2VuUGFyc2VkLmNvbnRlbnRPYmplY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBjbGFzcyBJZGVudGl0eUN1c3RvbWl6ZWQgZXh0ZW5kcyBJZGVudGl0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIGdldCBDcGYoKSA6IHN0cmluZyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCdjcGYnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c3VhcmlvID0gbmV3IElkZW50aXR5Q3VzdG9taXplZCggW3sga2V5OiAnY3BmJywgdmFsdWU6ICcwMTIzNDU2Nzg5JyB9XSApO1xyXG4gICAgICAgIGxldCB1c3VhcmlvUmV0b3JuYWRvID0gSWRlbnRpdHlGYWN0b3J5LkNyZWF0ZSh1c3VhcmlvLCBbc29tZVRva2VuXSk7XHJcblxyXG4gICAgICAgIGxldCBjcGYgPSB1c3VhcmlvUmV0b3JuYWRvLkNwZjtcclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdXN1YXJpb1JldG9ybmFkby5maW5kRmlyc3Q8c3RyaW5nPignY2xpZW50X2lkJyk7XHJcblxyXG4gICAgICAgIGV4cGVjdChjcGYpLnRvQmUoJzAxMjM0NTY3ODknKTtcclxuICAgICAgICBleHBlY3QoY2xpZW50X2lkKS50b0JlKFwiMjM4MFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxufSk7XHJcbiJdfQ==
