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
                    var usuario = IdentityFactory_1.default.Create(null, [someToken]);
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
                    }(Identity_1.default));
                    var usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
                    var usuarioRetornado = IdentityFactory_1.default.Create(usuario, [someToken]);
                    expect(usuarioRetornado.Cpf).toBe('0123456789');
                    expect(usuarioRetornado.Name).toBe('Joao Vitor');
                });
                it('Should use a existing User and add news values from a token', function () {
                    var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
                    var tokenParser = new TokenParser_1.default(accessToken);
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
                    }(Identity_1.default));
                    var usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
                    var usuarioRetornado = IdentityFactory_1.default.Create(usuario, [someToken]);
                    var cpf = usuarioRetornado.Cpf;
                    var client_id = usuarioRetornado.findFirst('client_id');
                    expect(cpf).toBe('0123456789');
                    expect(client_id).toBe("2380");
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7Z0JBRTVCLHVCQUF1QjtnQkFFdkIsVUFBVTtnQkFFTixFQUFFLENBQUMsMEJBQTBCLEVBQUU7b0JBQzNCLElBQUksU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBQyxDQUFDO29CQUNyQyxJQUFJLE9BQU8sR0FBYSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTtvQkFDakQsSUFBSSxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUMsWUFBWSxFQUFDLENBQUM7b0JBRXJDO3dCQUFpQyxzQ0FBUTt3QkFBekM7NEJBQWlDLDhCQUFRO3dCQU96QyxDQUFDO3dCQUxHLHNCQUFXLG1DQUFHO2lDQUFkO2dDQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUM7Z0NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLENBQUM7OzsyQkFBQTt3QkFDTCx5QkFBQztvQkFBRCxDQVBBLEFBT0MsQ0FQZ0Msa0JBQVEsR0FPeEM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM3RSxJQUFJLGdCQUFnQixHQUFHLHlCQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyw2REFBNkQsRUFBRTtvQkFFOUQsSUFBTSxXQUFXLEdBQVUsZzRDQUFnNEMsQ0FBQztvQkFFNTVDLElBQUksV0FBVyxHQUFHLElBQUkscUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUV0QyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRTVDO3dCQUFpQyxzQ0FBUTt3QkFBekM7NEJBQWlDLDhCQUFRO3dCQU96QyxDQUFDO3dCQUxHLHNCQUFXLG1DQUFHO2lDQUFkO2dDQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUM7Z0NBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLENBQUM7OzsyQkFBQTt3QkFDTCx5QkFBQztvQkFBRCxDQVBBLEFBT0MsQ0FQZ0Msa0JBQVEsR0FPeEM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM5RSxJQUFJLGdCQUFnQixHQUFHLHlCQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztvQkFDL0IsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFTLFdBQVcsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztZQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzJyAvPlxyXG5pbXBvcnQgSWRlbnRpdHlGYWN0b3J5IGZyb20gJy4uLy4uL3NyYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeSc7XHJcbmltcG9ydCBJSWRlbnRpdHkgZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSUlkZW50aXR5JztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uLy4uL3NyYy9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuaW1wb3J0IFRva2VuUGFyc2VyIGZyb20gJy4uLy4uL3NyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlcic7XHJcblxyXG5cclxuZGVzY3JpYmUoJ0lkZW50aXR5RmFjdG9yeScsICgpID0+IHtcclxuICAgIFxyXG4vLyAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICBcclxuLy8gICAgIH0pO1xyXG5cclxuICAgIGl0KCdTaG91bGQgY3JlYXRlIGEgbmV3IFVzZXInLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvbWVUb2tlbiA9IHsgbmFtZTonSm9hbyBWaXRvcid9O1xyXG4gICAgICAgIGxldCB1c3VhcmlvOklJZGVudGl0eSA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUobnVsbCxbc29tZVRva2VuXSk7XHJcbiAgICAgICAgZXhwZWN0KHVzdWFyaW8pLnRvQmVEZWZpbmVkKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ1Nob3VsZCB1c2UgYSBleGlzdGluZyBVc2VyIGFuZCBhZGQgbmV3cyB2YWx1ZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvbWVUb2tlbiA9IHsgbmFtZTonSm9hbyBWaXRvcid9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsYXNzIElkZW50aXR5Q3VzdG9taXplZCBleHRlbmRzIElkZW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IENwZigpIDogc3RyaW5nIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ2NwZicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzdWFyaW8gPSBuZXcgSWRlbnRpdHlDdXN0b21pemVkKCBbeyBrZXk6ICdjcGYnLCB2YWx1ZTonMDEyMzQ1Njc4OScgfV0gKTtcclxuICAgICAgICBsZXQgdXN1YXJpb1JldG9ybmFkbyA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUodXN1YXJpbywgW3NvbWVUb2tlbl0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV4cGVjdCh1c3VhcmlvUmV0b3JuYWRvLkNwZikudG9CZSgnMDEyMzQ1Njc4OScpO1xyXG4gICAgICAgIGV4cGVjdCh1c3VhcmlvUmV0b3JuYWRvLk5hbWUpLnRvQmUoJ0pvYW8gVml0b3InKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdCgnU2hvdWxkIHVzZSBhIGV4aXN0aW5nIFVzZXIgYW5kIGFkZCBuZXdzIHZhbHVlcyBmcm9tIGEgdG9rZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46c3RyaW5nID0gXCJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltRXpjazFWWjAxR2RqbDBVR05zVEdFMmVVWXpla0ZyWm5GMVJTSXNJbmcxZENJNkltRXpjazFWWjAxR2RqbDBVR05zVEdFMmVVWXpla0ZyWm5GMVJTSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMM0JxYlhSemRITXZJaXdpWVhWa0lqb2lhSFIwY0hNNkx5OXdhbTEwYzNSekwzSmxjMjkxY21ObGN5SXNJbVY0Y0NJNk1UUTJNVGc0TmpJek5Td2libUptSWpveE5EWXhPRGd5TmpNMUxDSmpiR2xsYm5SZmFXUWlPaUl5TXpnd0lpd2ljMk52Y0dVaU9sc2liM0JsYm1sa0lpd2ljSEp2Wm1sc1pTSXNJbVZ0WVdsc0lpd2ljR3B0ZEY5d2NtOW1hV3hsSWl3aWNHVnliV2x6YzJGdlh6SXpPREFpWFN3aWMzVmlJam9pTVRZNE5ETWlMQ0poZFhSb1gzUnBiV1VpT2pFME5qRXhOalE1TXpJc0ltbGtjQ0k2SW1sa2MzSjJJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMa2R5WVdacFkyOXpJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMa2R5WVdacFkyOXpMa1JwZG1WeWMyOXpJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMa2R5WVdacFkyOXpMbE52WW5KbElqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xsSmxiR0YwYjNKcGJ5NVNaV3hoZEc5eWFXOURjbWxoWTJGdklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xsSmxiR0YwYjNKcGIzTXVVbVZzWVhSdmNtbHZRV05sYzNOdmN5STZXeUpCWTJWemMyOGlMQ0pCYkhSbGNtRnlJaXdpUlhoamJIVnBjaUlzSWs1dmRtOGlYU3dpY0dWeWJXbHpjMkZ2ZkRJek9EQTZTRzl0WlNJNklrRmpaWE56YnlJc0luQmxjbTFwYzNOaGIzd3lNemd3T2s1dmRHbGphV0Z6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2VW1Wc1lYUnZjbWx2Y3lJNklrRmpaWE56YnlJc0ltRnRjaUk2V3lKd1lYTnpkMjl5WkNKZGZRLkVnLWJkUEFIS01JRGxWTWlHTkp4RUo5enF0aDJVbVUtazBFazFCSXRoQzZXS25meUZPUTdFUVhJYlFHQnJMaG00Q0hyX3Npd3JnVGhBTDVOcTNHSkFvMF93eGZqZ2RndDk2NUZIWkxPMFhhLVFSVHZmV2R3Q1U3X2pIWWpsd3V5SjhJRGlFcFFmNnk2ZWVVSU14UkkwSlphLWFJcnQ1TXRNQ3JNTWVjVGRVUlhGOTFiWEJGZE5ESlNHTHBxcmY2ODdIdXpVQ0hycnpuQnI2d08tNS01WTI0cm5wVGJFY2xTOUtESll1VFpvQlFBNi1Ua2N5X1hCSGc0YzF3aHd3T1JmOU5mdjFjOF9WNlpqTUwxZWlxZGxLN01EanFtc1piQVprU2NySnpabXhwb0JNa3ZBTURJaGttQjhaVnNHa3JZSUNxdHJBUjZCSXVUazJhSzN6OGxvd1wiO1xyXG5cclxuICAgICAgICBsZXQgdG9rZW5QYXJzZXIgPSBuZXcgVG9rZW5QYXJzZXIoYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcblxyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB0b2tlblBhcnNlZC5jb250ZW50T2JqZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xhc3MgSWRlbnRpdHlDdXN0b21pemVkIGV4dGVuZHMgSWRlbnRpdHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXQgQ3BmKCkgOiBzdHJpbmcgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdGhpcy5maW5kRmlyc3Q8c3RyaW5nPignY3BmJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXN1YXJpbyA9IG5ldyBJZGVudGl0eUN1c3RvbWl6ZWQoIFt7IGtleTogJ2NwZicsIHZhbHVlOiAnMDEyMzQ1Njc4OScgfV0gKTtcclxuICAgICAgICBsZXQgdXN1YXJpb1JldG9ybmFkbyA9IElkZW50aXR5RmFjdG9yeS5DcmVhdGUodXN1YXJpbywgW3NvbWVUb2tlbl0pO1xyXG5cclxuICAgICAgICBsZXQgY3BmID0gdXN1YXJpb1JldG9ybmFkby5DcGY7XHJcbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IHVzdWFyaW9SZXRvcm5hZG8uZmluZEZpcnN0PHN0cmluZz4oJ2NsaWVudF9pZCcpO1xyXG5cclxuICAgICAgICBleHBlY3QoY3BmKS50b0JlKCcwMTIzNDU2Nzg5Jyk7XHJcbiAgICAgICAgZXhwZWN0KGNsaWVudF9pZCkudG9CZShcIjIzODBcIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbn0pO1xyXG4iXX0=
