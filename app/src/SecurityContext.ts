import IPrincipal from './Identities/IPrincipal';
import Principal from './Identities/Principal';
import ISecurityContextInitializer from './ISecurityContextInitializer';

export default SecurityContext;

class SecurityContext 
{
    private static _current: SecurityContext = null;

    public static get Current(): SecurityContext 
    {
        if(SecurityContext._current === null)
        {
            SecurityContext._current =  new SecurityContext();
        }
        return SecurityContext._current;
    }
    
    public static Reset()
    {
        SecurityContext._current = null;
    }

    constructor() 
    {
        this.Principal = new Principal();
    }

    private _Principal: IPrincipal = <any>
    {
        IsAuthenticated: false,
        Identity: null
    };

    public get Principal(): IPrincipal 
    {
        return this._Principal;
    }

    public set Principal(value: IPrincipal) 
    {
        this._Principal = value;
    }

    public Init(securityContextInitializer :ISecurityContextInitializer)
    {
        securityContextInitializer.Initialize(this);
    }
}