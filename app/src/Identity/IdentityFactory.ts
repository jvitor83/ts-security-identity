import {IPjmtAccessTokenContent} from '../Tokens/AccessToken/IPjmtAccessTokenContent';
import {IPjmtIdentityTokenContent} from '../Tokens/IdentityToken/IPjmtIdentityTokenContent';
import {IIdentity} from './IIdentity';
import {IPermissaoObjeto} from './IPermissao';

export abstract class IdentityFactory
{
    constructor()
    {
        
    }
    
    public static Create(pjmtAccessTokenContent: IPjmtAccessTokenContent, pjmtIdentityTokenContent?: IPjmtIdentityTokenContent) : IIdentity
    {
        let user:IIdentity = {
            nome: null,
            cpf: null,
            email: null,
            id_lotacao: null,
            matricula: null,
            client_id: null,
            
            permissoes: null,
         };
        
        if(pjmtIdentityTokenContent != null)
        {
            user.nome = pjmtIdentityTokenContent.name;
            user.cpf = pjmtIdentityTokenContent.cpf;
            user.email = pjmtIdentityTokenContent.email;
            user.id_lotacao = parseInt( pjmtIdentityTokenContent.id_lotacao );
            user.matricula = parseInt( pjmtIdentityTokenContent.matricula );
        }
        
        user.client_id = parseInt( pjmtAccessTokenContent.client_id );
        // console.log(user);
        // console.log(pjmtIdentityTokenContent);
        //console.log(pjmtAccessTokenContent.claims);
        
        
        let permissoes :Array<IPermissaoObjeto> = new Array<IPermissaoObjeto>();
        let permissoesFiltradas = pjmtAccessTokenContent.claims.filter(function ()
        {
            return true;
        });
        permissoesFiltradas.forEach(function(permissao, index)
        {
            let permissaoUser: IPermissaoObjeto = {
                id_sistema: null,
                objeto: null,
                permissoes: null
            };
            
            
            let chave = permissao.key;
            //TODO: Parsear para obter o id_sistema e objeto
            permissaoUser.id_sistema = null;
            permissaoUser.objeto = null;
            
            
            //Normaliza para string[]
            let permissoesStringArray: Array<string> = new Array<string>();
            if (typeof permissao.value === 'string') 
            {
                let permissaoUserPermissao:string = (<string>permissao.value);
                permissoesStringArray.push(permissaoUserPermissao);
            } 
            else
            {
                let permissaoUserPermissao:string[] = (<string[]>permissao.value);
                permissaoUserPermissao.forEach(function(permissaoPercorrendo)
                {
                    permissoesStringArray.push(permissaoPercorrendo);
                });
            }
            
            permissaoUser.permissoes = permissoesStringArray;
            
            
            
            permissoes.push(permissaoUser);
        });
       
        return user;
    }
}