System.register(['../../src/Identities/IdentityFactory', '../../src/Identities/Identity', '../../src/Tokens/Parsers/TokenParser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            describe('IdentityFactory', () => {
                //   beforeEach(() => {
                //     });
                it('Should create a new User', () => {
                    let someToken = { name: 'Joao Vitor' };
                    let usuario = IdentityFactory_1.IdentityFactory.Create(null, [someToken]);
                    expect(usuario).toBeDefined();
                });
                it('Should use a existing User and add news values', () => {
                    let someToken = { name: 'Joao Vitor' };
                    class IdentityCustomized extends Identity_1.Identity {
                        get Cpf() {
                            let name = this.findFirst('cpf');
                            return name;
                        }
                    }
                    let usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
                    let usuarioRetornado = IdentityFactory_1.IdentityFactory.Create(usuario, [someToken]);
                    expect(usuarioRetornado.Cpf).toBe('0123456789');
                    expect(usuarioRetornado.Name).toBe('Joao Vitor');
                });
                it('Should use a existing User and add news values from a token', () => {
                    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
                    let tokenParser = new TokenParser_1.TokenParser(accessToken);
                    let tokenParsed = tokenParser.Parse();
                    let someToken = tokenParsed.contentObject();
                    class IdentityCustomized extends Identity_1.Identity {
                        get Cpf() {
                            let name = this.findFirst('cpf');
                            return name;
                        }
                    }
                    let usuario = new IdentityCustomized([{ key: 'cpf', value: '0123456789' }]);
                    let usuarioRetornado = IdentityFactory_1.IdentityFactory.Create(usuario, [someToken]);
                    let cpf = usuarioRetornado.Cpf;
                    let client_id = usuarioRetornado.findFirst('client_id');
                    expect(cpf).toBe('0123456789');
                    expect(client_id).toBe("2380");
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3Rvcnkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBT0EsUUFBUSxDQUFDLGlCQUFpQixFQUFFO2dCQUU1Qix1QkFBdUI7Z0JBRXZCLFVBQVU7Z0JBRU4sRUFBRSxDQUFDLDBCQUEwQixFQUFFO29CQUMzQixJQUFJLFNBQVMsR0FBRyxFQUFFLElBQUksRUFBQyxZQUFZLEVBQUMsQ0FBQztvQkFDckMsSUFBSSxPQUFPLEdBQWEsaUNBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUU7b0JBQ2pELElBQUksU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBQyxDQUFDO29CQUVyQyxpQ0FBaUMsbUJBQVE7d0JBRXJDLElBQVcsR0FBRzs0QkFFVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFTLEtBQUssQ0FBQyxDQUFDOzRCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNoQixDQUFDO29CQUNMLENBQUM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM3RSxJQUFJLGdCQUFnQixHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyw2REFBNkQsRUFBRTtvQkFFOUQsTUFBTSxXQUFXLEdBQVUsZzRDQUFnNEMsQ0FBQztvQkFFNTVDLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUV0QyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRTVDLGlDQUFpQyxtQkFBUTt3QkFFckMsSUFBVyxHQUFHOzRCQUVWLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsS0FBSyxDQUFDLENBQUM7NEJBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFFLENBQUM7b0JBQzlFLElBQUksZ0JBQWdCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFFcEUsSUFBSSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO29CQUMvQixJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQVMsV0FBVyxDQUFDLENBQUM7b0JBRWhFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO1lBR1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3BlYy9JZGVudGl0aWVzL0lkZW50aXR5RmFjdG9yeS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHMnIC8+XHJcbmltcG9ydCB7SWRlbnRpdHlGYWN0b3J5fSBmcm9tICcuLi8uLi9zcmMvSWRlbnRpdGllcy9JZGVudGl0eUZhY3RvcnknO1xyXG5pbXBvcnQge0lJZGVudGl0eX0gZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSUlkZW50aXR5JztcclxuaW1wb3J0IHtJZGVudGl0eX0gZnJvbSAnLi4vLi4vc3JjL0lkZW50aXRpZXMvSWRlbnRpdHknO1xyXG5pbXBvcnQge1Rva2VuUGFyc2VyfSBmcm9tICcuLi8uLi9zcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZXInO1xyXG5cclxuXHJcbmRlc2NyaWJlKCdJZGVudGl0eUZhY3RvcnknLCAoKSA9PiB7XHJcbiAgICBcclxuLy8gICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgXHJcbi8vICAgICB9KTtcclxuXHJcbiAgICBpdCgnU2hvdWxkIGNyZWF0ZSBhIG5ldyBVc2VyJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB7IG5hbWU6J0pvYW8gVml0b3InfTtcclxuICAgICAgICBsZXQgdXN1YXJpbzpJSWRlbnRpdHkgPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKG51bGwsW3NvbWVUb2tlbl0pO1xyXG4gICAgICAgIGV4cGVjdCh1c3VhcmlvKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdTaG91bGQgdXNlIGEgZXhpc3RpbmcgVXNlciBhbmQgYWRkIG5ld3MgdmFsdWVzJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzb21lVG9rZW4gPSB7IG5hbWU6J0pvYW8gVml0b3InfTtcclxuICAgICAgICBcclxuICAgICAgICBjbGFzcyBJZGVudGl0eUN1c3RvbWl6ZWQgZXh0ZW5kcyBJZGVudGl0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIGdldCBDcGYoKSA6IHN0cmluZyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmZpbmRGaXJzdDxzdHJpbmc+KCdjcGYnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB1c3VhcmlvID0gbmV3IElkZW50aXR5Q3VzdG9taXplZCggW3sga2V5OiAnY3BmJywgdmFsdWU6JzAxMjM0NTY3ODknIH1dICk7XHJcbiAgICAgICAgbGV0IHVzdWFyaW9SZXRvcm5hZG8gPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKHVzdWFyaW8sIFtzb21lVG9rZW5dKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QodXN1YXJpb1JldG9ybmFkby5DcGYpLnRvQmUoJzAxMjM0NTY3ODknKTtcclxuICAgICAgICBleHBlY3QodXN1YXJpb1JldG9ybmFkby5OYW1lKS50b0JlKCdKb2FvIFZpdG9yJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ1Nob3VsZCB1c2UgYSBleGlzdGluZyBVc2VyIGFuZCBhZGQgbmV3cyB2YWx1ZXMgZnJvbSBhIHRva2VuJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOnN0cmluZyA9IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0lzSW5nMWRDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0o5LmV5SnBjM01pT2lKb2RIUndjem92TDNCcWJYUnpkSE12SWl3aVlYVmtJam9pYUhSMGNITTZMeTl3YW0xMGMzUnpMM0psYzI5MWNtTmxjeUlzSW1WNGNDSTZNVFEyTVRnNE5qSXpOU3dpYm1KbUlqb3hORFl4T0RneU5qTTFMQ0pqYkdsbGJuUmZhV1FpT2lJeU16Z3dJaXdpYzJOdmNHVWlPbHNpYjNCbGJtbGtJaXdpY0hKdlptbHNaU0lzSW1WdFlXbHNJaXdpY0dwdGRGOXdjbTltYVd4bElpd2ljR1Z5YldsemMyRnZYekl6T0RBaVhTd2ljM1ZpSWpvaU1UWTRORE1pTENKaGRYUm9YM1JwYldVaU9qRTBOakV4TmpRNU16SXNJbWxrY0NJNkltbGtjM0oySWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprSWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGtScGRtVnljMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGxOdlluSmxJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBieTVTWld4aGRHOXlhVzlEY21saFkyRnZJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBiM011VW1Wc1lYUnZjbWx2UVdObGMzTnZjeUk2V3lKQlkyVnpjMjhpTENKQmJIUmxjbUZ5SWl3aVJYaGpiSFZwY2lJc0lrNXZkbThpWFN3aWNHVnliV2x6YzJGdmZESXpPREE2U0c5dFpTSTZJa0ZqWlhOemJ5SXNJbkJsY20xcGMzTmhiM3d5TXpnd09rNXZkR2xqYVdGeklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlVtVnNZWFJ2Y21sdmN5STZJa0ZqWlhOemJ5SXNJbUZ0Y2lJNld5SndZWE56ZDI5eVpDSmRmUS5FZy1iZFBBSEtNSURsVk1pR05KeEVKOXpxdGgyVW1VLWswRWsxQkl0aEM2V0tuZnlGT1E3RVFYSWJRR0JyTGhtNENIcl9zaXdyZ1RoQUw1TnEzR0pBbzBfd3hmamdkZ3Q5NjVGSFpMTzBYYS1RUlR2Zldkd0NVN19qSFlqbHd1eUo4SURpRXBRZjZ5NmVlVUlNeFJJMEpaYS1hSXJ0NU10TUNyTU1lY1RkVVJYRjkxYlhCRmROREpTR0xwcXJmNjg3SHV6VUNIcnJ6bkJyNndPLTUtNVkyNHJucFRiRWNsUzlLREpZdVRab0JRQTYtVGtjeV9YQkhnNGMxd2h3d09SZjlOZnYxYzhfVjZaak1MMWVpcWRsSzdNRGpxbXNaYkFaa1Njckp6Wm14cG9CTWt2QU1ESWhrbUI4WlZzR2tyWUlDcXRyQVI2Qkl1VGsyYUszejhsb3dcIjtcclxuXHJcbiAgICAgICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBsZXQgdG9rZW5QYXJzZWQgPSB0b2tlblBhcnNlci5QYXJzZSgpO1xyXG5cclxuICAgICAgICBsZXQgc29tZVRva2VuID0gdG9rZW5QYXJzZWQuY29udGVudE9iamVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsYXNzIElkZW50aXR5Q3VzdG9taXplZCBleHRlbmRzIElkZW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IENwZigpIDogc3RyaW5nIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ2NwZicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVzdWFyaW8gPSBuZXcgSWRlbnRpdHlDdXN0b21pemVkKCBbeyBrZXk6ICdjcGYnLCB2YWx1ZTogJzAxMjM0NTY3ODknIH1dICk7XHJcbiAgICAgICAgbGV0IHVzdWFyaW9SZXRvcm5hZG8gPSBJZGVudGl0eUZhY3RvcnkuQ3JlYXRlKHVzdWFyaW8sIFtzb21lVG9rZW5dKTtcclxuXHJcbiAgICAgICAgbGV0IGNwZiA9IHVzdWFyaW9SZXRvcm5hZG8uQ3BmO1xyXG4gICAgICAgIGxldCBjbGllbnRfaWQgPSB1c3VhcmlvUmV0b3JuYWRvLmZpbmRGaXJzdDxzdHJpbmc+KCdjbGllbnRfaWQnKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGNwZikudG9CZSgnMDEyMzQ1Njc4OScpO1xyXG4gICAgICAgIGV4cGVjdChjbGllbnRfaWQpLnRvQmUoXCIyMzgwXCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG59KTtcclxuIl19
