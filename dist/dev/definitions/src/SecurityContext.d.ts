import IPrincipal from './Identities/IPrincipal';
import ISecurityContextInitializer from './ISecurityContextInitializer';
export default SecurityContext;
declare class SecurityContext {
    private static _current;
    static Current: SecurityContext;
    static Reset(): void;
    constructor();
    private _Principal;
    Principal: IPrincipal;
    Init(securityContextInitializer: ISecurityContextInitializer): void;
}
