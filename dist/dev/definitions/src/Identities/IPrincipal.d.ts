import { IIdentity } from './IIdentity';
export declare class IPrincipal {
    Identity: IIdentity;
    IsAuthenticated: boolean;
    AuthenticationType: string;
}
