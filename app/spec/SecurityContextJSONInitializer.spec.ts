/// <reference path='../../typings/main.d.ts' />
import {SecurityContext} from '../src/SecurityContext';
import {PjmtIdentity} from '../src/Identities/PjmtIdentity';
import {SecurityContextJSONInitializer} from '../src/SecurityContextJSONInitializer';

describe('SecurityContextJSONInitializer', () => {
    
    const accessToken:string = `{"iss":"https://pjmtsts/","aud":"https://pjmtsts/resources","exp":1462403582,"nbf":1462399982,"client_id":"2380","scope":["openid","profile","pjmt_profile","email","permissao_2380"],"sub":"16843","auth_time":1462397042,"idp":"idsrv","permissao|2380:Dashboard":"Acesso","permissao|2380:Dashboard.Graficos":"Acesso","permissao|2380:Dashboard.Graficos.Diversos":"Acesso","permissao|2380:Dashboard.Graficos.Sobre":"Acesso","permissao|2380:Dashboard.Relatorio.RelatorioCriacao":"Acesso","permissao|2380:Dashboard.Relatorios.RelatorioAcessos":["Acesso","Alterar","Excluir","Novo"],"permissao|2380:Home":"Acesso","permissao|2380:Noticias":"Acesso","permissao|2380:Relatorios":"Acesso","amr":["password"]}`;
    
  beforeEach(() => {
      SecurityContext.Reset();
    });

    it('Init should instantiate a User', () => {
    
        let json = JSON.parse(accessToken);
        let securityContextInitializer = new SecurityContextJSONInitializer(json);
        SecurityContext.Current.Init(securityContextInitializer);
    
        //SecurityContext.Current.User.permissoes.filter((permissao) => permissao.permissoes.some((perm) => perm == ""));
    
        expect(SecurityContext.Current.Principal).toBeDefined();
    
    });
    
    it('Init should have a User authenticated', () => {
        
        let json = JSON.parse(accessToken);
        let securityContextInitializer = new SecurityContextJSONInitializer(json);
        SecurityContext.Current.Init(securityContextInitializer);
    
        //SecurityContext.Current.User.permissoes.filter((permissao) => permissao.permissoes.some((perm) => perm == ""));
        
        expect(SecurityContext.Current.Principal.IsAuthenticated).toBeTruthy();
    
    });
    
    
    it('User should have client_id', () => {
        
        let json = JSON.parse(accessToken);
        let securityContextInitializer = new SecurityContextJSONInitializer(json);
        
        SecurityContext.Current.Init(securityContextInitializer);
        
        expect((<PjmtIdentity>SecurityContext.Current.Principal.Identity).ClientID).toBe('2380');
        
    });
    
    it('User should not be authenticated', () => {
        
        expect(SecurityContext.Current.Principal.IsAuthenticated).toBe(false);
    
    });
});
