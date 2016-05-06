System.register(['../src/SecurityContext', '../src/SecurityContextEncodedTokenInitializer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SecurityContext_1, SecurityContextEncodedTokenInitializer_1;
    return {
        setters:[
            function (SecurityContext_1_1) {
                SecurityContext_1 = SecurityContext_1_1;
            },
            function (SecurityContextEncodedTokenInitializer_1_1) {
                SecurityContextEncodedTokenInitializer_1 = SecurityContextEncodedTokenInitializer_1_1;
            }],
        execute: function() {
            describe('SecurityContextEncodedTokenInitializer', function () {
                var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
                var identityToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiMjM4MCIsImV4cCI6MTQ2MTg4MjkzNSwibmJmIjoxNDYxODgyNjM1LCJub25jZSI6IjEyMjMwMjA2NTU5NDkyMDgiLCJpYXQiOjE0NjE4ODI2MzUsImF0X2hhc2giOiIzeV9iSi1oZEZiMjE3VHNpQUVpVnZ3IiwiY19oYXNoIjoibGhMRDFOaTNkcms0aEJKYXBQRUpaQSIsInNpZCI6IjNkMGQzNWYxNGFjYWQ3MzEyM2E2Y2FmMGU5NTY5NGIzIiwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwiYW1yIjpbInBhc3N3b3JkIl19.hS9vFGcUq6j3CBRsUDm2RG0zwyNbdRijN1L_f7EmX4d5o8Wxh9RaWxPmYUSAGt211lrnp1W0zm7HfWqOu3szJnhCWKfX_P9CYuc-3NyWXxL9iMZM07lzweunJeYrWM99KCWT9il_ptR3cvNBEZPBBHBmzQ5EPbHqMga35U3U0rHTuC1134qvDFE-2YoGyNXxP5KD-pyVlx0hPXOsfv9xYfKr9C31eEMqyyavZWpmiH8Ywz1vlJTMdX6Y9Gm7599Ojqe66mRAaDX7_rf8kecgvkSZD0uozHPGIX-Y8ORPS83AHXTOFOAXoO3hvxnJJ6iN1oVJSzWVsI59VFbvMIawCw";
                beforeEach(function () {
                    SecurityContext_1.default.Reset();
                });
                it('Init should instantiate a User', function () {
                    var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.default([accessToken, identityToken]);
                    SecurityContext_1.default.Current.Init(securityContextInitializer);
                    //SecurityContext.Current.User.permissoes.filter((permissao) => permissao.permissoes.some((perm) => perm == ""));
                    expect(SecurityContext_1.default.Current.Principal).toBeDefined();
                });
                it('Init should have a User authenticated', function () {
                    var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.default([accessToken, identityToken]);
                    SecurityContext_1.default.Current.Init(securityContextInitializer);
                    expect(SecurityContext_1.default.Current.Principal.IsAuthenticated).toBeTruthy();
                });
                it('User should have client_id', function () {
                    var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.default([accessToken, identityToken]);
                    SecurityContext_1.default.Current.Init(securityContextInitializer);
                    var client_id = SecurityContext_1.default.Current.Principal.Identity.findFirst('client_id');
                    expect(client_id).toBe('2380');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBS0EsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO2dCQUUvQyxJQUFNLFdBQVcsR0FBVSxnNENBQWc0QyxDQUFDO2dCQUU1NUMsSUFBTSxhQUFhLEdBQVUsMDJCQUEwMkIsQ0FBQztnQkFHMTRCLFVBQVUsQ0FBQztvQkFDUCx5QkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7b0JBRWpDLElBQUksMEJBQTBCLEdBQUcsSUFBSSxnREFBc0MsQ0FBQyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMxRyx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFFekQsaUhBQWlIO29CQUVqSCxNQUFNLENBQUMseUJBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRTVELENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtvQkFFeEMsSUFBSSwwQkFBMEIsR0FBRyxJQUFJLGdEQUFzQyxDQUFDLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzFHLHlCQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUV6RCxNQUFNLENBQUMseUJBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUUzRSxDQUFDLENBQUMsQ0FBQztnQkFHSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7b0JBRTdCLElBQUksMEJBQTBCLEdBQUcsSUFBSSxnREFBc0MsQ0FBQyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMxRyx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFFekQsSUFBSSxTQUFTLEdBQWMseUJBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVMsQ0FBQyxTQUFTLENBQVMsV0FBVyxDQUFDLENBQUM7b0JBRXRHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRW5DLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3BlYy9TZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vdHlwaW5ncy9tYWluLmQudHMnIC8+XHJcbmltcG9ydCBTZWN1cml0eUNvbnRleHQgZnJvbSAnLi4vc3JjL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuLi9zcmMvSWRlbnRpdGllcy9JZGVudGl0eSc7XHJcbmltcG9ydCBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplciBmcm9tICcuLi9zcmMvU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXInO1xyXG5cclxuZGVzY3JpYmUoJ1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbjpzdHJpbmcgPSBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW1FemNrMVZaMDFHZGpsMFVHTnNUR0UyZVVZemVrRnJabkYxUlNJc0luZzFkQ0k2SW1FemNrMVZaMDFHZGpsMFVHTnNUR0UyZVVZemVrRnJabkYxUlNKOS5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzQnFiWFJ6ZEhNdklpd2lZWFZrSWpvaWFIUjBjSE02THk5d2FtMTBjM1J6TDNKbGMyOTFjbU5sY3lJc0ltVjRjQ0k2TVRRMk1UZzROakl6TlN3aWJtSm1Jam94TkRZeE9EZ3lOak0xTENKamJHbGxiblJmYVdRaU9pSXlNemd3SWl3aWMyTnZjR1VpT2xzaWIzQmxibWxrSWl3aWNISnZabWxzWlNJc0ltVnRZV2xzSWl3aWNHcHRkRjl3Y205bWFXeGxJaXdpY0dWeWJXbHpjMkZ2WHpJek9EQWlYU3dpYzNWaUlqb2lNVFk0TkRNaUxDSmhkWFJvWDNScGJXVWlPakUwTmpFeE5qUTVNeklzSW1sa2NDSTZJbWxrYzNKMklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0lqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5eklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5ekxrUnBkbVZ5YzI5eklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlJHRnphR0p2WVhKa0xrZHlZV1pwWTI5ekxsTnZZbkpsSWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGxKbGJHRjBiM0pwYnk1U1pXeGhkRzl5YVc5RGNtbGhZMkZ2SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGxKbGJHRjBiM0pwYjNNdVVtVnNZWFJ2Y21sdlFXTmxjM052Y3lJNld5SkJZMlZ6YzI4aUxDSkJiSFJsY21GeUlpd2lSWGhqYkhWcGNpSXNJazV2ZG04aVhTd2ljR1Z5YldsemMyRnZmREl6T0RBNlNHOXRaU0k2SWtGalpYTnpieUlzSW5CbGNtMXBjM05oYjN3eU16Z3dPazV2ZEdsamFXRnpJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZVbVZzWVhSdmNtbHZjeUk2SWtGalpYTnpieUlzSW1GdGNpSTZXeUp3WVhOemQyOXlaQ0pkZlEuRWctYmRQQUhLTUlEbFZNaUdOSnhFSjl6cXRoMlVtVS1rMEVrMUJJdGhDNldLbmZ5Rk9RN0VRWEliUUdCckxobTRDSHJfc2l3cmdUaEFMNU5xM0dKQW8wX3d4ZmpnZGd0OTY1RkhaTE8wWGEtUVJUdmZXZHdDVTdfakhZamx3dXlKOElEaUVwUWY2eTZlZVVJTXhSSTBKWmEtYUlydDVNdE1Dck1NZWNUZFVSWEY5MWJYQkZkTkRKU0dMcHFyZjY4N0h1elVDSHJyem5CcjZ3Ty01LTVZMjRybnBUYkVjbFM5S0RKWXVUWm9CUUE2LVRrY3lfWEJIZzRjMXdod3dPUmY5TmZ2MWM4X1Y2WmpNTDFlaXFkbEs3TURqcW1zWmJBWmtTY3JKelpteHBvQk1rdkFNREloa21COFpWc0drcllJQ3F0ckFSNkJJdVRrMmFLM3o4bG93XCI7XHJcbiAgICBcclxuICAgIGNvbnN0IGlkZW50aXR5VG9rZW46c3RyaW5nID0gXCJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltRXpjazFWWjAxR2RqbDBVR05zVEdFMmVVWXpla0ZyWm5GMVJTSXNJbmcxZENJNkltRXpjazFWWjAxR2RqbDBVR05zVEdFMmVVWXpla0ZyWm5GMVJTSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMM0JxYlhSemRITXZJaXdpWVhWa0lqb2lNak00TUNJc0ltVjRjQ0k2TVRRMk1UZzRNamt6TlN3aWJtSm1Jam94TkRZeE9EZ3lOak0xTENKdWIyNWpaU0k2SWpFeU1qTXdNakEyTlRVNU5Ea3lNRGdpTENKcFlYUWlPakUwTmpFNE9ESTJNelVzSW1GMFgyaGhjMmdpT2lJemVWOWlTaTFvWkVaaU1qRTNWSE5wUVVWcFZuWjNJaXdpWTE5b1lYTm9Jam9pYkdoTVJERk9hVE5rY21zMGFFSktZWEJRUlVwYVFTSXNJbk5wWkNJNklqTmtNR1F6TldZeE5HRmpZV1EzTXpFeU0yRTJZMkZtTUdVNU5UWTVOR0l6SWl3aWMzVmlJam9pTVRZNE5ETWlMQ0poZFhSb1gzUnBiV1VpT2pFME5qRXhOalE1TXpJc0ltbGtjQ0k2SW1sa2MzSjJJaXdpWVcxeUlqcGJJbkJoYzNOM2IzSmtJbDE5LmhTOXZGR2NVcTZqM0NCUnNVRG0yUkcwend5TmJkUmlqTjFMX2Y3RW1YNGQ1bzhXeGg5UmFXeFBtWVVTQUd0MjExbHJucDFXMHptN0hmV3FPdTNzekpuaENXS2ZYX1A5Q1l1Yy0zTnlXWHhMOWlNWk0wN2x6d2V1bkplWXJXTTk5S0NXVDlpbF9wdFIzY3ZOQkVaUEJCSEJtelE1RVBiSHFNZ2EzNVUzVTBySFR1QzExMzRxdkRGRS0yWW9HeU5YeFA1S0QtcHlWbHgwaFBYT3Nmdjl4WWZLcjlDMzFlRU1xeXlhdlpXcG1pSDhZd3oxdmxKVE1kWDZZOUdtNzU5OU9qcWU2Nm1SQWFEWDdfcmY4a2VjZ3ZrU1pEMHVvekhQR0lYLVk4T1JQUzgzQUhYVE9GT0FYb08zaHZ4bkpKNmlOMW9WSlN6V1ZzSTU5VkZidk1JYXdDd1wiO1xyXG4gICAgXHJcbiAgICBcclxuICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgU2VjdXJpdHlDb250ZXh0LlJlc2V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnSW5pdCBzaG91bGQgaW5zdGFudGlhdGUgYSBVc2VyJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyKFthY2Nlc3NUb2tlbiwgaWRlbnRpdHlUb2tlbl0pO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpO1xyXG4gICAgXHJcbiAgICAgICAgLy9TZWN1cml0eUNvbnRleHQuQ3VycmVudC5Vc2VyLnBlcm1pc3NvZXMuZmlsdGVyKChwZXJtaXNzYW8pID0+IHBlcm1pc3Nhby5wZXJtaXNzb2VzLnNvbWUoKHBlcm0pID0+IHBlcm0gPT0gXCJcIikpO1xyXG4gICAgXHJcbiAgICAgICAgZXhwZWN0KFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LlByaW5jaXBhbCkudG9CZURlZmluZWQoKTtcclxuICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdJbml0IHNob3VsZCBoYXZlIGEgVXNlciBhdXRoZW50aWNhdGVkJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IG5ldyBTZWN1cml0eUNvbnRleHRFbmNvZGVkVG9rZW5Jbml0aWFsaXplcihbYWNjZXNzVG9rZW4sIGlkZW50aXR5VG9rZW5dKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QoU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuUHJpbmNpcGFsLklzQXV0aGVudGljYXRlZCkudG9CZVRydXRoeSgpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpdCgnVXNlciBzaG91bGQgaGF2ZSBjbGllbnRfaWQnLCAoKSA9PiB7XHJcbiAgICBcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIoW2FjY2Vzc1Rva2VuLCBpZGVudGl0eVRva2VuXSk7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplcik7XHJcbiAgICBcclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gKDxJZGVudGl0eT5TZWN1cml0eUNvbnRleHQuQ3VycmVudC5QcmluY2lwYWwuSWRlbnRpdHkpLmZpbmRGaXJzdDxzdHJpbmc+KCdjbGllbnRfaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGV4cGVjdChjbGllbnRfaWQpLnRvQmUoJzIzODAnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbn0pO1xyXG4iXX0=
