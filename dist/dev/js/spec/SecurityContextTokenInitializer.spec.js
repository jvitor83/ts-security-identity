System.register(['../src/SecurityContext', '../src/SecurityContextTokenInitializer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SecurityContext_1, SecurityContextTokenInitializer_1;
    return {
        setters:[
            function (SecurityContext_1_1) {
                SecurityContext_1 = SecurityContext_1_1;
            },
            function (SecurityContextTokenInitializer_1_1) {
                SecurityContextTokenInitializer_1 = SecurityContextTokenInitializer_1_1;
            }],
        execute: function() {
            describe('SecurityContextTokenInitializer', () => {
                const accessToken = `{"iss":"https://pjmtsts/","aud":"https://pjmtsts/resources","exp":1462403582,"nbf":1462399982,"client_id":"2380","scope":["openid","profile","pjmt_profile","email","permissao_2380"],"sub":"16843","auth_time":1462397042,"idp":"idsrv","permissao|2380:Dashboard":"Acesso","permissao|2380:Dashboard.Graficos":"Acesso","permissao|2380:Dashboard.Graficos.Diversos":"Acesso","permissao|2380:Dashboard.Graficos.Sobre":"Acesso","permissao|2380:Dashboard.Relatorio.RelatorioCriacao":"Acesso","permissao|2380:Dashboard.Relatorios.RelatorioAcessos":["Acesso","Alterar","Excluir","Novo"],"permissao|2380:Home":"Acesso","permissao|2380:Noticias":"Acesso","permissao|2380:Relatorios":"Acesso","amr":["password"]}`;
                beforeEach(() => {
                    SecurityContext_1.SecurityContext.Reset();
                });
                it('Init should instantiate a User', () => {
                    let json = JSON.parse(accessToken);
                    let securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(json);
                    SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
                    //SecurityContext.Current.User.permissoes.filter((permissao) => permissao.permissoes.some((perm) => perm == ""));
                    //let name = SecurityContext.Current.Principal.Identity.Claims.filter((claim) => claim.key === "name")[0].value;
                    expect(SecurityContext_1.SecurityContext.Current.Principal).toBeDefined();
                });
                it('Init should have a User authenticated', () => {
                    let json = JSON.parse(accessToken);
                    let securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(json);
                    SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
                    //SecurityContext.Current.User.permissoes.filter((permissao) => permissao.permissoes.some((perm) => perm == ""));
                    expect(SecurityContext_1.SecurityContext.Current.Principal.IsAuthenticated).toBeTruthy();
                });
                it('User should have client_id', () => {
                    let json = JSON.parse(accessToken);
                    let securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(json);
                    SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
                    let client_id = SecurityContext_1.SecurityContext.Current.Principal.Identity.findFirst('client_id');
                    expect(client_id).toBe('2380');
                });
                it('User should not be authenticated', () => {
                    expect(SecurityContext_1.SecurityContext.Current.Principal.IsAuthenticated).toBe(false);
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFLQSxRQUFRLENBQUMsaUNBQWlDLEVBQUU7Z0JBRXhDLE1BQU0sV0FBVyxHQUFVLDJyQkFBMnJCLENBQUM7Z0JBRXp0QixVQUFVLENBQUM7b0JBQ1AsaUNBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO29CQUVqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLDBCQUEwQixHQUFHLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNFLGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUV6RCxpSEFBaUg7b0JBRWpILGdIQUFnSDtvQkFFaEgsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU1RCxDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7b0JBRXhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25DLElBQUksMEJBQTBCLEdBQUcsSUFBSSxpRUFBK0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0UsaUNBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7b0JBRXpELGlIQUFpSDtvQkFFakgsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFFM0UsQ0FBQyxDQUFDLENBQUM7Z0JBR0gsRUFBRSxDQUFDLDRCQUE0QixFQUFFO29CQUU3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLDBCQUEwQixHQUFHLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTNFLGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUV6RCxJQUFJLFNBQVMsR0FBYyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUyxDQUFDLFNBQVMsQ0FBUyxXQUFXLENBQUMsQ0FBQztvQkFFdEcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFbkMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO29CQUVuQyxNQUFNLENBQUMsaUNBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFMUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzcGVjL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzJyAvPlxyXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi4vc3JjL1NlY3VyaXR5Q29udGV4dCc7XHJcbmltcG9ydCB7SWRlbnRpdHl9IGZyb20gJy4uL3NyYy9JZGVudGl0aWVzL0lkZW50aXR5JztcclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuLi9zcmMvU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcic7XHJcblxyXG5kZXNjcmliZSgnU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcicsICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgYWNjZXNzVG9rZW46c3RyaW5nID0gYHtcImlzc1wiOlwiaHR0cHM6Ly9wam10c3RzL1wiLFwiYXVkXCI6XCJodHRwczovL3BqbXRzdHMvcmVzb3VyY2VzXCIsXCJleHBcIjoxNDYyNDAzNTgyLFwibmJmXCI6MTQ2MjM5OTk4MixcImNsaWVudF9pZFwiOlwiMjM4MFwiLFwic2NvcGVcIjpbXCJvcGVuaWRcIixcInByb2ZpbGVcIixcInBqbXRfcHJvZmlsZVwiLFwiZW1haWxcIixcInBlcm1pc3Nhb18yMzgwXCJdLFwic3ViXCI6XCIxNjg0M1wiLFwiYXV0aF90aW1lXCI6MTQ2MjM5NzA0MixcImlkcFwiOlwiaWRzcnZcIixcInBlcm1pc3Nhb3wyMzgwOkRhc2hib2FyZFwiOlwiQWNlc3NvXCIsXCJwZXJtaXNzYW98MjM4MDpEYXNoYm9hcmQuR3JhZmljb3NcIjpcIkFjZXNzb1wiLFwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zXCI6XCJBY2Vzc29cIixcInBlcm1pc3Nhb3wyMzgwOkRhc2hib2FyZC5HcmFmaWNvcy5Tb2JyZVwiOlwiQWNlc3NvXCIsXCJwZXJtaXNzYW98MjM4MDpEYXNoYm9hcmQuUmVsYXRvcmlvLlJlbGF0b3Jpb0NyaWFjYW9cIjpcIkFjZXNzb1wiLFwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3Nvc1wiOltcIkFjZXNzb1wiLFwiQWx0ZXJhclwiLFwiRXhjbHVpclwiLFwiTm92b1wiXSxcInBlcm1pc3Nhb3wyMzgwOkhvbWVcIjpcIkFjZXNzb1wiLFwicGVybWlzc2FvfDIzODA6Tm90aWNpYXNcIjpcIkFjZXNzb1wiLFwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvc1wiOlwiQWNlc3NvXCIsXCJhbXJcIjpbXCJwYXNzd29yZFwiXX1gO1xyXG4gICAgXHJcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgIFNlY3VyaXR5Q29udGV4dC5SZXNldCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ0luaXQgc2hvdWxkIGluc3RhbnRpYXRlIGEgVXNlcicsICgpID0+IHtcclxuICAgIFxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIoanNvbik7XHJcbiAgICAgICAgU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuSW5pdChzZWN1cml0eUNvbnRleHRJbml0aWFsaXplcik7XHJcbiAgICBcclxuICAgICAgICAvL1NlY3VyaXR5Q29udGV4dC5DdXJyZW50LlVzZXIucGVybWlzc29lcy5maWx0ZXIoKHBlcm1pc3NhbykgPT4gcGVybWlzc2FvLnBlcm1pc3NvZXMuc29tZSgocGVybSkgPT4gcGVybSA9PSBcIlwiKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9sZXQgbmFtZSA9IFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LlByaW5jaXBhbC5JZGVudGl0eS5DbGFpbXMuZmlsdGVyKChjbGFpbSkgPT4gY2xhaW0ua2V5ID09PSBcIm5hbWVcIilbMF0udmFsdWU7XHJcbiAgICBcclxuICAgICAgICBleHBlY3QoU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuUHJpbmNpcGFsKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ0luaXQgc2hvdWxkIGhhdmUgYSBVc2VyIGF1dGhlbnRpY2F0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcihqc29uKTtcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgIFxyXG4gICAgICAgIC8vU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuVXNlci5wZXJtaXNzb2VzLmZpbHRlcigocGVybWlzc2FvKSA9PiBwZXJtaXNzYW8ucGVybWlzc29lcy5zb21lKChwZXJtKSA9PiBwZXJtID09IFwiXCIpKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QoU2VjdXJpdHlDb250ZXh0LkN1cnJlbnQuUHJpbmNpcGFsLklzQXV0aGVudGljYXRlZCkudG9CZVRydXRoeSgpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpdCgnVXNlciBzaG91bGQgaGF2ZSBjbGllbnRfaWQnLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgU2VjdXJpdHlDb250ZXh0VG9rZW5Jbml0aWFsaXplcihqc29uKTtcclxuICAgICAgICBcclxuICAgICAgICBTZWN1cml0eUNvbnRleHQuQ3VycmVudC5Jbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gKDxJZGVudGl0eT5TZWN1cml0eUNvbnRleHQuQ3VycmVudC5QcmluY2lwYWwuSWRlbnRpdHkpLmZpbmRGaXJzdDxzdHJpbmc+KCdjbGllbnRfaWQnKTtcclxuICAgIFxyXG4gICAgICAgIGV4cGVjdChjbGllbnRfaWQpLnRvQmUoJzIzODAnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdCgnVXNlciBzaG91bGQgbm90IGJlIGF1dGhlbnRpY2F0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwZWN0KFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LlByaW5jaXBhbC5Jc0F1dGhlbnRpY2F0ZWQpLnRvQmUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
