//import {IPjmtAccessTokenContent} from '../Tokens/AccessToken/IPjmtAccessTokenContent';
//import {IPjmtIdentityTokenContent} from '../Tokens/IdentityToken/IPjmtIdentityTokenContent';
import {IToken} from '../Tokens/IToken';
import {IIdentity} from './IIdentity';
import {IPermissaoObjeto} from './IPermissao';
import assign = require('object-assign');

export abstract class IdentityFactory
{
    constructor()
    {
        
    }
    
    public static Create(user? :IIdentity, ...tokens :IToken[]) : IIdentity
    {
        //Force the identity object to be uninitialized (null properties)
        let identity:IIdentity = <any>{};
         
        if(user != null)
        {
            identity = user;
            identity.isAuthenticated = true;
        }
        
        tokens.forEach((token) => assign(identity, token));
       
        return identity;
    }
}