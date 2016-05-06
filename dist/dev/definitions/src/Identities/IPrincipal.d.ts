import IIdentity from './IIdentity';
export default IPrincipal;
declare class IPrincipal {
    Identity: IIdentity;
    IsAuthenticated: boolean;
    AuthenticationType: string;
}
