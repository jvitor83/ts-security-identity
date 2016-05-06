import {SecurityContext} from './SecurityContext';

import {IdentityFactory} from './Identities/IdentityFactory';
import {Identity} from './Identities/Identity';


export class SecurityContextTokenInitializer implements SecurityContextTokenInitializer
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
    