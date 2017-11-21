import { IPrincipal } from './IPrincipal';
import { IIdentity } from './IIdentity';
export declare class Principal implements IPrincipal {
    Identity: IIdentity;
    AuthenticationType: string;
    constructor(Identity: IIdentity, AuthenticationType?: string);
    readonly IsAuthenticated: boolean;
}
