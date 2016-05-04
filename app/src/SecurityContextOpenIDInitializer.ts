import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';

import {TokenDecoder} from './Tokens/Parsers/TokenDecoder';
import {TokenParser} from './Tokens/Parsers/TokenParser';
import {PjmtAccessTokenParsed} from './Tokens/AccessToken/PjmtAccessTokenParsed';
import {PjmtIdentityTokenParsed} from './Tokens/IdentityToken/PjmtIdentityTokenParsed';
import {IdentityFactory} from './Identities/IdentityFactory';
import {IPrincipal} from './Identities/IPrincipal';
import {PjmtIdentity} from './Identities/PjmtIdentity';

export class SecurityContextOpenIDInitializer implements ISecurityContextInitializer
{
    constructor(public accessToken: string, public identityToken?: string) 
    {
        
    }
    
    public Initialize(securityContext :SecurityContext)
    {
        let accessTokenDecoder = new TokenDecoder(this.accessToken);
        let accessTokenDecoded = accessTokenDecoder.Decode();

        let accessTokenParser = new TokenParser(accessTokenDecoded);
        let accessTokenParsed: PjmtAccessTokenParsed = accessTokenParser.Parse(PjmtAccessTokenParsed);

        //if is informed the identity token, then should use this as well
        let identityTokenParsed: PjmtIdentityTokenParsed = null;
        if (this.identityToken != null)
        {
            let identityTokenDecoder = new TokenDecoder(this.identityToken);
            let identityTokenDecoded = identityTokenDecoder.Decode();

            let identityTokenParser = new TokenParser(identityTokenDecoded);
            identityTokenParsed = identityTokenParser.Parse(PjmtIdentityTokenParsed);
        }

        let accessTokenContent = accessTokenParsed.conteudoObject;
        let identityTokenContent = identityTokenParsed.conteudoObject;

        let userCreated = IdentityFactory.Create(PjmtIdentity, accessTokenContent, identityTokenContent);
        securityContext.Principal.Identity = userCreated;
    }
}
