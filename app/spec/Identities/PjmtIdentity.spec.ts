/// <reference path='../../../typings/main.d.ts' />
import {PjmtIdentity} from '../../src/Identities/PjmtIdentity';
//import {Token} from '../../src/Tokens/Token';


describe('PjmtIdentity', () => {
    
//   beforeEach(() => {
//     });

    it('Should have permissoes', () => {
        
        let usuario = new PjmtIdentity([{ key: "permissao|2380:Dashboard", value: "Acesso" }]);
        let permissao = usuario.Permissoes[0];
        
        expect(permissao.objeto).toBe('Dashboard');
        expect(permissao.id_sistema).toBe('2380');
        expect(permissao.permissoes[0]).toBe('Acesso');
        
    });
    
    it('Should have parsed permissao without objeto', () => {
        
        let usuario = new PjmtIdentity([{ key: "permissao|2380", value: "Acesso" }]);
        let permissao = usuario.Permissoes[0];
        
        expect(permissao.objeto).toBe('*');
        expect(permissao.id_sistema).toBe('2380');
        expect(permissao.permissoes[0]).toBe('Acesso');
        
    });
});