import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContextEncodedTokenInitializer implements ISecurityContextInitializer {
    encodedTokens: string[];
    constructor(encodedTokens: string[]);
    Initialize(securityContext: SecurityContext): void;
}
