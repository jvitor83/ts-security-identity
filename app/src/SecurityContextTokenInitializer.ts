import {SecurityContext} from './SecurityContext';
import {ISecurityContextInitializer} from './ISecurityContextInitializer';

import {IdentityFactory} from './Identities/IdentityFactory';
import {Identity} from './Identities/Identity';

//export default SecurityContextTokenInitializer;

export class SecurityContextTokenInitializer implements ISecurityContextInitializer
{
    constructor(public tokens :any[]) 
    {
        
    }
    
    public Initialize(securityContext :SecurityContext)
    {
        let userCreated = IdentityFactory.Create(Identity, this.tokens);
        securityContext.Principal.Identity = userCreated;
    }
}
    