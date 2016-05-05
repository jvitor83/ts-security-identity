import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';

import {IdentityFactory} from './Identities/IdentityFactory';
import {PjmtIdentity} from './Identities/PjmtIdentity';

export class SecurityContextJSONInitializer implements ISecurityContextInitializer
{
    constructor(public jsonArgs :any[]) 
    {

    }
    
    public Initialize(securityContext :SecurityContext)
    {
        let userCreated = IdentityFactory.Create(PjmtIdentity, this.jsonArgs);
        securityContext.Principal.Identity = userCreated;
    }
}
