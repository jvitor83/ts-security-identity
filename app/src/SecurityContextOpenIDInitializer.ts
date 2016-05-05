import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';

import {TokenParser} from './Tokens/Parsers/TokenParser';
import {ITokenParsed} from './Tokens/Parsers/ITokenParsed';
import {IPjmtAccessTokenContent} from './Tokens/AccessToken/IPjmtAccessTokenContent';
import {IPjmtIdentityTokenContent} from './Tokens/IdentityToken/IPjmtIdentityTokenContent';
import {IdentityFactory} from './Identities/IdentityFactory';
import {PjmtIdentity} from './Identities/PjmtIdentity';

export class SecurityContextOpenIDInitializer implements ISecurityContextInitializer
{
    constructor(public accessToken: string, public identityToken?: string) 
    {
        
    }
    
    public Initialize(securityContext :SecurityContext)
    {
        let accessTokenParser = new TokenParser(this.accessToken);
        let accessTokenParsed = accessTokenParser.Parse();
        
        //if is informed the identity token, then should use this as well
        let identityTokenParsed:ITokenParsed = null;
        if (this.identityToken != null)
        {
            let identityTokenParser = new TokenParser(this.identityToken);
            identityTokenParsed = identityTokenParser.Parse();
        }
        
        let accessTokenContent = accessTokenParsed.conteudoObject<IPjmtAccessTokenContent>();
        let identityTokenContent = identityTokenParsed.conteudoObject<IPjmtIdentityTokenContent>();
        
        let userCreated = IdentityFactory.Create(PjmtIdentity, [accessTokenContent, identityTokenContent]);
        securityContext.Principal.Identity = userCreated;
    }
}
