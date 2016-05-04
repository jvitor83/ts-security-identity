import { IPrincipal } from './IPrincipal';
import { IIdentity } from './IIdentity';

export class Principal implements IPrincipal
{
    constructor(public Identity? :IIdentity, AuthenticationType? :string) 
    {
        if(AuthenticationType == null)
        {
            this._AuthenticationType = "Generic";
        }
        else
        {
            this._AuthenticationType = AuthenticationType;
        }
    }
    
    
    private _AuthenticationType: string;
    
    public get AuthenticationType(): string
    {
        return this._AuthenticationType;
    }
    
    public get IsAuthenticated(): boolean
    {
        if (this.Identity != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}