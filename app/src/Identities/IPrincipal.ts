import {IIdentity} from './IIdentity';

    export class IPrincipal
    {
        
        Identity: IIdentity;
        
        IsAuthenticated: boolean;
        AuthenticationType: string;
    }