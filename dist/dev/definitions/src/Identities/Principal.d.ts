import IPrincipal from './IPrincipal';
import IIdentity from './IIdentity';
export default Principal;
declare class Principal implements IPrincipal {
    Identity: IIdentity;
    AuthenticationType: string;
    constructor(Identity?: IIdentity, AuthenticationType?: string);
    IsAuthenticated: boolean;
}
