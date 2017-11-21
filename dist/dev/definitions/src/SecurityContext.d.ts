import { IPrincipal } from './Identities/IPrincipal';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContext {
    private static _current;
    private _Principal;
    static readonly Current: SecurityContext;
    static Reset(): void;
    constructor();
    Principal: IPrincipal;
    Init(securityContextInitializer: ISecurityContextInitializer): void;
}
