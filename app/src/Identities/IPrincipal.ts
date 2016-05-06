import IIdentity from './IIdentity';

export default IPrincipal;

class IPrincipal
{
    
    Identity: IIdentity;
    
    IsAuthenticated: boolean;
    AuthenticationType: string;
}