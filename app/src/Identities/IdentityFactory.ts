//import {IPjmtAccessTokenContent} from '../Tokens/AccessToken/IPjmtAccessTokenContent';
//import {IPjmtIdentityTokenContent} from '../Tokens/IdentityToken/IPjmtIdentityTokenContent';
import {IToken} from '../Tokens/IToken';
import {IIdentity} from './IIdentity';
import {Identity} from './Identity';
import {IPermissaoObjeto} from './IPermissao';
import assign = require('object-assign');


export abstract class IdentityFactory
{
    private static isIIdentity<T extends IIdentity>(valor: IIdentity | { new(Claims:Array<{ key: string, value: any }>): T }): valor is IIdentity 
    {
        return (<IIdentity>valor).Claims !== undefined;
    }

    public static Create<T extends IIdentity>(userOrUserType? :T | { new(Claims:Array<{ key: string, value: any }>): T }, ...tokens :IToken[]):T
    {
        let keyValuePairArray = IdentityFactory.GenerateKeyValuePair(tokens); 
        
        let identity :IIdentity = null;
        if(userOrUserType == null)
        {
            identity = new Identity(keyValuePairArray);
        }
        else
        {
            if(IdentityFactory.isIIdentity(userOrUserType))
            {
                identity = userOrUserType;
            }
            else
            {
                identity = new userOrUserType(keyValuePairArray);
            }
        }
        
        keyValuePairArray.forEach((keyValuePair) =>
        {
            let item = keyValuePair.value;
            identity.Claims.push(item);
        });
       
        return <T>identity;
    }
    
    private static GenerateKeyValuePair(tokens :IToken[]):Array<{ key: string, value: any }>
    {
        let keyValuePairArray :Array<{key:string,value:any}> = new Array<{key:string,value:any}>(); 
        
        tokens.forEach((token) =>
        {
            for(let chave in token)
            {
                if(token.hasOwnProperty(chave))
                {
                    let valor = token[chave];
                    let novoItem = {
                        key : chave,
                        value : valor
                    }
                    keyValuePairArray.push( novoItem );
                }
            }
        });

        return keyValuePairArray;
    }
}
