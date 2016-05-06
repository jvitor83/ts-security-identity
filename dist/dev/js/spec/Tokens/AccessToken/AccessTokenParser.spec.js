/// <reference path='../../../../typings/main.d.ts' />
System.register(['../../../src/Tokens/Parsers/TokenParser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParser_1;
    return {
        setters:[
            function (TokenParser_1_1) {
                TokenParser_1 = TokenParser_1_1;
            }],
        execute: function() {
            describe('AccessTokenParser', function () {
                var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";
                // beforeEach(() => {
                // });
                it('should parse a token', function () {
                    var tokenParser = new TokenParser_1.default(token);
                    var tokenParsed = tokenParser.Parse();
                    //let idp = tokenDecoded.cabecalhoObject.typ;
                    var client_id = tokenParsed.contentJSON.client_id;
                    expect(client_id).toBe("2380");
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvVG9rZW5zL0FjY2Vzc1Rva2VuL0FjY2Vzc1Rva2VuUGFyc2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEOzs7Ozs7Ozs7OztZQUd0RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7Z0JBRTFCLElBQU0sS0FBSyxHQUFVLGc0Q0FBZzRDLENBQUM7Z0JBRXg1QyxxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBRU4sRUFBRSxDQUFDLHNCQUFzQixFQUFFO29CQUV6QixJQUFJLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFFdEMsNkNBQTZDO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztvQkFFbEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzcGVjL1Rva2Vucy9BY2Nlc3NUb2tlbi9BY2Nlc3NUb2tlblBhcnNlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHMnIC8+XHJcblxyXG5pbXBvcnQgVG9rZW5QYXJzZXIgZnJvbSAnLi4vLi4vLi4vc3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VyJztcclxuZGVzY3JpYmUoJ0FjY2Vzc1Rva2VuUGFyc2VyJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0lzSW5nMWRDSTZJbUV6Y2sxVlowMUdkamwwVUdOc1RHRTJlVVl6ZWtGclpuRjFSU0o5LmV5SnBjM01pT2lKb2RIUndjem92TDNCcWJYUnpkSE12SWl3aVlYVmtJam9pYUhSMGNITTZMeTl3YW0xMGMzUnpMM0psYzI5MWNtTmxjeUlzSW1WNGNDSTZNVFEyTVRnNE5qSXpOU3dpYm1KbUlqb3hORFl4T0RneU5qTTFMQ0pqYkdsbGJuUmZhV1FpT2lJeU16Z3dJaXdpYzJOdmNHVWlPbHNpYjNCbGJtbGtJaXdpY0hKdlptbHNaU0lzSW1WdFlXbHNJaXdpY0dwdGRGOXdjbTltYVd4bElpd2ljR1Z5YldsemMyRnZYekl6T0RBaVhTd2ljM1ZpSWpvaU1UWTRORE1pTENKaGRYUm9YM1JwYldVaU9qRTBOakV4TmpRNU16SXNJbWxrY0NJNkltbGtjM0oySWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprSWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGtScGRtVnljMjl6SWpvaVFXTmxjM052SWl3aWNHVnliV2x6YzJGdmZESXpPREE2UkdGemFHSnZZWEprTGtkeVlXWnBZMjl6TGxOdlluSmxJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBieTVTWld4aGRHOXlhVzlEY21saFkyRnZJam9pUVdObGMzTnZJaXdpY0dWeWJXbHpjMkZ2ZkRJek9EQTZSR0Z6YUdKdllYSmtMbEpsYkdGMGIzSnBiM011VW1Wc1lYUnZjbWx2UVdObGMzTnZjeUk2V3lKQlkyVnpjMjhpTENKQmJIUmxjbUZ5SWl3aVJYaGpiSFZwY2lJc0lrNXZkbThpWFN3aWNHVnliV2x6YzJGdmZESXpPREE2U0c5dFpTSTZJa0ZqWlhOemJ5SXNJbkJsY20xcGMzTmhiM3d5TXpnd09rNXZkR2xqYVdGeklqb2lRV05sYzNOdklpd2ljR1Z5YldsemMyRnZmREl6T0RBNlVtVnNZWFJ2Y21sdmN5STZJa0ZqWlhOemJ5SXNJbUZ0Y2lJNld5SndZWE56ZDI5eVpDSmRmUS5FZy1iZFBBSEtNSURsVk1pR05KeEVKOXpxdGgyVW1VLWswRWsxQkl0aEM2V0tuZnlGT1E3RVFYSWJRR0JyTGhtNENIcl9zaXdyZ1RoQUw1TnEzR0pBbzBfd3hmamdkZ3Q5NjVGSFpMTzBYYS1RUlR2Zldkd0NVN19qSFlqbHd1eUo4SURpRXBRZjZ5NmVlVUlNeFJJMEpaYS1hSXJ0NU10TUNyTU1lY1RkVVJYRjkxYlhCRmROREpTR0xwcXJmNjg3SHV6VUNIcnJ6bkJyNndPLTUtNVkyNHJucFRiRWNsUzlLREpZdVRab0JRQTYtVGtjeV9YQkhnNGMxd2h3d09SZjlOZnYxYzhfVjZaak1MMWVpcWRsSzdNRGpxbXNaYkFaa1Njckp6Wm14cG9CTWt2QU1ESWhrbUI4WlZzR2tyWUlDcXRyQVI2Qkl1VGsyYUszejhsb3dcIjtcclxuXHJcbiAgLy8gYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgcGFyc2UgYSB0b2tlbicsICgpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IHRva2VuUGFyc2VyID0gbmV3IFRva2VuUGFyc2VyKHRva2VuKTtcclxuICAgIGxldCB0b2tlblBhcnNlZCA9IHRva2VuUGFyc2VyLlBhcnNlKCk7XHJcbiAgICBcclxuICAgIC8vbGV0IGlkcCA9IHRva2VuRGVjb2RlZC5jYWJlY2FsaG9PYmplY3QudHlwO1xyXG4gICAgbGV0IGNsaWVudF9pZCA9IHRva2VuUGFyc2VkLmNvbnRlbnRKU09OLmNsaWVudF9pZDtcclxuICAgIFxyXG4gICAgZXhwZWN0KGNsaWVudF9pZCkudG9CZShcIjIzODBcIik7XHJcbiAgICBcclxuICAgIH0pO1xyXG59KTtcclxuIl19
