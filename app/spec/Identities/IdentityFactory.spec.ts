/// <reference path='../../../typings/main.d.ts' />
import {IdentityFactory} from '../../src/Identities/IdentityFactory';
import {IIdentity} from '../../src/Identities/IIdentity';
import {Identity} from '../../src/Identities/Identity';
import {TokenParser} from '../../src/Tokens/Parsers/TokenParser';


describe('IdentityFactory', () => {
    
//   beforeEach(() => {
      
//     });

    it('Should create a new User', () => {
        let someToken = { name:'Joao Vitor'};
        let usuario:IIdentity = IdentityFactory.Create(null,[someToken]);
        expect(usuario).toBeDefined();
    });
    
    it('Should use a existing User and add news values', () => {
        let someToken = { name:'Joao Vitor'};
        
        class IdentityCustomized extends Identity
        {
            public get Cpf() : string 
            {
                let name = this.findFirst<string>('cpf');
                return name;
            }
        }
        
        let usuario = new IdentityCustomized( [{ key: 'cpf', value:'0123456789' }] );
        let usuarioRetornado = IdentityFactory.Create(usuario, [someToken]);
        
        expect(usuarioRetornado.Cpf).toBe('0123456789');
        expect(usuarioRetornado.Name).toBe('Joao Vitor');
    });
    
    it('Should use a existing User and add news values from a token', () => {
        
        const accessToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiaHR0cHM6Ly9wam10c3RzL3Jlc291cmNlcyIsImV4cCI6MTQ2MTg4NjIzNSwibmJmIjoxNDYxODgyNjM1LCJjbGllbnRfaWQiOiIyMzgwIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwicGptdF9wcm9maWxlIiwicGVybWlzc2FvXzIzODAiXSwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLkRpdmVyc29zIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLkdyYWZpY29zLlNvYnJlIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpby5SZWxhdG9yaW9DcmlhY2FvIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6RGFzaGJvYXJkLlJlbGF0b3Jpb3MuUmVsYXRvcmlvQWNlc3NvcyI6WyJBY2Vzc28iLCJBbHRlcmFyIiwiRXhjbHVpciIsIk5vdm8iXSwicGVybWlzc2FvfDIzODA6SG9tZSI6IkFjZXNzbyIsInBlcm1pc3Nhb3wyMzgwOk5vdGljaWFzIjoiQWNlc3NvIiwicGVybWlzc2FvfDIzODA6UmVsYXRvcmlvcyI6IkFjZXNzbyIsImFtciI6WyJwYXNzd29yZCJdfQ.Eg-bdPAHKMIDlVMiGNJxEJ9zqth2UmU-k0Ek1BIthC6WKnfyFOQ7EQXIbQGBrLhm4CHr_siwrgThAL5Nq3GJAo0_wxfjgdgt965FHZLO0Xa-QRTvfWdwCU7_jHYjlwuyJ8IDiEpQf6y6eeUIMxRI0JZa-aIrt5MtMCrMMecTdURXF91bXBFdNDJSGLpqrf687HuzUCHrrznBr6wO-5-5Y24rnpTbEclS9KDJYuTZoBQA6-Tkcy_XBHg4c1whwwORf9Nfv1c8_V6ZjML1eiqdlK7MDjqmsZbAZkScrJzZmxpoBMkvAMDIhkmB8ZVsGkrYICqtrAR6BIuTk2aK3z8low";

        let tokenParser = new TokenParser(accessToken);
        let tokenParsed = tokenParser.Parse();

        let someToken = tokenParsed.conteudoObject();
        
        class IdentityCustomized extends Identity
        {
            public get Cpf() : string 
            {
                let name = this.findFirst<string>('cpf');
                return name;
            }
        }
        
        let usuario = new IdentityCustomized( [{ key: 'cpf', value: '0123456789' }] );
        let usuarioRetornado = IdentityFactory.Create(usuario, [someToken]);

        let cpf = usuarioRetornado.Cpf;
        let client_id = usuarioRetornado.findFirst<string>('client_id');

        expect(cpf).toBe('0123456789');
        expect(client_id).toBe("2380");
    });
    
    
});
