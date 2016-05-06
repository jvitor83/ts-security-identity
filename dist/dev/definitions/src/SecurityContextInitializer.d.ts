import SecurityContext from './SecurityContext';
import ISecurityContextInitializer from './ISecurityContextInitializer';
export default SecurityContextInitializer;
declare abstract class SecurityContextInitializer {
    static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer: {
        new (...args): T;
    }, ...args: any[]): T;
    static InitializeWithTokens(tokens: any[]): SecurityContext;
    static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext;
}
