import {IPrincipal} from './IPrincipal';
import {IIdentity} from './IIdentity';

//export default Principal;

export class Principal implements IPrincipal
{
    constructor(public Identity :IIdentity, public AuthenticationType :string = "Generic") 
    {
        
    }
    
    public get IsAuthenticated(): boolean
    {
        let isAuthenticated = false;
        if(this.Identity)
        {
            isAuthenticated = this.Identity.IsAuthenticated;
        }
        return isAuthenticated;
    }
}