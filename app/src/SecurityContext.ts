///<reference path='../../typings/main.d.ts'/>
import {TokenDecoder} from './Tokens/TokenDecoder';
import {PjmtAccessTokenDecoded} from './Tokens/AccessToken/PjmtAccessTokenDecoded';
import {PjmtIdentityTokenDecoded} from './Tokens/IdentityToken/PjmtIdentityTokenDecoded';
import {IdentityFactory} from './Identity/IdentityFactory';
import {IIdentity} from './Identity/IIdentity';

let isElectronRenderer:Boolean = require('is-electron-renderer');
 

// export namespace PJMT.Security
// {
    export abstract class SecurityContext 
    {
        static user: IIdentity;
        
        public static Init(accessToken :string, identityToken?: string) {
            
            let accessTokenDecoder = new TokenDecoder(accessToken);
            let accessTokenDecoded :PjmtAccessTokenDecoded = accessTokenDecoder.Decode<PjmtAccessTokenDecoded>(PjmtAccessTokenDecoded);            
            
            //if is informed the identity token, then should use this as well
            let identityTokenDecoded :PjmtIdentityTokenDecoded = null;
            if(identityToken != null)
            {
                let identityTokenDecoder = new TokenDecoder(identityToken);
                identityTokenDecoded = identityTokenDecoder.Decode<PjmtIdentityTokenDecoded>(PjmtIdentityTokenDecoded);
            }
            
            let accessTokenContent = accessTokenDecoded.conteudoObject;
            let identityTokenContent = identityTokenDecoded.conteudoObject;
            
            let user = IdentityFactory.Create(accessTokenContent, identityTokenContent);
            SecurityContext.user = user;
            
        }
    }
//}
