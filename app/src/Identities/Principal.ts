import {IPrincipal} from './IPrincipal';
import {IIdentity} from './IIdentity';

//export default Principal;

export class Principal implements IPrincipal
{
    constructor(public Identity? :IIdentity, public AuthenticationType :string = "Generic") 
    {
        
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