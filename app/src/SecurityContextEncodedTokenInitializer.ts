import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';

import {TokenParser} from './Tokens/Parsers/TokenParser';
import {IdentityFactory} from './Identities/IdentityFactory';
import {Identity} from './Identities/Identity';


export class SecurityContextEncodedTokenInitializer implements ISecurityContextInitializer
{
    constructor(public encodedTokens :string[]) 
    {
        
    }
    
    public Initialize(securityContext :SecurityContext)
    {
        let decodedTokensContent = this.encodedTokens.map((encodedToken) =>
        {
            let tokenParser = new TokenParser(encodedToken);
            let tokenParsed = tokenParser.Parse();
            let tokenContent = tokenParsed.contentJSON;
            return tokenContent;
        });
        
        let userCreated = IdentityFactory.Create(Identity, decodedTokensContent);
        securityContext.Principal.Identity = userCreated;
    }
}
