/// <reference path='../../../typings/main.d.ts' />
import {IdentityFactory} from '../../src/Identities/IdentityFactory';
import {IIdentity} from '../../src/Identities/IIdentity';
import {Identity} from '../../src/Identities/Identity';
import {IToken} from '../../src/Tokens/IToken';
import {Token} from '../../src/Tokens/Token';


describe('IdentityFactory', () => {
    
//   beforeEach(() => {
      
//     });

    it('Should create a new User', () => {
        let someToken :IToken = new Token({ key:'name',value:'Joao Vitor' });
        let usuario:IIdentity = IdentityFactory.Create(null,someToken);
        expect(usuario).toBeDefined();
    });
    
    it('Should use a existing User and add news values', () => {
        //let someToken = new Token({ key:'name',value:'Joao Vitor' });
        
        let someToken :IToken = [{ key:'name',value:'Joao Vitor' }];
        
        //console.log(someToken);
        class IdentityCustomized extends Identity
        {
            public get Cpf() : string 
            {
                let name = this.findFirst<string>('cpf');
                return name;
            }
        }
        
        let usuario = new IdentityCustomized( [{ key: 'cpf', value:'0123456789' }] );
        let usuarioRetornado = IdentityFactory.Create(usuario, someToken);


        expect(usuarioRetornado.Cpf).toBe('0123456789');
        
        expect(usuarioRetornado.Name).toBe('Joao Vitor');
    });
    
    it('Generate should 1', () => {
        let someToken :IToken = [{ key:'name',value:'Joao Vitor' }];
        
                
        class IdentityCustomized extends Identity
        {
            public get Cpf() : string 
            {
                let name = this.findFirst<string>('cpf');
                return name;
            }
        }
        let usuario = new IdentityCustomized( [{ key: 'cpf', value:'0123456789' }] );
        let usuarioRetornado = IdentityFactory.Create(usuario, someToken);
        //let usuarioExpect:IdentityCustomized = usuarioRetornado as IdentityCustomized;

        expect(usuarioRetornado.Cpf).toBe('0123456789');
        
        //expect(usuarioExpect.Name).toBe('Joao Vitor');
    });
    
    it('Generate should 2', () => {
        let someToken :IToken = [{ key:'cpf',value:'0123456789' }];
        
                
        class IdentityCustomized extends Identity
        {
            public get Cpf() : string 
            {
                let name = this.findFirst<string>('cpf');
                return name;
            }
        }
        
        let usuarioRetornado = IdentityFactory.Create(IdentityCustomized, someToken);
        

        expect(usuarioRetornado.Cpf).toBe('0123456789');
    });
});
